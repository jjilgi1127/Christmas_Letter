var mySound;
function setup() {
  createCanvas(2040,1000);
    mySound.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySound);
  background(0);
  textAlign(CENTER);
    textSize(130);
     fill(255);
     text('To.지은', 1020,500);

}
function preload() {
  mySound = loadSound('HollyJolly.mp3');
}


function draw() {
  fill(random(255),190,random(200,255));
  textSize(20);
  text('지은을 천천히 입력하세요.(컴퓨터 키보드)', 1020,570);
}

function keyPressed(){
   if (keyCode === 87) {
     textSize(80);
      fill(160,161,157);
      text('선배 안녕하세여~ 삼척은 잘 도착하셨나영?!',900,150);
      textSize(50);
      fill(232,236,229);
      text('호로록 하고 가버리셔서 메리쿠리스마스 편지를 못 드려서 직접 만들어 보았숩니당',1000,850);
      textSize(30);
      fill(79,84,88);
      text('헝.. 너무 허접하지만 그래두 보내여 ㅎ',1600,900);
      } else if (keyCode === 76) {
    textSize(50);
     fill(179,157,207);
     text('흡흑 이렇게 갑자기 떠날 줄 몰랐던.. 흐그흑ㅎ.ㄱ.. 그래두 얼른 보자구욧!!',1100,700);

  }else if (keyCode === 68) {
    textSize(30);
     fill(100,161,157);
     text('아, 그리고 정동극장 인턴 너무너무 축하드려요!!♡ 뼈를 묻고 오세영!!!! 아니 오지마세여 제가 근처로 갈게여 ㅎ ',1000,250);

  }else if (keyCode === 77) {
    textSize(60);
     fill(106,123,139);
     text('항상 고마운 거 알져? ㅎ0ㅎ',400,400);
     fill(179,197,207);
     textSize(40);
     text('지은선배 채거채거!!',500,500);
  }else if (keyCode === 83) {
    textSize(60);
     fill(229,44,35);
     text('♥Merry Christmas♥',1660,460);
     textSize(40);
      fill(34,82,27);
      text('From.가영',1860,530);


}
}
