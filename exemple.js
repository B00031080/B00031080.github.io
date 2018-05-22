console.log("Mon Javascript est chargé et il fonctionne !");
let moving = false;

setTimeout(function(){
    setInterval(function(){
        document.querySelector("h1").style.color = "#00ff00";
        if(moving)document.querySelector("h1").style.top = "100px";
    }, 1500);
},2000);


setInterval(function(){
    document.querySelector("h1").style.color = "red";
    if(moving)document.querySelector("h1").style.top = "300px";
}, 1500);

function clickOnMyH1(){

    //moving = !moving;
    fetch('https://swapi.co/api/people/'+ parseInt(Math.random()*50+1))
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        document.querySelector("h1").textContent = "Good to see you " + myJson.name 
    });

}

document.querySelector("h1").addEventListener("mouseleave",function(){
    document.querySelector("h1").textContent = "Ne me quitte pas ....";
});