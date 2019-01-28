# ts 开发

###  [typescript](https://www.tslang.cn/)
###  [react-ts](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
###  [tsconfig.json](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
###  [tsconfig.json模版文件](http://json.schemastore.org/tsconfig)
- 环境配置
- tsconfig.json配置说明

	- files属性：
	```
		 "files": [
			"core.ts",
			"sys.ts",
			"types.ts",
			"scanner.ts",
			"parser.ts",
			"utilities.ts",
			"binder.ts",
			"checker.ts",
			"emitter.ts",
			"program.ts",
			"commandLineParser.ts",
			"tsc.ts",
			"diagnosticInformationMap.generated.ts"
		]
	```
	- include和exclude属性
	
	```
	 "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
	```