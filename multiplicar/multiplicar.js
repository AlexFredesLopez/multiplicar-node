/**
 * REQUIREDS
 */
const fs = require('fs');
// HAY 3 TIPO DE REQUIRE 
// const fs = require('express');
// const fs = require('../nombrearchivo');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introductido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introductido ${limite} no es un numero`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${i*base}`);
            data += `${base} * ${i} = ${i*base} \n`;
        }

        resolve(data);

    });

}


crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introductido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite introductido ${limite} no es un numero`);
            return;
        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${i*base}`);
            data += `${base} * ${i} = ${i*base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
            // console.log(`tabla-${base}.txt ha sido creada`);
        });
    })
}

//EXPORTAR LAS FUNCIONES QUE SE ENCUENTRAS DENTRO DE ESTE ARCHIVO
module.exports = {
    crearArchivo,
    listarTabla
}