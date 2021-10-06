let fondouno;
let fondo;
let pop;

var videos = [];
var currentVideoIndex;

var pantalla1; 
var pantalla2; 


function preload(){

    
    fondo=loadImage("data/fondo.jpg");
    fondouno=loadImage("data/fondo1.jpg");
    pop=loadImage("data/pop.jpg");
    
    
    pantalla1= true;
    pantalla2= false;
 
}

function setup() {
  //aca cargue los videos
   videos = [createVideo('data/video1.mov'), createVideo('data/video2.mov'), createVideo('data/video3.mov')];
    
    createCanvas(displayWidth , displayHeight);
   
    currentVideoIndex = Math.floor(Math.random() * videos.length);
    currentVideoIndex = floor(random(videos.length));
    
    //para que no se repitan los videos
      videos[0].hide();
      videos[1].hide();
      videos[2].hide();
      
       
}

function playNextVideo() {
    
videos = [videos[0], videos[1], videos[2]];   
  
videos[currentVideoIndex].loop();
  
  currentVideoIndex.onended(function() {
      playNextVideo();
             });  
 
}

function draw() {
 
  
  if(pantalla1){
    background(fondouno);
    
    
  }
  
  if(pantalla2 ==true  ){
  background(fondo);
  
image(videos[currentVideoIndex],234, 150,943,430);

  }
}


function mousePressed() {
  
  if(pantalla1 && mouseX < 1080 && mouseX> 380 && mouseY<660 && mouseY>570){
    pantalla2 = true;
    }
    
   playNextVideo();
}
