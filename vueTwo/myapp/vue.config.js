
module.exports={
	css: {
		modules: true,
		loaderOptions: {
			    css: {
			        localIdentName: '[name]-[hash]',
			        camelCase: 'only'
			      },
		    	sass: {
			        data: `@import "./variables.scss";`
			    }

		}
	}
}