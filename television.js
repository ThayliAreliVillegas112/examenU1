const tele = {
    "encender": false,
    "volumen": 3,
    "canal": 7,
    "mutear": false
}

function encender(){
    if(tele.encender){
        tele.encender = false;
        
        console.log(tele);
        tele.volumen=3;
        tele.canal=7;
        tele.mutear= false;
        console.log("televisón apagada");
    }else{
        tele.encender= true;
        console.log("televisón encendida");
        console.log(tele);
    }

}

function aumentarVolumen(){
    if(tele.encender == true){
        
        if(tele.volumen >= 10){
            console.log("Has superado el volumen máximo")
            tele.volumen = 10;
            console.log(tele);
        }else{
            var v = tele.volumen;
            v=v+1;
            tele.volumen = v;
            console.log(tele);
        } 
    }else{
        console.log("primero encienda la tele");
    }

}

function bajarVolumen(){
    if(tele.encender == true){
        if(tele.volumen <=1){
            console.log("1 es el volumen minimo");
            tele.volumen = 1;
            console.log(tele);
        }else{
            var v = tele.volumen;
            v=v-1;
            tele.volumen = v;
            console.log(tele);
        }
    }else{
        console.log("primero encienda la tele");
    }

}
function cambiarCanal(){
    if(tele.encender == true){
        
        if(tele.canal >= 100){
            console.log("El canal máximo es 100");
            tele.canal = 100;
        }else{
            var canal = tele.canal;
            canal = canal+1;
            tele.canal = canal;
            console.log(tele);
        }
    }else{
        console.log("primero encienda la tele");
    }

}

function cambiarCanal2(){
    if(tele.encender == true){
        if(tele.canal <=1){
            console.log("El canal minimo es 1");
            tele.canal = 1;
        }else{
            var canal = tele.canal;
            canal=canal-1;
            tele.canal = canal;
            console.log(tele);
        }
    }else{
        console.log("primero encienda la tele");
    }
}
function mutear(){
    if(tele.encender == true){
        
        if(tele.mutear){
            tele.mutear = false;
            tele.volumen=0;
            console.log(tele);
            console.log("televisón con sonido");
        }else{
            tele.mutear= true;
            console.log("Tele muteada");
            console.log(JSON.stringify(tele,null,4));
            console.log(tele);
        }

    }else{
        console.log("primero encienda la tele");
    }

}
