class GameStates{
constructor(){

}
getState(){
    var gamestateRef = database.ref("gameState")
    gamestateRef.on("value",function(data){
        gameState = data.val();
    })
}
updateState(state){
    database.ref('/').update({
        gameState:state
        
    });
}
startState(){
    if(gameState===0){
        form=new Form();
        form.display();
        player=new Players();
        player.getCount();

    }

};
play(){
    form.hide();
    textSize(25);
    text("Game Start",150, 100);
    Players.read();
    if(allPlayers!== undefined){
        var displayPosition = 130;
        for(var plr in allPlayers){
            if(plr==="player"+player.index){
                fill("red");
            }
            else {
                fill("black");
            };
            displayPosition += 20;
            textSize(15);
            text(allPlayers[plr].name+":"+allPlayers[plr].distance, 120, displayPosition());
        };
    };
    if(keyDown(UP_ARROW)){
        player.distance+= 50;
        player.updaate();
    };
}
};