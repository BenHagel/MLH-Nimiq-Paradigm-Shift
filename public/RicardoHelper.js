var Ric = {};
Ric.count = 0;

Ric.baseURL = 'http://localhost:80/api';///'http://www.nimiqgames.ca/api';//
Ric.baseURL_res = 'http://localhost:80/res/';

//World variables to control Ricardo's movement and rayn of terror
Ric.entities = [];

//Initer function runs once on setup
Ric.init = function(){
    //Rico's sleep left
    Ric.sleep = 84390123;
    Ric.sleeping = true;
    Ric.count = 0;
    Ric.entities.push(
        Ric.createNewEntity('ric', 3000)
    );
};

//Return new entity, and type
Ric.createNewEntity = function(entityType, lifeForce){
    var obj = {};
    obj.type = entityType;
    obj.points = lifeForce;
    obj.container = document.createElement('div');
    if(entityType === 'ric'){
        obj.container.classList.add("ricardo-main-avatar");

    }
    obj.container.classList.add("hidden");
    return obj;
};

//Update game
Ric.update = function(){
    Ric.count++;

    //RICARDO GETS UPDATED HERE
    //If Ric is sleeping, count down his sleep
    if(Ric.sleeping === true){
        Ric.sleep--;
        if(Ric.sleep < 1){
            Ric.sleeping = false;
            //Ric.introSong1.play();
            SOUND.RicardoOne.play();
        }
    }
    //RIc is not sleeping
    else{

    }

    //Update the rest of the entities
    for(var j = Ric.entities.length-1;j > -1;j--){
        if(Ric.entities[j].update){
            Ric.entities[j].update();
        }
    }
};

Ric.getRic = function(ents){
    for(var i = 0;i < ents.length;i++){
        if(ents[i].type === 'ric') return i;
    }
    return -1;
};

//Standard xml request func
Ric.xmlRequest = function(type, req, to){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			to(JSON.parse(this.response));
		}
	};

	xhr.open(type, Ric.baseURL + req, true);
	xhr.send(null);
};

//Get english words
Ric.getAllEnglishWordsStartingWith = function(beginningOfWord){
	var possibleWords = function(data){
		if(data.error){
            console.log('ERROR getting words beginning with...');
        }
        else{

        }
    };
    
    var command = '?word=' + beginningOfWord;
    command += '&hits=50';
    Ric.xmlRequest('POST', command, possibleWords);
};


