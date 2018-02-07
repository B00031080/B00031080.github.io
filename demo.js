var clicked = false;
var name = "Bel Inconnu";
document.querySelector("h1.color-change").addEventListener("click", function(){
    clicked = !clicked;
    fetch("https://swapi.co/api/people/"+parseInt(Math.random()*50+1)+"/").then(function(response) {
          return response.json().then(function(json) {
            name =  json.name || "Bel Inconnu";
          });
      });
});

setInterval(function(){
    document.querySelector("h1.color-change").style.color = "#ff0000";
    document.querySelector("h1.color-change").textContent = (clicked ? "Bonsoir" : "Bonjour !")
        + " " + name;

},2000);

setTimeout(function(){
    setInterval(function(){
        document.querySelector("h1.color-change").style.color = "#00ff00";
        document.querySelector("h1.color-change").textContent = clicked ? "Mon frère !" : "Mon Ami !";
    },2000);
},1000)