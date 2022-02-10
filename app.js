const { getTabladeMultiplicar } = require ('./helpers/multiplicar');
const  argv  = require ('./config/yargs');

console.clear();

getTabladeMultiplicar(argv.b , argv.l , argv.h)
            .then(msg => console.log(msg + ' Creado '))
            .catch( err => console.log(err)); 


 //console.log(process.argv)
// const [,, arg3='base=5']=process.argv
// const [,base]= arg3.split('=')
// console.log(arg3, base)

// const numero=3;           