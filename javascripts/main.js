'use strict';
 
const $ = require('jquery');
const _ = require('lodash');
const astroData = require('./astroData');
const astroFactory = require('./astroFactory');

$("#getData").click( () => {
    $("#fuckOff").html("");
    astroData.getAstros($("#start").val(), $("#end").val())
    .then(astros => {
        astroFactory.logAstros(astros);
    });
});
