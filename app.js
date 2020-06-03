const app = () => {

    //Getting the stuff
    const song = document.querySelector('.song');
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle')
    const video = document.querySelector('.vid-container video')
    //sounds
    const counds= document.querySelectorAll('.sound-picker button');
    //Time Display
    const timeDisplay = document.querySelector('.time-display');
    //Get the length of the outline
    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 1200;

    //For the Play/Pause button animation
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //Play sounds
    play.addEventListener('click', () => {
       checkPlaying(song);
    })

    //Create a function to stop and play sounds and change icon
    const checkPlaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = '.svg/pause.svg'
        } else {
            song.pause();
            video.pause();
            play.src = '.svg/play.svg'
        }
    }


}

app();