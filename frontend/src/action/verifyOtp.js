import { API_ENDPOINT } from "../constants";

async function checkOtp(data) {
    const url = `${API_ENDPOINT}/auth//sign-up/verify-otp`
        await fetch(url,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
} 

export default checkOtp