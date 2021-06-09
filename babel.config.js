module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: 'last 2 versions, not ie >=0, not dead, node >=12'
			}
		],
		'@babel/preset-typescript'
	],
	plugins: [
		'@babel/proposal-class-properties',
		'@babel/proposal-object-rest-spread'
	]
};
