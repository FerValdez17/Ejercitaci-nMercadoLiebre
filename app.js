const express = require ('express');
const app = express();
const path = require ('path');
const port = 4000

//SERVER
app.listen(port, () => 
console.log(`Port running in ${port}\n Abrir en el navegador http://localhost:${port} `))

//MIDDLEWARE
app.use(express.static('public'))


//ROUTING
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname , '/views/home.html'))
})
