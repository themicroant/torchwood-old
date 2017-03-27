'use strict';

function BoardView(board) {
    this.board = board;
    this.cellSize = 32;
}

BoardView.prototype.draw = function () {
    var tiles = this.board.tiles;
    for (var col = 0; col < tiles.length; col++) {
        for (var row = 0; row < tiles[col].length; row++) {
            this.drawTile(tiles[col][row]);
        }
    }

    //draw stats
    var $div = $('<div/>');
    $div.attr('id', 'info');
    $div.addClass('info');
    $(document.body).append($div);
};

BoardView.prototype.drawTile = function (tile) {
    var $div = $('<div/>');
    //$div.html(tile.x + 'h');
    $div.addClass('tile');
    $div.addClass(tile.type);

    $div.css('width', this.cellSize);
    $div.css('height', this.cellSize);
    $div.css('left', tile.x * this.cellSize)
    $div.css('top', tile.y * this.cellSize);
    $div.data('x', tile.x);
    $div.data('y', tile.y);

    if (tile.unit) {
        $div.addClass('hero');
        $div.mousedown(function () {
            select($(this))
        });
    }

    $(document.body).append($div);
}

var $selected = null;

function select($tile) {
    if ($selected != null) {
        $selected.removeClass('selected')
    }
    $selected = $tile
    $selected.addClass('selected')
    var $info = $('#info');
    $info.html('X:' + $tile.data('x') + ' Y:' + $tile.data('y'));
}

