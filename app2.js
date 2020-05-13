//requires

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

console.log(argv);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(base, limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado : `, colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}