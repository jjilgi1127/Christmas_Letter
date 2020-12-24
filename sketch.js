var mySound;
function setup() {
  createCanvas(600, 400);
    mySound.loop();
    // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mySound);
}
function preload() {
  mySound = loadSound('HollyJolly.mp3');
}


function draw() {
  background();
}
