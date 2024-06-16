const express=require('express');
const app=express();
const nodemailer=require('nodemailer');

app.get('/',(req,res)=>{

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        // auth: {
        //   user: "maddison53@ethereal.email",
        //   pass: "jn7jnAPss4f63QBp6D",
        // },
        auth: {
          user: "dorothy.johnson@ethereal.email",
          pass: "bfehDkj9Vaek2wh7Pa",
        },
      });
    
      const mailOptions={
        from: {
            name:'Dorothy',
            address:'dorothy.johnson@ethereal.email'
        }, // sender address
        to: 'dorothy.johnson@ethereal.email', // list of receivers
        subject: 'Hello',
        html:`<p>Msg Sent</p>`,
        text: "Hello..How are you?", // plain text body
    
      }
    
      const sendMail =async(transporter,mailOptions)=>{
        try {
            await transporter.sendMail(mailOptions);
            console.log('Email has been sent!')
        } catch (error) {
            console.log(error);
        }
      }
    
      sendMail(transporter,mailOptions);

});


app.listen(3000,()=>{
    console.log('Server starts listening on port no:3000');
})