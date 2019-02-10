const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let people = [
    {id: 1, name: 'tayte', age: 21},
    {id: 2, name: 'kyle', age: 18}
];

//MiddleWare
app.use(cors());
app.use(bodyParser.json());

//Endpoints
app.get('/people', (request, response) => {
    response.send(people)
})

app.post('/addPerson', (request, response) => {
    let newPerson = request.body;
    people.push(newPerson);
    response.send(people);
})

app.delete('/remove/:id', (request, response) => {
    console.log(request.params)
    let {id} = request.params;
    people = people.filter(person => {
        return person.id != id;
    });
    response.send(people);
});

app.put('/like/:id', (request, response) => {
    let {id} = request.params;
    people.forEach(person => {
        if(person.id == id){
            person.name = person.name + ' 💜'
        }
    })
    response.send(people);
})

//Get server running
app.listen(8080, () => {
    console.log('Server is now connected')
});