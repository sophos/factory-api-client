import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import pkg from './package.json';

const extensions = ['.js', '.ts'];

export default {
	input: 'src/index.ts',
	external: [...Object.keys(pkg.dependencies), '@babel/runtime'],
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true
		},
		{
			file: pkg.module,
			format: 'esm',
			sourcemap: true
		}
	],

	plugins: [
		resolve({ extensions }),
		alias({
			entries: {
				url: 'native-url'
			}
		}),
		babel({
			extensions,
			exclude: 'node_modules/**',
			babelHelpers: 'runtime'
		}),
		commonjs()
	]
};
