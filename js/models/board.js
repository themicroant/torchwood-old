'use strict';

function Board() {
    var terrain = [
        'H00000MM',
        '0000000M',
        '0000000M',
        '00000000',
        '00000000',
        '00000000',
        'M000000E',
        'MM000E00'
    ];

    this.units = {};

    this.tiles = [];
    for (var row = 0; row < terrain.length; row++) {
        var current_row = [];
        for (var col = 0; col < terrain[row].length; col++) {
            var code =  terrain[row][col];
            switch (code) {
                case 'H':
                    var hero = new Unit('hero', 5, 5, false);
                    this.units[hero.id] = hero;
                    current_row.push(new Tile([col], [row], 'grass', hero));
                    break;
                case 'E':
                    var enemy = new Unit('enemy', 4, 4, true);
                    this.units[enemy.id] = enemy;
                    current_row.push(new Tile([col], [row], 'grass', enemy));
                    break;
                case 'M':
                    current_row.push(new Tile([col], [row], 'mountain'));
                    break;
                default:
                    current_row.push(new Tile([col], [row], 'grass'));
            }
        }
        this.tiles.push(current_row);
    }
    console.log(this.units);






}
