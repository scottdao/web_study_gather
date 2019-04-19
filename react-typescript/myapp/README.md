# ts 开发

###  [typescript](https://www.tslang.cn/)
###  [react-ts](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
###  [tsconfig.json](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
###  [tsconfig.json模版文件](http://json.schemastore.org/tsconfig)
###  [mobx状态管理库](https://github.com/mobxjs/mobx)
###  [ts-mobx状态管理](https://github.com/mobxjs/mobx-state-tree)
###  [js-mobx中文文档](https://github.com/SangKa/MobX-Docs-CN)
###  [在线编写html](https://jsbin.com/hamiha/edit?js,console,output)
###  
###  [mobx文档](https://cn.mobx.js.org/refguide/observable-decorator.html)
###  
###  [react-mobx案例](https://github.com/dimafeng/typescript-react-mobx-template)
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