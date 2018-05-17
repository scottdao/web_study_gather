#webpack4.x(https://webpack.docschina.org/guides/getting-started)
------------------------------------------------------------------

		起步：npm init
			安装webpack和webpack-cli
		
			 npm install --save-dev webpack
			 npm install --save-dev webpack-cli(本地安装--save-dev 生产环境--save)
			 
		构建一个bundle文件；
				
			安装lodash: npm install --save lodash 在./src/index加载该模块；
			 
			 
			 在webpack.config.js配置文件：
			 
			 入口文件：entry: './src/index.js',//入口文件；
			 
			 出口文件：output: {//出口文件
					    filename: 'bundle.js',
					    path: path.resolve(__dirname, 'dist')
					}
			安装css:
				npm install --save-dev style-loader css-loader
			加载图片：
				npm install --save-dev file-loader
			加载数据：（json内置，不需要配置，直接引入。）
				
	   	
