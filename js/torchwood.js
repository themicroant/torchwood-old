'use strict';

$(function () {
    var board = new Board();
    var boardView = new BoardView(board);
    boardView.draw();

    var human = new Player('Jason', true);
    var comp = new Player('Comp', false);

    var units = [];
    units = units.concat(createUnitsForPlayer(human));
    units = units.concat(createUnitsForPlayer(comp));



    var stopper = 30;
    while(unitsFromMultiplePlayersExist(units) && stopper > 0){
        //units[0].attack(units[2]);

        console.log(units.length);
        stopper -= 1;
    }
});

function unitsFromMultiplePlayersExist(units) {
    var firstPlayer = units[0].player;
    for (var i = 1, len = units.length; i < len; i++) {
        if( units[i].player != firstPlayer ){
            return true;
        }
    }
    return false;
}


function createUnitsForPlayer(player) {
    var archer = new Unit('Archer', player);
    archer.health = 4;
    archer.damage = 4;
    var tank = new Unit('Tank', player);
    tank.health = 10;
    tank.damage = 3;
    return [archer, tank];
}







