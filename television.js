const tele = {
    "encender": false,
    "volumen": 3,
    "canal": 7,
    "mutear": false
}

function encender(){
    if(tele.encender){
        tele.encender = false;
        console.log("lavadora apagada");
        console.log(tele);
    }else{
        tele.encender= true;
        console.log("lavadora encendida");
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
// for (var i = volumen; i <= 10; i++) {
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
        tele.mutear = false;
        if(!tele.mutear){
            tele.volumen=0;
        }else{
            tele
        }
    }

}