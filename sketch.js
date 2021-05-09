var player;
var form;
var gameState, game;
var playerCount=0;
var gameState = 0;
var database
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game= new GameStates();
    game.getState();
    game.startState();

    
}

function draw(){
    background("white");
    if(playerCount===4){
        game.updateState(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
}


