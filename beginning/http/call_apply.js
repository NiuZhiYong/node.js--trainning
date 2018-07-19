var home = {
    liked:'dota2',
    say:function(member){
        console.log(member + 'likes' + this.liked)
    }
}

var ydp = {
    liked:'pubg'
}

home.say.call(ydp,'ydp');
console.log(home)
console.log(ydp)