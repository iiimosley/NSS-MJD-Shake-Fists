'use strict';

const $ = require('jquery');
const _ = require('lodash');

module.exports.getFOAAS = (badAstro) => {
        return new Promise((resolve, reject) => {
        $.getJSON({
            url: `http://www.foaas.com/donut/${badAstro.name}/world`
        })
        .done((newData) => {
            resolve(newData);
        })
        .fail((error) => {
            console.log("shit didnt work", error);
            reject(error);
        });
    });
};
