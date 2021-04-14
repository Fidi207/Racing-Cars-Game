canvas = document.getElementById("cnvs");
ctx = canvas.getContext("2d");

background_img="racingTrack.png"

car1_height=70;
car1_width=120;
car1_x=10;
car1_y=10;
car1_image="car1.png"

car2_height=70;
car2_width=120;
car2_x=10;
car2_y=100;
car2_image="car2.png"

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
    
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1.imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2.imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    KeyPressed=e.keyCode;
    console.log(KeyPressed);

    if (KeyPressed =="38"){
        car1_up();
        console.log("Up");
    }
    
    if (KeyPressed =="40"){
        car1_down();
        console.log("Down");
    }
    
    if (KeyPressed =="37"){
        car1_left();
        console.log("Left");
    }
    
    if (KeyPressed =="39"){
        car1_right();
        console.log("Right");
    }
    
    if (KeyPressed =="87"){
        car2_up();
        console.log("Up");
    }
    
    if (KeyPressed =="65"){
        car2_down();
        console.log("Down");
    }
    
    if (KeyPressed =="83"){
        car2_left();
        console.log("Left");
    }
    
    if (KeyPressed =="68"){
        car2_right();
        console.log("Right");
    }
}


function car1_up(){
    if (car1_y>=0){
      car1_y = car1_y - 10;
      console.log("Current Position - x=" + car1_x);
      console.log("                   y=" + car1_y);
      uploadBackground();
      uploadcar1()
      uploadcar2();
    }
}

function car1_down(){
    if (car1_y<=500){
      car1_y = car1_y + 10;
      console.log("Current Position - x=" + car1_x);
      console.log("                   y=" + car1_y);
      uploadBackground();
      uploadcar1()
      uploadcar2();
    }
}

function car1_left(){
    if (car1_x>=0){
      car1_x = car1_x - 10;
      console.log("Current Position - x=" + car1_x);
      console.log("                   y=" + car1_y);
      uploadBackground();
      uploadcar1()
      uploadcar2();
    }
}

function car1_right(){
    if (car1_x<=500){
      car1_x = car1_x + 10;
      console.log("Current Position - x=" + car1_x);
      console.log("                   y=" + car1_y);
      uploadBackground();
      uploadcar1()
      uploadcar2();
    }
}

function car2_up(){
    if (car1_y<=0){
      car1_y = car1_y + 10;
      console.log("Current Position - x=" + car1_x);
      console.log("                   y=" + car1_y);
      uploadBackground();
      uploadcar1()
      uploadcar2();
    }
}

function car2_down(){
    if (car1_y<=0){
      car1_y = car1_y + 10;
      console.log("Current Position - x=" + car1_x);
      console.log("                   y=" + car1_y);
      uploadBackground();
      uploadcar1()
      uploadcar2();
    }
}

function car2_left(){
    if (car1_x>=0){
      car1_x = car1_x - 10;
      console.log("Current Position - x=" + car1_x);
      console.log("                   y=" + car1_y);
      uploadBackground();
      uploadcar1()
      uploadcar2();
    }
}

function car2_right(){
    if (car2_x<=0){
      car1_x = car1_x + 10;
      console.log("Current Position - x=" + car1_x);
      console.log("                   y=" + car1_y);
      uploadBackground();
      uploadcar1()
      uploadcar2();
    }
}