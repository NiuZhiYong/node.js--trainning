var pet = {
    words:'...',
    speak:function(say){
        console.log(say+' '+this.words)
    }
}
//pet.speak('speak')

var dog = {
    words:'wangwangwang'
}

pet.speak.call(dog,'jiao')