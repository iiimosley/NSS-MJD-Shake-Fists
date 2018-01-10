'use strict';

const $ = require('jquery');
const _ = require('lodash');
const foaas = require('./foaas');
const printDom = require('./printDom');

module.exports.logAstros = (astros) => {
    let deadlyAstros = [];
    let astroPromise = [];
    let nearDates = _.keys(astros);
    nearDates.forEach(i => {
        astros[i].forEach(specAstro => {
            if (specAstro.is_potentially_hazardous_asteroid === true) {
                deadlyAstros.push(specAstro);
            }
        });
    });
    for (let i = 0; i < 3; i++) {
    astroPromise.push(foaas.getFOAAS(deadlyAstros[i]));
    }
    Promise.all(astroPromise)
    .then((astroPromData) => {
        printDom.printAstros(astroPromData);
    });
};