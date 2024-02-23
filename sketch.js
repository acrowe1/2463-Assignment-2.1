let sounds = new Tone.Players ({
  'dog' : 'assets/dogBark.mp3', 
  'drum' : 'assets/drumRoll.mp3', 
  'fnaf' : 'assets/fnaf.mp3', 
  'printer' : 'assets/printer.mp3'
}); 

let button1, button2, button3, button4, buttonStop; 
let distSlider; 
let distAmt = new Tone.Distortion(0.5);   

sounds.connect(distAmt); 
distAmt.toDestination(); 

function setup() {
  createCanvas(400, 400);

  button1 = createButton('Dog Barking'); 
  button1.position(150, 50); 
  button1.mousePressed(() => sounds.player('dog').start()); 

  button2 = createButton('Drum Roll'); 
  button2.position(150, 100); 
  button2.mousePressed(() => sounds.player('drum').start()); 

  button3 = createButton('FNAF Jumpscare'); 
  button3.position(150, 150); 
  button3.mousePressed(() => sounds.player('fnaf').start()); 

  button4 = createButton('Printer Printing'); 
  button4.position(150, 200); 
  button4.mousePressed(() => sounds.player('printer').start()); 

  buttonStop = createButton('Stop Sounds'); 
  buttonStop.position(0,5);
  buttonStop.mousePressed(() => sounds.stopAll());

  distSlider = createSlider(0, 1, 0, 0.5); 
  distSlider.position(150,275);
  distSlider.mouseMoved(() => distAmt.distortion = distSlider.value()); 
}

function draw() {
  background(220);
  text('Distort the audio!', 150, 260); 
}
