let song=document.querySelector("audio")
let range=document.querySelector("#range")
let play=document.querySelector("#play")

song.onloadeddata=function(){
    range.max=song.duration;
    range.value=song.currentTime;
}
function playbtn(){
    if(play.classList.contains("fa-play"))
    {
        song.play();
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
    }
    else{
        song.pause();
        play.classList.add("fa-play")
        play.classList.remove("fa-pause")    
    }
}

range.onchange=function (){
    song.play();
    song.currentTime=range.value;
    play.classList.remove("fa-play")
    play.classList.add("fa-pause")
}

if(song.play()){
    setInterval(()=>{
        range.value=song.currentTime;
    },500)
}