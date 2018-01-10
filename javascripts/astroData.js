'use strict';

const $ = require('jquery');
const _ = require('lodash');


module.exports.getAstros = (start, end) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=5LS5l2xFm3dNvCalBrJ6YFDB2X0zoSXB3M5p2OG4`
            // firebase json copy of nasa api
            // url: 'https://tm-nss-jan8.firebaseio.com/nasa/-L2Mm4Vn7dAUl_KKXbEa.json'
        })
        .done((astros) => {
            resolve(astros.near_earth_objects);
        })
        .fail((error) => {
            reject(error);
        });
    });
};