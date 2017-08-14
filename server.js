var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'articles' : {
        title :'Articles | Bhalaji Sivakumar',
        heading : 'Articles',
        date : 'Aug 14,2017',
        content : `
        <div>
        <ul id = "commentList>
        </ul>
        `
},
   'article-one' : {
    title :'Article One | Bhalaji Sivakumar',
    heading : 'Article One',
    date : 'Aug 11,2017',
    content :   `
        <p>
               CONTENT for my file article one......     Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......  
               
        </p>
        <p>
             Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......  
        </p>
        <p>
             Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......   Content for my file article one......  
        </p>` ,
        comment:   `
      <input type = "text" placeholder = "comments" id = "comment"></input>
        <input type = "submit" value = "submit" id = "submitButton"></input>
                `
       
},
   'article-two' : {
            title:'Article Two | Bhalaji Sivakumar',
            heading: 'Article Two',
            date: 'Aug 12,2017',
            content:   `
        <p>
            article 2 content
        </p>    `     ,
        comment:   `
      <input type = "text" placeholder = "comments" id = "comment"></input>
        <input type = "submit" value = "submit" id = "submitButton"></input>
                `
},
   'article-three' : { 
       title:'Article three | Bhalaji Sivakumar',
    heading: 'Article three',
    date: 'Aug 13,2017',
    content:   `
        <p>
              article three content
        </p>`,
     comment:   `
      <input type = "text" placeholder = "comments" id = "comment"></input>
        <input type = "submit" value = "submit" id = "submitButton"></input>
        
                `
      }
    
};
    // ///////////////////function create template//////////
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    var comment = data.comment;
var htmlTemplate= `
<html>
   <head>
      <title>
           ${title}
       </title>
    <meta name="viewport" content="width = device-width,initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
       <hr/>
       <h3>
          ${heading}
       </h3>
    <div>
          ${date}
    </div>
    <div>
          ${content} 
    </div>
  <div>
  <hr/>
          ${comment}
  </div>
    </div>
</body>

</html>
`;
return htmlTemplate;
}


///////////// INDEX.HTML ///////////////////////////////////////
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
// /////////// COUNTER ///////////////////////////////////
var counter = 0;
app.get('/counter', function(req,res) {
   counter = counter +1; 
   res.send(counter.toString());
});
// //////////// NAME ////////////////////////////////////

var names=[];
app.get('/submit-name',function(req,res) { //url:  /submit-name?name-xxxxx
   var name = req.query.name;
   names.push(name);
    res.send(JSON.stringify(names));
});

// /////// COMMENTS //////////////////////////////////////

var comments=[];


// /////// ARTICLE PAGE////////////////////////////////////
// when the request is rendered it must be executed in the articlename page

app.get('/:articleName',function(req,res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
});

app.get('/:articleName',function() {
   var commentList = document.getElementById('commentList');
    res.send(commentList.value); 
});
// /////////////articles///////////////////////////////////////

app.get('/:articles',function() {
    
});
// ///////////////// style.css //////////////////////////////

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
// //////// / main.js ////////////////////////////////////////
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
// /////////// madi image //////////////////////////////////////
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});






// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
