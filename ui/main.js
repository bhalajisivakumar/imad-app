
            //SUBMIT username/password to login
            
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
               console.log('user logged in');
               alert('logged in successfully');
               
                } else if (request.status === 403) {
                    alert('Username/password is incorrect');
                         } else if (request.status === 500) {
                             alert('Something went wrong on the server');
                         }
                
                     }
                  }
                
             };
                //make the request 
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                console.log(username);
                console.log(password);
                request.open('POST','http://balajisk1996.imad.hasura-app.io/login', true);
                request.setRequestHeader('Content-Type', 'application/json');
                request.send(JSON.stringify({username: username, password: password}));
                //capture a list of namwes
                };
                
               
// //////////////////////////////////////////////////////////////
    //SUBMIT COMMENT
