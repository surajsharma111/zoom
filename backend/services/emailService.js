
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
 async function sendVerification(data){

  
const msg = {
    to: data.email, // Change to your recipient
    from: 'info@skilluplabs.com.au', // Change to your verified sender
    subject: `${data.code} is your OTP`,
    template_id:'d-6ff7456297c742deaec5ddd1b0008ef3',
    dynamic_template_data: data
  }
  await sgMail.send(msg)
}
export default sendVerification