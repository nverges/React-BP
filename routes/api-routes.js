const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

module.exports = function(router) {
    
    router.get('*', function(req,res) {
        res.sendFile(path.resolve(__dirname + '/../public/index.html'));
    });

};