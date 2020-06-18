var a = 1
var obj = {
    valueOf:function () {
        a = 2;
        return {};
    },
    toString: function(){ return {}}
}
console.log(obj == 0, a) //  Cannot convert object to primitive value