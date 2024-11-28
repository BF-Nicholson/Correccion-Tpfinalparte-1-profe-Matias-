function pantallas(estadopantallas, cantidadimagenes, imgs, x, y, dw, dh){
 if (estadopantallas >= 1 && estadopantallas <= cantidadimagenes) {
  image(imgs[estadopantallas-1], x, y, dw, dh); 
 }
}

function pantalladeinicio(estadopantallas, R, G, B, x, y, tS){
  textSize(tS);
  if (estadopantallas ===1){
    rectMode(CORNERS);
    fill(R, G, B);
    rect(x, y, width, height);   
  }
}
