const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball, engine, world, cube1, cube2, cube3, cube4;
colisoes = 0
function preload(){


}

function setup() {
  createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
ball = new Ball(600, 250, 30);
cube1 = new Cube(450,280,7, 300);
cube2 = new Cube(800,280,7, 300);
cube3 = new Cube(630,130,350, 7);
cube4 = new Cube(630,430,350, 7);

  //adicionando a imagem de fundo

//criando o sprite do jogador

}

function draw() {
  background("black"); 
  Engine.update(engine);
 ball.display();
 cube1.display();
 cube2.display();
 cube3.display();
 cube4.display();

 var collision = Matter.SAT.collides(ball.body, cube1.body);
      if (collision.collided){
        
        colisoes += 1;
      }

      var collision = Matter.SAT.collides(ball.body, cube2.body);
      if (collision.collided){
       
        colisoes += 1;
      }

      var collision = Matter.SAT.collides(ball.body, cube3.body);
      if (collision.collided){
       
        colisoes += 1;
      }

      var collision = Matter.SAT.collides(ball.body, cube4.body);
      if (collision.collided){
       
        colisoes += 1;
      }

  fill("white");
  textSize(25);
  text("Número de colisões: " + colisoes, 500, 50);
  
  
  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques

//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada


//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço

}