class Players{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data)=>{
        playerCount = data.val();
    });

    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count 
        });
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            distance:this.distance,
            name:this.name,
        });
    
    }
    static read(){
      var store = database.ref("players");
      store.on("value", (data)=>{
          allplayers= data.val();
      }) 
    }
}

