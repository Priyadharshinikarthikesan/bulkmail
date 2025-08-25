const express = require("express")
const cors = express("cors")

const app = express()

app.use(express.json())


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: "priyadharshinipriya0506@gmail.com",
    pass: "agem qhap ucne lcoz",
  },
});

app.get("/sendmail",function(req,res){
    transporter.sendMail(
    {
        from:"priyadharshinipriya0506@gmail.com",
        to:"priyadharshinipriya0506@gmail.com",
        subject:"A message from Bulk Mail App",
        text:"Hi, How Are You ?"
    },

    function(error,info){
        if(error){
            console.log(error);
            res.send("Error")
        }
        else{
            console.log(info);
            res.send("Success")
        }
    }
)

})


app.listen(5000,function(){
    console.log("server Started...")
})