const saludo = document.querySelector("#saludo");
saludo.addEventListener("click", mostrarAlerta);

function mostrarAlerta(){
    Swal.fire({
        title: "Bienvenid@",
        text: "A JUGAAAAARRRR!!!",
        imageUrl: "champagne.jpg",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Custom image"
      });
}


const juego = document.querySelector("#juego");
juego.addEventListener("click", () => {
    let numero =
        Math.floor(Math.random()* 21 +1);
        if(numero === 1){
            alert(" Elige dos compañeros mas y tome cada quien un shot");
        } else if (numero == 2){
            alert( " Verdad o reto");
        } else if (numero == 3){
            alert( " Yo nunca nunca");
        } else if(numero == 4){
            alert(" Toma 4 segundos de la botella");
        } else if (numero == 5){
            alert( " Puedes poner una regla que todos deben cumplir Ej. Nadie puede ir al baño, el castigo se puede anular hasta que alguien mas saque de nuevo éste castigo");
        } else if (numero == 6){
            alert(" Te casas con alguien. Los castigos que te toquen de igual manera los tendrá que hacer la otra persona y viceversa con los castigos que el tenga.");
        } else if (numero == 7){
            alert(" Elige un esclavo. A quien escojas debe hacer todo lo que tu le ordenes.");
        } else if (numero == 8){
            alert (" Tira de nuevo");
        } else if (numero == 9){
            alert (" Toma un trago de cada bebida de tus compañeros.");
        } else if (numero == 21){
            alert (" Actua como pollo por los próximos 5 minutos");
        } else if (numero == 10){
            alert(" Deja que una persona haga un dibujo en tu cara y permanece así todo el juego");
        } else if (numero == 11){
            alert(" Graba un video haciendo un baile de TikTok");
        } else if (numero == 12){
            alert(" Canta el himno nacional con voz de ardilla");
        } else if (numero == 13){
            alert(" Imitar 3 animales que los jugadores decidan");
        } else if (numero == 14){
            alert(" Crea un informecial divertido con un objeto aleatorio en el lugar");
        } else if (numero == 15){
            alert(" Imitar a alguien durante 10 minutos sin que se dé cuenta");
        } else if (numero == 16){
            alert(" Elige una palabra prohibida y cuando alguien la diga aplica un castigo");
        } else if (numero == 17){
            alert(" Cuenta una anecdota graciosa de tu infancia");
        } else if (numero == 18){
            alert(" Quédate inmóvil 3 minutos mientras los demás intentan hacerte reír");
        } else if (numero == 19){
            alert(" Deja que alguien te pinte un tatuaje en cualquier parte del cuerpo");
        } else if (numero == 20){
            alert(" Intercambia una prenda con alguien del sexo opuesto y permanece así todo el juego");
        }
    
})



