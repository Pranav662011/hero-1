var canvas=new fabric.Canvas("myCanvas");

hero_x=10;
hero_y=10;
hero_image_width=30;
hero_image_height=30;

var hero_object="";


function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        hero_object=Img;
        hero_object.scaleToWidth(hero_image_width);
        hero_object.scaleToHeight(hero_image_height);
        hero_object.set({
            top:hero_y,
            left:hero_x

    });
    canvas.add(hero_object);
    });

   
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{


    if(e.shiftKey==true && key_Pressed=="80"){
        console.log("p and shift pressed together");
        hero_image_width=hero_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    
    if(e.shiftKey==true && key_Pressed=="77"){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    key_Pressed=e.keyCode;
    if(key_Pressed=="38")
    {
        up();
        console.log("up");
    }
    
    if(key_Pressed=="40")
    {
        down();
        console.log("down");
    }
    
    if(key_Pressed=="37")
    {
        left();
        console.log("left");
    }
    
    
    if(key_Pressed=="39")
    {
        right();
        console.log("right");
    }

    if(key_Pressed == "70")
    {
        new_image("ironman_face.png");
        console.log("f");
        
    }
}



