var text = document.getElementById("styleText")
var button = document.getElementById("styleButton")
var buttonName = document.getElementById("buttonName")

var list = [11, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0]

var styles = ["hymn", "classicalsymphony", "folk", "opera", "gospel", "blues", "boogiewoogie", "ragtime", "dixieland", "swing", "broadway", "soundtrack", "rhythm&blues", "jazz", "country", "soul", "reggae", "disco", "rocknroll", "latin", "pop", "heavymetal", "electronic", "dance", "rap", "newage"]
var actualStyles = ["Hymn", "Classical Symphony", "Folk", "Opera", "Gospel", "Blues", "Boogie Woogie", "Ragtime", "Dixieland", "Swing", "Broadway", "Soundtrack", "Rhythm & Blues", "Jazz", "Country", "Soul", "Reggae", "Disco", "Rock N Roll", "Latin", "Pop", "Heavy Metal", "Electronic", "Dance", "Rap", "New Age"]

rand = 0;
var audio = new Audio(styles[rand] + ".mp3")
audio.currentTime = list[rand]
button.addEventListener('click', function() {
    
    if (buttonName.innerText == "Reveal Style")
    {
        buttonName.innerText = "Play Song"
        text.innerText = actualStyles[rand]
        audio.pause()
    }
    else if (buttonName.innerText == "Play Song")
    {
        rand = Math.floor(Math.random() * 26)
        buttonName.innerText = "Reveal Style"
        audio = new Audio(styles[rand] + ".mp3")
        audio.currentTime = list[rand]
        audio.play()
        text.innerText = "???"
    }
    
  });