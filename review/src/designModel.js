// 设计模式
/****
 *
 * 发布订阅 -- 完全解藕
 *
 *  **/
// 先订阅后发布
// 在订阅的过程中需要将回调装到函数列表中；
// 发布时，只需要执行回调并传入回调的参数；
class Event {
    static table = [];
    static publish=(...args)=>{ // 发布
        const [key, params] = args
        const table = this.table[key]
        if(!table || (table && table.length<=0)){
            return false
        }
        for (let index = 0; index < table.length; index++) {
            table[index](params)
        }
    }
    static subscribe=(...args)=>{ // 订阅
        const [key, cb] = args
        const table = this.table[key]
        if(!table){
            this.table[key] = [];
        }
        this.table[key].push(cb)
    }
    static cancel=()=>{}
}

Event.subscribe('1iuyiet', (data)=>{
    console.log(data, 99766)
})
Event.publish('1iuyiet', {a:12313})

/**
 *
 * 观察者 -- 松耦合
 *
 * **/
