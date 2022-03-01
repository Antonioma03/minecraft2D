var canvas=new fabric.Canvas("lienzo");
jugadorx=10;
jugadory=10;
bloqueancho=30;
bloquealto=30;
var jugador="";
var bloque="";
function cargarjugador(){
fabric.Image.fromURL("steve.png",function(Img)
{
jugador=Img;
jugador.scaleToWidth(150);
jugador.scaleToHeight(140);
jugador.set(
    {
        top:jugadory,left:jugadorx
    }
);
canvas.add(jugador);
}
);
}
function nuebobloque(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        bloque=Img;
bloque.scaleToWidth(bloqueancho);
bloque.scaleToHeight(bloquealto);
bloque.set({top:jugadory,left:jugadorx});
canvas.add(bloque);
    } );
}

window.addEventListener("keydown",botones);
function botones(e){
    boton=e.keyCode;
    if(boton=="38"){
        ariba();
    }
    if(boton=="40"){
        abajo();
    }
    if(boton=="37"){
        isquierda();
    }
    if(boton=="39"){
        derecha();
    }
    if(boton=="84"){
        nuebobloque("tronco.jpg");
    }

    if(boton=="71"){
        nuebobloque("tierra.png");
    }
    if(boton=="87"){
        nuebobloque("ladrillo.jpg");
    }
    
    if(boton=="67"){
        nuebobloque("concreto.jpg");
    }

    if(boton=="76"){
        nuebobloque("pastoclaro.png");
    }

    if(boton=="68"){
        nuebobloque("pastooscuro.png");
    }

    if(boton=="89"){
        nuebobloque("bloqueamarillo.png");
    }

    if(boton=="85"){
        nuebobloque("polvoluminoso.png");
    }

    if(boton=="82"){
        nuebobloque("ladrillonether.jpg");
    }

    if(boton=="90"){
        nuebobloque("blanco.png");
    }
    if(e.shiftKey==true && boton=="80"){
        bloqueancho=bloqueancho+10;
        bloquealto=bloquealto+10;
        document.getElementById("anchobloque").innerHTML=bloqueancho;
        document.getElementById("altobloque").innerHTML=bloquealto;
    }
    if(e.shiftKey==true && boton=="77"){
        bloqueancho=bloqueancho-10;
        bloquealto=bloquealto-10;
        document.getElementById("anchobloque").innerHTML=bloqueancho;
        document.getElementById("altobloque").innerHTML=bloquealto;
    }
}
function ariba(){
    if(jugadory>=0)
    {
        jugadory=jugadory-bloquealto;
        canvas.remove(jugador);
        cargarjugador();
    }
}

function abajo(){
    if(jugadory<=400)
    {
        jugadory=jugadory+bloquealto;
        canvas.remove(jugador);
        cargarjugador();
    }
}

function isquierda(){
    if(jugadorx>=0)
    {
        jugadorx=jugadorx-bloquealto;
        canvas.remove(jugador);
        cargarjugador();
    }
}

function derecha(){
    if(jugadorx<=800)
    {
        jugadorx=jugadorx+bloquealto;
        canvas.remove(jugador);
        cargarjugador();
    }
}