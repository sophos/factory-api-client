import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const extensions = ['.js', '.ts'];
const external = Object.keys(pkg.dependencies);

const config = {
	input: 'src/index.ts',
	external,

	plugins: [
		resolve({ extensions }),
		babel({
			extensions,
			exclude: 'node_modules/**',
			babelHelpers: 'bundled'
		}),
		commonjs()
	]
};

export default {
	...config,
	output: [{
		file: pkg.module,
		format: 'esm',
		sourcemap: true
	}, {
		file: pkg.main,
		format: 'cjs',
		sourcemap: true
	}]
};
