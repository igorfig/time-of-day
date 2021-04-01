function showHoursOnScreen(){
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const formatHours = hour < 10 ? 0 : ""; 
    const formatMinutes = minutes < 10 ? 0 : ""; 
    const formatSeconds = seconds < 10 ? 0 : ""; 


    const msg = document.querySelector('p')
    msg.innerHTML = `Agora são ${formatHours}${hour}:${formatMinutes}${minutes}:${formatSeconds}${seconds}`
}

const interval = window.setInterval(() => showHoursOnScreen(), 1000);

const changeImages = {
    img: document.querySelector('.image'),
    body: document.querySelector('body'),
    message: document.querySelector('p'),

    morning: () => {
        changeImages.img.innerHTML = "<img src=assets/morning.png alt=morning-image>"
        changeImages.body.classList.add('morning')
        changeImages.message.style.color = "#da8f4f"
    },

    afternoon: () => {
        changeImages.img.innerHTML= "<img src=assets/afternoon.png alt=afternoon-image> "
        changeImages.body.classList.add('afternoon')
        changeImages.message.style.color = "#f09139"
    },

    night: () => {
        changeImages.img.innerHTML= "<img src=assets/night.png alt=night-image>"
        changeImages.body.classList.add('night')
        changeImages.message.style.color = "#474c4f"
        
    }
}

function checkTime(){
    const date = new Date();
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