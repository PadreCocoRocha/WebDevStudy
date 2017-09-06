var request = require('request');
request('http://www.reddit.com/r/aww.json', function(err, res, body){
    if(err){
        console.log("An error happened: ");
        console.log(err);
    } else {
        if (res.statusCode == 200) {
            var parsedBody = JSON.parse(body);
            console.log(parsedBody);
        }   
    }
});