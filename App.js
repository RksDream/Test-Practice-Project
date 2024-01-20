var counter = 0;
var str = "Hello Pandaa👫..";

function ReturnCounterInHeadingTag() {
    return "<h1>" + str + counter + "</h1>";
}

function FunnyMessage() {
    return "<h1>" + "Ae bhai ruk..sabr kr thoda.." + "</h1>";
}

function functionTemp() {
    ++counter;
    const heading = document.getElementById("root");
    if(counter % 5 != 0)
    heading.innerHTML = ReturnCounterInHeadingTag();
    else
    heading.innerHTML = FunnyMessage();
}