// Nathan Altice
// Created: 5/13/18
// Ported to Phaser 3: 5/9/20
// Updated: 5/9/20
// Dialogging
// Simple "teletext-style" dialog system that reads from a JSON file

// BE STRIK
"use strict";

// game config
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Title, Talking ]
};

const game = new Phaser.Game(config);

// globals
const centerX = game.config.width / 2;
const centerY = game.config.height / 2;
let cursors = null;