
import express from 'express';
import createSignUpVerification, { createNewCodeForExisting, findSignupVerificaitonByEmail, verifyOtp } from '../services/authServices.js'
var router = express.Router();
import sendVerification from '../services/emailService.js'



router.post('/sign-up/check-email', async function(req, res, next){
  const data = req.body;
  const existingSignUpUser = await findSignupVerificaitonByEmail(data.email);
  
  let response;
  if(!existingSignUpUser){
    response = await createSignUpVerification(data.email)

  }
  else{
    response= await createNewCodeForExisting(existingSignUpUser.id);
  }
  await sendVerification({
    code: response.code,
    email: response.email
  })
  res.send('Sign up user')
  

})
router.post('/sign-up/verify-otp', async function(req, res, next){
  try {
    const data = req.body
    await verifyOtp(data)
    console.log(data)
    res.send('OTP matches')
  } catch {
    res.status(400).send('OTP does not matches.')
  }
  
})



 router.post('/sign-in/check-emailandpassword', async function(req, res, next){
   const data = req.body;
   await createSignUpVerification(data.email)
   res.send('Sign in user')

 })
export default router
  






// const prisma = new PrismaClient();
// const app = express();
// app.use(express.json());
// var router = express.Router();

// /*
// app.post('//api/v1/auth/signin', async (req, res) =>{
//   const{email} = req.body;
//   const otp = crypto.randomInt(1000000, 999999);
//   const otpExpiry = new Date(Date.now() + 5 *60 * 1000);

//   try{
//     await prisma.user.upsert({
//       where: {email},
//       update: {otp, otpExpiry},
//       create: {email, otp, otpExpiry}
//     })
//     const transporter = nodemailer.createTransport({
//       serviec: 'Gmail',
//       auth: {
//         user: 'srjsharma987@gmail.com'
//       },
//     })
//     const mainOption = {
//       from: 'sharmasuraj3636@gmail.com',
//       to: email,
//       subject: "Your OTP code",
//       text: `Your OTP is ${otp}`
//     }
//     transporter.sendMail(mainOption, (error, info) =>{
//       if(error){
//         return res.status(500).send('Error sending email');
//       }
//       res.status(200).send('OTP send successfully')
//     });
  
//   }  catch(error){
//     res.status(500).send('Error storing OTP');
//   }
// })
// */

// app.post("/", async(req, res) =>{
//   const{emailaddress}= req.body

//     const data = {
//       emailaddress: emailaddress
//     }
//     console.log(data)
// })

// export default router
