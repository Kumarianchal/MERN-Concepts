// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here
  
  async function sendMailFunc(receiverAddress){
    const transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : {
        user: "codingninjas2k16@gmail.com",
        //pass: "dtdujpoooedfrpgw"
        pass: "slwvvlczduktvhdj"
      }
    })

    const mailOptions = {
      from : "codingninjas2k16@gmail.com",
      to : receiverAddress,
      subject: "Coding Ninjas",
      text : "The world has enough coders; be a coding ninja!"
    }

    try{
      const result = await transporter.sendMail(mailOptions);
      console.log(`Success: Email sent to ${receiverAddress}`);
    } catch(err){
      console.log(err);
    }

  }


  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question('please enter your mail ', (receiverAddress) => {
      sendMailFunc(receiverAddress);
      rl.close();
  });
  
};

export default Solution;
