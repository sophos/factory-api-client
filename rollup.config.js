import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import pkg from './package.json';

const extensions = ['.js', '.ts'];
const external = Object.keys(pkg.dependencies);
const resolveOptions = { extensions };

const config = {
	input: 'src/index.ts',
	external,

	plugins: [
		babel({
			extensions,
			exclude: 'node_modules/**',
			babelHelpers: 'bundled'
		}),
		commonjs()
	]
};

export default [{
	...config,
	output: {
		file: pkg.module,
		format: 'esm',
		sourcemap: true
	},

	plugins: [
		resolve(resolveOptions),
		alias({
			entries: {
				url: 'native-url'
			}
		}),
		...config.plugins
	]
}, {
	...config,
	output: {
		file: pkg.main,
		format: 'cjs',
		sourcemap: true
	},
	external: [...config.external, 'url'],
	plugins: [
		resolve({ ...resolveOptions, preferBuiltins: true }),
		...config.plugins
	]
}];
