//事件发射和监听 
var EventEmitter = require('events').EventEmitter
var life = new EventEmitter()
//设定事件监听上限
life.setMaxListeners(11)

var some = function(something){
    console.log(`gei${something}say1`)
}
//添加事件监听
life.on('read',some)
life.on('read',function(something){
    console.log(`gei${something}say2`)
})
life.on('read',function(something){
    console.log(`gei${something}say3`)
})
life.on('read',function(something){
    console.log(`gei${something}say4`)
})
life.on('read',function(something){
    console.log(`gei${something}say5`)
})
life.on('read',function(something){
    console.log(`gei${something}say6`)
})
life.on('read',function(something){
    console.log(`gei${something}say7`)
})
life.on('read',function(something){
    console.log(`gei${something}say8`)
})
life.on('read',function(something){
    console.log(`gei${something}say9`)
})
life.on('read',function(something){
    console.log(`gei${something}say10`)
})
life.on('look',function(sss){
    console.log(`bushuo${sss}haha1`)
})
life.on('look',function(sss){
    console.log(`bushuo${sss}haha2`)
})
life.on('look',function(sss){
    console.log(`bushuo${sss}haha3`)
})
life.on('look',function(sss){
    console.log(`bushuo${sss}haha4`)
})
life.on('look',function(sss){
    console.log(`bushuo${sss}haha5`)
})
//删除事件监听，
life.removeListener('read',some)
//批量移除事件监听
life.removeAllListeners('read')

//life.emit会return是否监听到某个事件
var hasLookedListener = life.emit('look','male');
var hasReadedListener = life.emit('read','female');
var hasChangedListener = life.emit('change','malesss')

console.log(hasLookedListener);//true
console.log(hasReadedListener);//true
console.log(hasChangedListener);//false

//相关事件监听数
console.log(life.listeners('read').length)
console.log(EventEmitter.listenerCount(life,'look')) //10-1=9