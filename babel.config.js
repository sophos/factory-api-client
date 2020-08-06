module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: 'defaults'
			}
		],
		'@babel/preset-typescript'
	],
	plugins: [
		'@babel/plugin-transform-runtime',
		'@babel/proposal-class-properties',
		'@babel/proposal-object-rest-spread'
	]
};
