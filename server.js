const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

var value =''



app.post('/', async (req, res) => {
    const { msg } = req.body;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+msg+"&appid=1d1394b574c5fc3aa229814578fec613";
    var data = await axios.get(url)
    console.log(data.data)
    res.json(data.data)
    
});

if(process.env.NODE_ENV=='production'){
    const path = require('path')
    app.use(express.static(path.resolve(__dirname,'build')))
    app.get('/',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}
var PORT = process.env.PORT || 4000
app.listen( PORT, ()=>{
    console.log('started')
})
