const express = require("express");
const app = express();
var bodyParser = require("body-parser")
const cors = require('cors');

app.use (cors())
app.use(express.json());
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3001;



app.get("/api", (req, res) => {
    res.json({ "users":["chris","ben"] });
  });
  app.post('/register',async(req,res)=>{
   const {email,password}=req.body
   res.status(200)
  })
  
  app.get("/admin",(req,res)=>{

      res.json({'am':['dadsfa','slfjsljf']})
  })

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });