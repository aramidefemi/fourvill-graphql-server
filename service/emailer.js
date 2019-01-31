var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});



module.exports = emailer = (data) => {
    console.log('emailler called')
    console.log(data)

    const {receiver,subject,body} = data;

    var mailOptions = {
    from: 'support@fourvill.com',
    to: receiver,
    subject: subject,
    text: body
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}
