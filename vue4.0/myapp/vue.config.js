
module.exports={
	css: {
		 modules: true,
    loaderOptions: {
	    css: {
	        localIdentName: '[name]-[hash]',
	        camelCase: 'only'
	      },
    	sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "./variables.scss";`
      }

    }
	}
}