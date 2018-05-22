console.log("My code is loaded and running.");
setTimeout(function(){
    setInterval(function(){
        document.querySelector("h1").style.color = "#aa0000";
        document.querySelector("h1").style.top = "100px";
    },3000);  
}, 1500);

setInterval(function(){
    document.querySelector("h1").style.color = "#00dd00";
    document.querySelector("h1").style.top = "200px";
},3000);

function clickonh1(){
    fetch('https://swapi.co/api/people/'+ parseInt(Math.random()*50+1))
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        document.querySelector("h1").textContent = "You got " + myJson.name;
    });

    
    setTimeout(function(){
        document.querySelector("h1").textContent =
             "I will go back to normal in 3 seconds.";
    },3000);

    setTimeout(function(){
        document.querySelector("h1").textContent =
             "This is Yellow Cat website !";
    },6000);

}