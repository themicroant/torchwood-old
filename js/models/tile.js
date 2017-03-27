'use strict';
function Tile(x,y,type,unit){
    this.x = x;
    this.y = y;
    this.type = type;
    this.unit = unit;
}

/*
Tile.prototype.type = function() {
    return type;
}

function Grass(x, y) {
    Tile.call(this, x, y);
}
Grass.prototype = Object.create(Tile.prototype);
Grass.prototype.constructor = Tile;
Grass.prototype.type = function(){
    return 'grass';
};
*/
