// variaveis do ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0

// funções do ator
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()) 
    
    yAtor += 3;
  }
}

// verifica colisão, caso ocorra o ator volta para a posição inicial, é verificado e o jogador tem mais do que 0 pontos, e caso tenha um ponto é deduzido do placar

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15 )
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial (){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,192,27))
  text(meusPontos, width / 5, 28);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}
