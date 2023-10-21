const endDate="18 September 2025 12:00 AM"

document.getElementById("end-date").innerHTML=endDate;

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    if(diff<0){
        document.getElementById("title").innerHTML='We are already there.';
        return;
    }
    
    const seconds=Math.floor(diff)%60;
    const minutes=Math.floor(diff/60)%60;
    const hours=Math.floor(diff/3600)%24;
    const days=Math.floor(diff/24/60/60);
    document.getElementById('seconds').value=seconds;
    document.getElementById('minutes').value=minutes;
    document.getElementById('hours').value=hours;
    document.getElementById('days').value=days;
}
clock();

setInterval(()=>{
    clock()
},1000)