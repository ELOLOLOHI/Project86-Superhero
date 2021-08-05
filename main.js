canvas= new fabric.Canvas("mycanvas")

blockw=30;
blockh=30;

playerx=10;
playery=10;

playerw=150;
playerh=140;

playerimg="";
blockimg="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(img){
        playerimg=img;
        playerimg.scaleToWidth(playerw);
        playerimg.scaleToHeight(playerh);
        playerimg.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerimg);
    });
}

function objectupdate(getimg){
    fabric.Image.fromURL(getimg, function(img2){
        blockimg=img2;
        blockimg.scaleToWidth(blockw);
        blockimg.scaleToHeight(blockh);
        blockimg.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimg);
    });
}

window.addEventListener("keydown", mydown);

function mydown(e){
    
    keypressed= e.keyCode; 
    console.log(keypressed);

    if(keypressed== "37"){
        left();
        console.log("left-37");
        
    }

    if(keypressed=="38"){
        up();
        console.log("up-38");
    }

    if(keypressed=="39"){
        right();
        console.log("right-39");
    }

    if(keypressed="40"){
        down();
        console.log("down-40");

    }

    if(e.shiftKey==true && keypressed=="65"){
        console.log("add");
        playerw= playerw+10;
        playerh= playerh+10;
        document.getElementById("currentw").innerHTML= playerw;
        document.getElementById("currenth").innerHTML= playerh;
    }

    if(e.shiftKey==true && keypressed=="77"){
        console.log("minus");
        playerw= playerw-10;
        playerh= playerh-10;
        document.getElementById("currentw").innerHTML= playerw;
        document.getElementById("currenth").innerHTML= playerh;
    }

}

function up(){
    if(playery>=0){
        playery= playery-blockh;
        canvas.remove(playerimg);
        playerUpdate();
    }
}

function down(){
    if(playery<=450){
        playery=playery+blockh;
        canvas.remove(playerimg);
        playerUpdate();
    }

}

function left(){
    if(playerx>=0){
        playerx=playerx-blockw;
        canvas.remove(playerimg);
        playerUpdate();
    }

}

function right(){
    if(playerx<=660){
        playerx=playerx+blockw;
        canvas.remove(playerimg);
        playerUpdate();
    }

}

