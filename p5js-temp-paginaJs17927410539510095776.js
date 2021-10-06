let fondouno;
let fondo;
let pop;

var videos = [];
var currentVideoIndex;

var pantalla1; 
var pantalla2; 


let glitch, vid, rPosition = 1000;
p5.disableFriendlyErrors = true;

function preload(){
    
    fondo=loadImage("data/fondo.jpg");
    fondouno=loadImage("data/fondo1.jpg");
    pop=loadImage("data/pop.jpg");
    
    
    pantalla1= true;
    pantalla2= false;
    
    
    vid = createVideo('big_buck_bunny.mp4', function() {
    vid.hide();
    vid.volume(0);
    vid.loop();
  });
 
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
     
      
      glitch = new Glitch();
    glitch.loadType('jpg');
  glitch.pixelate(1);
    glitch.errors(false);
       
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
  
  
  if(frameCount % 60 === 0) {
    rPosition = random(glitch.bytes.length);
  }

  if(frameCount % 3 === 0) {

    if(!mouseIsPressed) {
      glitch.loadImage(vid);
    }

    glitch.randomByte(rPosition); // single randome byte
    glitch.limitBytes(.78); // limit bytes to branch
    glitch.randomBytes(10, 2); // set 10 random bytes
    glitch.buildImage();
  }

  image(glitch.image, 234, 150);
  
  
  
}


function mousePressed() {
  
  if(pantalla1 && mouseX < 1080 && mouseX> 380 && mouseY<660 && mouseY>570){
    pantalla2 = true;
    }
    
   playNextVideo();
}
