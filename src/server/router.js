const express = require('express');
const router = express.Router();
const api = require('./api');

router.post('/signup',async (req, res) => {
    try{
        const registerUser = await api.userRegister(req.body);
        console.log('Data from api: '+registerUser);
        res.send(registerUser); 
    }
    catch(err){
        console.log(err);
    }
})

router.post('/login',async (req,res) => {
    try{
        const checkUser = await api.checkUser(req.body);
         res.send(checkUser);
    }catch(err){
         res.send(err);
    }
})

module.exports = router;