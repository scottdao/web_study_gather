webapck4.0+react16.0起步先：
--------------------------------------------------

		"private": true,防止意外发布；
		 babel更新的关键：'babel-preset-es2015' ------->'babel-preset-es2017'
		.babelrc文件变为：es2017
		
				安装scss:   node-sass和sass-loader依赖
		
				{
					test: /\.(css|scss)$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				},
				
		
		extract-text-webpack-plugin:css分离插件，只需要将版本定位到^4.0.0-beta.0，就可以
		
		安装方式：cnpm install --save-dev extract-text-webpack-plugin@next
		webpack.ProvidePlugin插件:提供全局变量和方法。