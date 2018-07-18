var global = 'this is global'

function globalFunction(){
    var local = 'this is local';

    console.log('visit global/local va')
    console.log(global);
    console.log(local);

    global = 'this is changed global'

    console.log(global)
}