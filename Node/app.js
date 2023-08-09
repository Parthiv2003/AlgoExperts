const express = require('express');
const app = express();
app.use(express.json()) ; //as data is sent into json format 
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors()); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "bcdhnbfckhgunrimv5645756/()?asdxzcfrtg564237hf{}[]";

// const mongoUrl = "mongodb+srv://IITBombay:IITBombay@cluster0.8ejq25a.mongodb.net/?retryWrites=true&w=majority";
const mongoUrl = "mongodb://127.0.0.1:27017/userinfo"
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected to DataBase")})
.catch(e=>console.log(e))

require("./UserDetails");
const User = mongoose.model("userinfo")   
//information stored in schema will be added in these model

//SignUp API
app.post("/register",async(req,res)=>{
    const {fname,lname,email,password} = req.body;
    const encryptedPassword = await bcrypt.hash(password,10);

    try {
        const olduser = await User.findOne({email});
        if(olduser){
            console.log("Already registered")
            return res.sendStatus(404);
        }
        else{
            await User.create({
                fname,
                lname,
                email,
                password: encryptedPassword 
            })
            console.log("User: 1 ")
            
            return res.sendStatus(200);
        }
        
    } 
    catch (error) {
        console.log("Hii")
        res.sendStatus(401);
    }
});

//login Api
app.post("/login-user",async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.json({status: "error", error: "Email Not Found", data: null})
    }

    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({},JWT_SECRET);
        
        if (res.status(201)){
            return res.json({status:"ok", data: token});
        }
        else{
            return res.json({status:"error", error: "Network Error", data: null});
        }
    }
    else{
        return res.json({status: "error", data: null, error: "Invalid Password"});
    }
})

app.listen(5000,()=>{
    console.log('Server started')
});

//userDetails
app.post('/userData',async(req,res)=>{
    const {token} = req.body;
    try{
        const user = jwt.verify(token,JWT_SECRET);
        const useremail = user.email;
        user.findOne({email: useremail}).then((data)=>{
            res.send({status:"ok",data: data})
        }).catch((error)=>{
            res.send({status:"error",data: error});
        });
    }catch(error){   }
});

//Post field
app.post('')