function playsound(e) {
    //mapping an event listener attribute to a tag
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select audiotag with data-key = "event keycode"
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select the tag with class = "key" and data-key = "event keycode"
   

    if (!audio) return; // stops function 
    audio.currentTime = 0; // stops the sound aloowing it to be looped
    audio.play();//trigger play method of audio tag

    key.classList.add('playing')// add the class playing to key
   
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip when not a transform
    this.classList.remove('playing');

}

const keys = document.querySelectorAll(".key")

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playsound);

