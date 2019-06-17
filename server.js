var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("You've reached the home route!");
});

/*Add a route that goes to /parent and responds with the
 string "I am the parent". Add two more routes, one that 
 goes to /parent/son and one that goes to parent/daughter 
 and have each identify themselves accordingly.*/
// Add your routes below this line
app.get('/parent', function(req, res) {
  res.send("I am the parent ")
});
app.get('/parent/son', function(req, res) {
  res.send("I am the son ")
});
app.get('/parent/daughter', function(req, res) {
  res.send("I am the daughter")
});
/*Add a route that responds to the URL /hello/SEI. 
Have it respond with the string "Welcome to SEI!" a. 
You may notice some trouble getting this route to work.
 Why do you think this is? Take a look at the route from number 2 
 to see if it might be affecting things. b. How can you change your 
 routes to fix this issue?*/
 app.get('/hello/SEI', function(req, res) {
  res.send("Welcome to SEI")
});

/*Add a route that responds to the URL /hello/:name 
where :name is a route parameter that the user will type 
in when they hit the URL. Have the route say Hello to the name provided*/

app.get('/hello/:name', function(req, res) {
  res.send("Hello " + req.params.name + "!")
});


/*Add a route that takes two route parameters, like so: /:name/:thing. 
Have the route respond by saying the thing to the name (e.g. "Thing, Name.)*/
app.get('/:name/:thing', function(req, res) {
  res.send(req.params.name + ', ' + req.params.thing)
});

/*Add a route that uses the wildcard /* to take at least 6 strings separated by forward
 slashes. You should store them in an array, change every even-indexed word in the array 
 to uppercase, join them into a string, and respond with that string.*/

 
app.get("/*", function(req, res) {
  var myArray = req.params[0].split('/');
  var strs = myArray.map(function(word,index) {
   
       if (index % 2 === 0) {
         return word.toUpperCase();
       } else {
         return word;
       }   
    });
  var newString = strs.join(' ');
  res.send(newString);
});

/*Add a route that responds to the URL /console that takes a query string. Inside your
 route function, simply have it console log that query string. Where is the console in 
 a Node/Express app? Check to make sure the key-value pairs printed. When you are done, at 
 the end of the function, just respond with "done". (Is your wildcard route messing things up? 
  Might need to move more specific things above less specific things.)*/

  app.get('/console', function(req, res) {
    console.log(req.query);
    //res.send('done);
  });

  
  /*Add a route that repsonds to the URL /color that takes a query string of the format 
  color=red (substituting the colors blue, green, black, or any valid CSS color) and 
  returns an h1 element with the text of "COLOR" styled to be the color specified in the 
  query string.*/
  
  app.get("/color", function(req, res) {
    var colorString = req.query.color;
    res.send("<h1 style=\"color: " + colorString + ";\">COLOR</h1>");
  
});


// Add your routes above this line

app.listen(8000);
