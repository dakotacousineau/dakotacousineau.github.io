// GPS 1.2 - JavaScript

// YOUR FULL NAMES (DO THIS FIRST):
//  1.John Cain
//  2. Dakota Cousineau


// 0. "YOU SIGNED... WHO?!"
    var Cain={
        name: "John Cain",
        age: 24,
        quote: "the fun has arrived"
    }
    
    var Johnson = {};
    
     Johnson.age  = 35
     Johnson.quote = "some text"
     Johnson.name = "Dwayne Johnson"


// 1. "Here they Come!"

    var Sandler = {}
        Sandler.name = "Adam Sandler"
        Sandler.age = 47
        Sandler.quote = "That's your home! Are you too good for your home?!"
        
    var Bell = {}
        Bell.name = "Kristen Bell"
        Bell.age = 33
        Bell.quote = "Do you wanna build a snowman?"
        

function Kitten(name, temperment, cuddly){
    this.name = name;
    this.temperment = temperment;
    this.cuddly = cuddly
}

function Kitten(name, temperment, cuddly){
	this.name = name;
	this.temperment = temperment;
	this.cuddly = cuddly
}


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var jimCarrey = new Client ("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");
var kristenBell = new Client ("Kristen Bell", 32, "Do you wanna build a snowman?")



// 3. "SHOW 'EM OFF!"

var clients = [jimCarrey,kristenBell]

function summary(client){
    console.log("Hi, my name is " + client.name + " I am " + client.age + " years old and say " + client.quote + " all the time.")
}

    for(i = 0; i < clients.length; i++){
        summary(clients[i]);
    }



"This is Jim he is 52 "



// 4. "But wait, there's more!"



// 5.  ** BONUS **


//  6.  Your Reflection: