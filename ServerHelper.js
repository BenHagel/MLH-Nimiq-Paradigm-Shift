var Ricardo = {};
Ricardo.knownWords = [];

Ricardo.init = function(){
    console.log('Server Helperrrrr!');
    Ricardo.knownWords = (''+fs.readFileSync('database/englishwords.txt')).split('\n');
    console.log(Ricardo.knownWords.length + ' words found');
};

Ricardo.handleApi = function(req, res){
    if(req.query.cmd === 'contains'){
        var hits = Number(req.query.hits);
        var word = '' + req.query.word;
        var results = {};
        results.words = [];
        for(var i = 0;i < Ricardo.knownWords.length;i++){
            //if(results.words.push()
        }
        //res.json()
    }
    else{
        //res.json
    }
};

