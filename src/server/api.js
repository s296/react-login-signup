const userdb = require('./Schema');

checkPhoneNo = (data) =>{
    return new Promise((resolve,reject)=>{
        userdb.find({phone:data.phone} ,(err,res) => {
            resolve(res[0] != undefined);
        });  
    })    
}

module.exports = {
    userRegister: async (data)=>{
        if (await checkPhoneNo(data)){
            return null;
        }else{return new Promise((resolve,reject)=>{
            userdb.create(data,(err,result)=>{
                if(err){
                    reject(err);
                } else{
                    resolve(result);
                }
            })
         })}
    },
    checkUser : (data) => {
        return new Promise ((resolve,reject) => {
            userdb.find ( { phone:data.phone , password:data.password},(err,result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        })
    }
}