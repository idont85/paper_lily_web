function randVal(arguments){
    var x = Math.floor(Math.random() * arguments.length);
    return arguments[x];
}

function playMu() {
    var array = ["a", "b", "c"]
    var music = randVal(array)
    console.log(music)
    
    if (music == "a") {
        var audio = new Audio('./music/lacies_theme.mp3');
        audio.play();
    }
}

function whenIt() {
    document.onclick = playMu()
}