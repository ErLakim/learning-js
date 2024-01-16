const getFormData = () =>{
    const name = document.getElementsById("name").value;
    document.getElementById("result").innerHTML= name;

};
const time = new Date();
document.getElementById("clock").innerHTML = time;

const getTime =() =>{
    const time = new Date();
    const watchHour = time.getHours();
    const watchMin = time.getMinutes();
    const watchSec = time.getSeconds();
    const currentTime = String(watchHour).concat(":",watchMin,":", watchSec);
    document.getElementById("clock").innerHTML = currentTime;

};
setInterval(() =>{
    getTime();
},1000);