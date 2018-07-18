var global = 'this is global'

function globalFunction(){
    var local = 'this is local';

    console.log('visit global/local va')
    console.log(global);
    console.log(local);

    global = 'this is changed global'

    console.log(global);

    function localFunction(){
        var inner = 'this is inner';

        console.log('visit global/local/inner va')
        console.log(global)
        console.log(local)
        console.log(inner)
    }
    localFunction()
}

globalFunction();