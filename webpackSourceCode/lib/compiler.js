module.exports = class Complier{
    constructor(options){
        const { entry, output } = options
        this.entry = entry
        this.output = output
    }
    run(){
        const entryModule = this.buildModule(this.entry, true)
    }
    buildModule(filename, isEntry){

    }
    emitFiles(){}
}