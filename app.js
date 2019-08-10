const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/' , (req, res) => res.send('Hello World!'))

let pokemons = [
    {name : "Bulbasaur" ,type :"Grass · Poison"},
    {name : "Charmander" ,type :"Fire"}
]

app.get('/pokemons',(req, res) => res.send(pokemons));

app.post('/pokemons', (req, res) => {
    pokemons.push(req.body)
    //console.info(req.body)
    res.sendStatus(201)
})

app.listen(port,() => console.log(`Example app listening on post ${port}!`));

/*
class pokemon {
    constructor(name, primaryType){
        this.name=name
        this.primaryType=primaryType
    }
    echo(){
        console.log(`Type of ${this.name} is ${this.primaryType}`)
    }
}

var p1 = new pokemon('Bulbasaur','Grass · Poison')
var p2 = new pokemon('Charmander','Fire')
var p3 = new pokemon('Squirtle','Water')
var p4 = new pokemon('Caterpie','Bug')
var p5 = new pokemon('Weedle','Bug · Poison')

var mypokemon = []

mypokemon.push(p1)
mypokemon.push(p2)
mypokemon.push(p3)
mypokemon.push(p4)
mypokemon.push(p5)

mypokemon.forEach(function(element){
    element.echo()
})
*/