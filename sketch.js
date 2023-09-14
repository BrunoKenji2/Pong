let pos_x_bol = 300;
let pos_y_bol = 200;
let diametro = 15;

let velocidadex = 6;
let velocidadey = 6;

let raquete1_x = 10;
let raquete1_y = 150;
let altura1 = 90;
let largura1 = 10;


function setup() {
  createCanvas(600, 400); //tamanho da tela
}

function draw() {
  background(0);    // cor da tela
  circle(pos_x_bol,pos_y_bol,15); // cordenadas, e diametro da bola
  movBol();
  borda();
  movRaq1();
  rebate();

  rect(raquete1_x, raquete1_y, largura1, altura1);
  
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
}

function rebate(){
  if(pos_x_bol - 7.5 < raquete1_x + largura1){  //toca no raquete em x
    if(pos_y_bol - 7.5 < raquete1_y + altura1 && pos_y_bol + 7.5 > raquete1_y){
        velocidadex *= -1;
    }
  }
}