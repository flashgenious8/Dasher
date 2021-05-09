class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Dashers");
        title.position(230,30);
        var nameText = createInput("name");
        var button = createButton("Start");
        var greeting = createElement('h3');
        nameText.position(230,200);
        button.position(230,250);
        button.mousePressed(function(){
            nameText.hide();
            button.hide();
            var name = nameText.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello"+name);
            greeting.position(240,245);
        });
    };
}