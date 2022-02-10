const { describe } = require('yargs');

const argv = require('yargs')
        .options('b',{
            alias : 'base',
            type : 'number',
            demandOption : true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias : 'listar',
            type : 'boolean',
            default : false,
            describe: 'muestra la tabla en consola'  

        })
        .options('h',{
            alias : 'hasta',
            type : 'number',
            demandOption : true,
            describe: 'Indica hasta que numero multiplicar'
        })
        .check((argv,options) =>{
            console.log('yargs', argv)
            if(isNaN(argv.b)){
                throw 'la base tiene que ser un numero'
            }
            return true;

        })
        .argv;
        console.log( process.argv );
        console.log( argv );
        console.log( 'base: yars', argv.base );

module.exports = argv;