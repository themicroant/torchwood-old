'use strict';
function Unit(name, player) {
    this.id = generateUniqueId();
    this.name = name;
    this.player = player;

    this.health = 10;
    this.damage = 4;
    this.listeners = [];
}

Unit.prototype.fullName = function() {
    return this.player.name + '\'s ' + this.name;
}

Unit.prototype.attack = function (targetUnit) {
    console.log( this.fullName() + ' does ' + this.damage + ' damage to ' + targetUnit.fullName() + '.');
    targetUnit.takeDamage( this.damage );
}

Unit.prototype.takeDamage = function (damage) {
    this.health -= damage;
    if( this.health <= 0 ) {
        console.log(this.fullName() + ' has died.');
        this.notify();
    }
}

Unit.prototype.notify = function () {
    console.log('Notify');
}





function generateUniqueId() {
    return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}


