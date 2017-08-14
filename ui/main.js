// //////////// countere code///////////////////////////
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
// /////////////////////////////////////////////////////////////////////
            //SUBMIT NAME
            
                var submit = document.getElementById('submit_btn');
                submit.onclick = function () {
                //make a request to the serverand send the name capture the list of names and render the list.
                
                //create a request object
                
                var request = new XMLHttpRequest();
                
                //Capture the reponse and store it ina variable
                
                request.onreadystatechange = function () {
                if (request.readyState === XMLHttpRequest.DONE) {
                //TAKE SOME ACTION
                if(request.status === 200) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = ' ';
                for(var i = 0; i < names.length; i++) {
                list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
                }
                }
                
                };
                //make the request 
                var nameInput = document.getElementById('name');
                var name = nameInput.value; 
                request.open('GET','http://balajisk1996.imad.hasura-app.io/submit-name?name='+ name ,true);
                request.send(null);
                //capture a list of namwes
                };
                
               
// //////////////////////////////////////////////////////////////
    //SUBMIT COMMENT

        var submit2 = document.getElementById('submitButton');
        //after cloicking it should display the comments
        submit2.onclick = function() {
        //create a request object
        var request = new XMLHttpRequest();
        //Capture the reponse and store it ina variable
        request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
        //TAKE SOME ACTION
        if(request.status === 200) {
            // if the request is successful
        // captured and stored on a variable
        var comments = request.responseText;
        comments = JSON.parse(comments);
        //render
        var clist = ' ';
        for(var j=0;j<clist.length;j++) {
        clist+=    '<li>' + comments[j] + '</li>'; 
        }
        var ul = getElementById('commentList');
        ul.innerHTML = clist;
        }
        }
        
        };
        // Capture the comment
        var commentInput = document.getElementById('comment');
        var comment = commentInput.value;
        
        /* make the request
        when a request is made then perform the above steps */
        
        request.open('GET', 'http://balajisk1996.imad.hasura-app.io/' , true);
        request.send(null);
        // after sending this the top steps are execute when server status is true
        };