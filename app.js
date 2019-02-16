// /**
//  * REQUIREDS
//  */
// ESTE CÓDIGO LEE EL CODIGO QUE HICIMOS EN EL MULTIPLICAD.JS
const { argv } = require('./config/yargs');
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.b, argv.l)
            .then(lista => console.log(lista.green))
            .catch(err => console.log(err.red));
        break;
    case 'crear':
        console.log(argv.b);
        crearArchivo(argv.b, argv.l)
            .then(archivo => console.log(`Archivo creado ${archivo}`.green))
            .catch(err => console.log(err.red));
        break;

    default:
        console.log("Comando no reconocido");
}

// let base = "898521";

// process.argv -> Cadenas para recibir los argumentos
// let parametro = argv[2];
// let base = parametro.split("=")[1];