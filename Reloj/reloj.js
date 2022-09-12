
//Reloj
let clock = ()=>{
    let date = new Date();
    let hrs = date.getHours(); //Toma hora
    let mins = date.getMinutes(); //toma minutos
    let secs = date.getSeconds(); //toma segundos
    let period = "AM" //Periodo va a ser igual a AM
    if (hrs == 0){ //Si horas es igual a 00 entonces pasa a ser 12
        hrs = 12;
    } else if (hrs > 12){ //Si horas es mayor a 12, entonces hors se le resta 12 y pasa a ser de tarde
        hrs = hrs - 12;
        period = "PM"
    }

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    let time = `${hrs}:${mins}:${secs}:${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
};

clock(); //Llamado de la funcion