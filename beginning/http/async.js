var c = 0;
function print(){
    console.log(c)
}

function plus(callback){
    setTimeout(function(){
        c += 1;
        callback()
    },3000)
}

plus(print);