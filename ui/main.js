var button= document.getElementById('counter');

button.onclick = function () {
    //create a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the reponse and store it ina variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
        //TAKE SOME ACTION
        if(request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    //Render the variable in a corect span
        };
     //make the request 
     request.open('GET','http://balajisk1996.imad.hasura-app.io/counter',true);
     request.send(null);
};
//submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
    //make a request to the serverand send the name capture the list of names and render the list.
   var names = ['name1','name2','name3','name4'];
   var list = ' ';
   for(var i = 0; i < names.length; i++) {
       list += '<li>' + names[i] + '</li>';
   }
   var ul = document.getElementById('namelist');
   ul.innerHTML = list;
};

