const express = require('express')
const app = express()  //allows app to use all express stuff
const PORT = 8000   //best practice to set port as a variable.  capitalize because it won't change (see magic numbers)
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName':'Sheyaa Joseph',
        'birthLocation':'London, England'
             },
    'chance the rapper': {
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation':'Chicago, IL'
        },
        'unknown': {
            'age': 0,
            'birthName':'unknown',
            'birthLocation':'unknown'
            }

    }
//after first two lines, check it by serving up a file (came back and added line 3 port):  added app.get and app.listen.  later inserted /api
app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')    //response is the paramter.  start looking in current directory.  now go make index.html so it'll work
}) //this is like an event listener, but not click.  a network request instead fires this method

app.get('/api/:name', (request, response)=>{  //if we make a request to this route, we responde with savage object. can type localhost:8000/api in address bar to see it
    const rapperName = request.params.name.toLowerCase() //if there is a bit of text after api/:  the 'name' matches the /:name from previous line
   // console.log(rappers[rapperName].birthName)//if we put localhost:8000/api/chance the rapper, it console logs his birthname
    if(rappers[rapperName]) { //if rapperName is a property of rappers
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
  
})


app.listen(PORT, ()=>{
    console.log(`The server is now running on ${PORT}`)  //PORT tells is to listen on 8000
})