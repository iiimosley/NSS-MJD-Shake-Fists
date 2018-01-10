'use strict';

const $ = require('jquery');
const _ = require('lodash');
const foTemp = require('../templates/foAstro.hbs');

module.exports.printAstros = (foMSG) => {
    let foAstros = {};
    foAstros = {object: foMSG};
    $("#fuckOff").append(foTemp(foAstros));
    $("li.foAstro").each(function () {
        let sentBrk = $(this).text().split(",");
        $(this).html(`<span class='fu'>${sentBrk[0]}</span>... ${sentBrk[1]}`);
    });
};
