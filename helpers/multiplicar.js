// 5x1 =5 
// 5x2 =10

//documentacion https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
//tabla de multiplicar
const fileSystem= require('fs');
require('colors');


    const getTabladeMultiplicar  = async(multiplicando, listar , hasta ) => {
    try{
        console.log(hasta);
        let resultados,
            resultadoExport='';

            for(let multiplicador=0; multiplicador<=hasta; multiplicador++){
                resultados+=`${multiplicando}`.cyan + ` x `.red + ` ${multiplicador} `.yellow + `= ${multiplicando * multiplicador}\n`.brightBlue
                resultadoExport+=`${multiplicando} x  ${multiplicador} = ${multiplicando * multiplicador}\n`
            }
        
        fileSystem.writeFileSync(`./salida/table-${multiplicando}.txt`,resultadoExport);

        if(listar){
            console.log("=======================".green)
            console.log(`    Tabla del: ${multiplicando}  `.rainbow)
            console.log("=======================".green)
            console.log(resultados);
        }

        return(`table-${multiplicando}.txt`.rainbow);
    }catch(err){
    throw err
    }


}

module.exports ={
    getTabladeMultiplicar
}

// graba el archivo
// fileSystem.writeFile( `table-${numero}.txt`,getTabladeMultiplicar(numero), (err)=> {
//     if(err) throw err;
//     console.log(`table-${numero}.txt`);
// })


