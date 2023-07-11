// Parte 1

function businessHour(dayNumber,hourNumber) {
    if ((hourNumber>=9) && (hourNumber<=19) && (dayNumber>=0) && (dayNumber<=6)){
        console.log("True");
    } else {
        console.log("False");
    }
}// businessHour


// parte 2

function getDayNumber(janFirstDayNumber,yearDayNumber){
    var residuo = ((yearDayNumber-1)%7);
        console.log("El dia de la semana es el " + residuo);
    }// getDayNumber

