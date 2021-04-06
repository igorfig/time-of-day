const date = new Date()

const fullDate = {
    day: () => date.getDate(),
    dayOfWeek: () => date.getDay(),
    month: () => date.getMonth(),
    year: () => date.getFullYear(),
}

const FormatDate = { 
    formatDay(day) { 
    
    let dayOfWeek;

    if(day === 0) {
        dayOfWeek = 'domingo'
    }

    else if (day === 1) {
        dayOfWeek = 'segunda-feira'
    }

    else if (day === 2) {
        dayOfWeek = 'terça-feira'
    }
    
    else if (day === 3) {
        dayOfWeek = 'quarta-feira'
    }

    else if (day === 4) {
        dayOfWeek = 'quinta-feira'
    }
    
    else if (day === 5) {
        dayOfWeek = 'sexta-feira'
    }
    else if (day === 6) {
        dayOfWeek = 'sábado'
    }
    
    return dayOfWeek
    },

    formatMonth(month) {
        let monthName;

        if(month === 0) {
            monthName = 'janeiro'
        }
    
        else if (month === 1) {
            monthName = 'fevereiro'
        }
        else if (month === 2) {
            monthName = 'março'
        }
        
        else if (month === 3) {
            monthName = 'abril'
        }
    
        else if (month === 4) {
            monthName = 'maio'
        }
        
        else if (month === 5) {
            monthName = 'junho'
        }

        else if (month === 6) {
            monthName = 'julho'
        }

        else if (month === 7) {
            monthName = 'agosto'
        }

        else if (month === 8) {
            monthName = 'setembro'
        }

        else if (month === 9) {
            monthName = 'novembro'
        }

        else if (month === 10) {
            monthName = 'dezembro'
        }

        return monthName;
        
    }
}

document.querySelector('.content').lastElementChild.innerHTML = `
    ${FormatDate.formatDay(fullDate.dayOfWeek())}, ${fullDate.day()} de ${FormatDate.formatMonth(fullDate.month())} de ${fullDate.year()}
`


function showHoursOnScreen(){
    const date = new Date()
    const hour = date.getHours();
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const formatHours = hour < 10 ? 0 : ""; 
    const formatMinutes = minutes < 10 ? 0 : ""; 
    const formatSeconds = seconds < 10 ? 0 : ""; 


    const msg = document.querySelector('p')
    msg.innerHTML = `${formatHours}${hour}:${formatMinutes}${minutes}:${formatSeconds}${seconds}`
}

const interval = window.setInterval(() => showHoursOnScreen(), 1000);

const changeImages = {
    container: document.querySelector('#container'),

    morning: () => changeImages.container.classList.add('morning', 'mobile-morning'),

    afternoon: () => changeImages.container.classList.add('afternoon', 'mobile-afternoon'),

    night: () => changeImages.container.classList.add('night', 'mobile-night'),
}

function checkTime(){
    const hour = date.getHours();

    const morning = hour >= 6 && hour < 12;
    const afternoon = hour >= 12 && hour < 18;
    const night = hour >= 18 < 6

    if ( morning ) {
        changeImages.morning();
    } 

    else if ( afternoon ) {
        changeImages.afternoon();
    } 

    else if ( night ) {
        changeImages.night();
    }
}

checkTime()