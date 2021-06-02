const { setTwilioEmailAuth } = require('@sendgrid/mail')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
  sgMail.send({
    to : email,
    from : 'srinathmp21@gmail.com',
    subject: 'Thanks for joining in!',
    text : `Welcome to the task manager app, ${name}. Let me know how you get along with the app`
  }).then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}

const sendCancellationEmail = (email,name)=>{
  sgMail.send({
    to : email,
    from : 'srinathmp21@gmail.com',
    subject: 'Thanks for being a valuable customer!',
    text : `Thank you ${name} for being a valuable customer. Sorry to hear you're leaving. Please give us a review on how the experience could have been better/  why you left`
  }).then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}


module.exports={
  sendWelcomeEmail : sendWelcomeEmail ,// ES6 just--sendWelcomeEmail
  sendCancellationEmail : sendCancellationEmail
}