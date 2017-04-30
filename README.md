# torchwood

Psudo code:

clickOnPiece(){
  selectNewPiece();
  showValidMoves( $(this) );
}

showValidMoves( $piece ) {
  $cell = $piece.getParent()
  x = $cell.data(x);
  y = $cell.data(y);
  
  //load movement type
  checkDiagonallyRight( x,y)
  checkDiagonallyLeft( x,y );
  for each valid
    addClass();
    add(clickListener){
      move();
    }
}

