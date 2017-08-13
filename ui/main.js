var button= document.getElementById('counter');

button.onclick = function () {
    //create a request to the counter endpoint
    var request = new XMLHttpRequest();
    //Capture the reponse and store it ina variable
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
        //TAKE SOME ACTION
        if(request.status === 200) {
            var counter = request.responseText;
            span.innerHTML = counter.toString();
        }
    }
    //Render the variable in a corect span
        };
     //make the request 
     request.open('GET','http://balajisk1996.imad.hasura-app.io/counter',true);
     request.send(null);
};