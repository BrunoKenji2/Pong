//bolinha
let pos_x_bol = 300;
let pos_y_bol = 200;
let diametro = 15;

let velocidadex = 6;
let velocidadey = 6;

// raquete player1
let raquete1_x = 10;
let raquete1_y = 150;
let altura1 = 90;
let largura1 = 10;

//raquete player 2
let raquete2_x = 585;
let raquete2_y = 150;
let velocidade_raquete;

// colisao
let colidiu = false;

//pontuação
let ponto_meus = 0;
let pontos_inimigo = 0;

let quadrado_ponto1x = 130;
let quadrado_ponto1y = 10;

let quadrado_ponto2x = 430;
let quadrado_ponto2y = 10;

//sons
let som_rebatida;
let trilha;
let som_ponto;

function preLoad(){
  som_ponto = loadSound("ponto.mp3");
  trilha = loadSound("trilha.mp3");
  som_rebatida = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400); //tamanho da tela
  trilha.loop();
}

function draw() {
  background(0);    // cor da tela
  fill(255);
  circle(pos_x_bol,pos_y_bol,15); // cordenadas, e diametro da bola
  movBol();
  borda();
  movRaq1();
  rebate(); // rebate a bolinha com a raquete do jogador
  rebate2();  // adversario, usa de biblioteca
  fill(255);
  rect(raquete1_x, raquete1_y, largura1, altura1);  //raquete 1
  rect(raquete2_x,raquete2_y,largura1,altura1); //raquete 2
  segue_bola(); // raquete 2 segue a bolinha

  pontos();
}

function movBol(){
  pos_x_bol = velocidadex + pos_x_bol;
  pos_y_bol = velocidadey + pos_y_bol;
}

function borda(){
  if(pos_x_bol > width -7.5 || pos_x_bol < 7.5){ //width pega a largura maxima
    velocidadex = -1*velocidadex;
  }

  if(pos_y_bol > height - 7.5 || pos_y_bol < 7.5){  //height pega a altura maxima
    velocidadey = velocidadey * -1;
  }
}

function movRaq1(){
    if(keyIsDown(DOWN_ARROW)){
      raquete1_y += 5;
    }

    if(keyIsDown(UP_ARROW)){
      raquete1_y -= 5;
    }
    raquete1_y = constrain(raquete1_y,0,310);
}

function rebate(){
  if(pos_x_bol - 7.5 < raquete1_x + largura1){  //toca no raquete em x
    if(pos_y_bol - 7.5 < raquete1_y + altura1 && pos_y_bol + 7.5 > raquete1_y){
        velocidadex *= -1;
        som_rebatida.play();
    }
  }
}

function rebate2(){
  colidiu  = collideRectCircle(raquete2_x,raquete2_y,largura1,altura1,pos_x_bol,pos_y_bol,7.5);
  if(colidiu){
    velocidadex *= -1;
    som_rebatida.play();
  }
}

function segue_bola(){

    raquete2_y = pos_y_bol - 100;  // 1 OPÇÃO
    raquete2_y = constrain(raquete2_y,0,310);
  
    /*velocidade_raquete = pos_x_bol - raquete2_y - altura1/2 - 30 ;  // 2 OPÇÃO
    raquete2_y += velocidade_raquete;
    // calculo do deslocamento que a raquete precisa fazer em relação a bola, junto de um erro pra não acertar sempre
    */
    

}

function pontos(){

  if(pos_x_bol < 10){
      pontos_inimigo++;
      som_ponto.play();
  }

  if(pos_x_bol > 590){
    ponto_meus++;
    som_ponto.play();
  }
  stroke(255)
  textSize(16);
  textAlign(CENTER);
  fill(color(255,140,0));
  rect(quadrado_ponto1x,quadrado_ponto1y,40,30);
  fill(255)  // branco
  text(ponto_meus,150,26);
  fill(color(255,140,0));
  rect(quadrado_ponto2x,quadrado_ponto2y,40,30);
  fill(255);
  text(pontos_inimigo,450,26);

}