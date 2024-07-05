import { API_ENDPOINT } from "../constants";

async function checkSigninEmail(data) {
    const url = `${API_ENDPOINT}/auth/sign-in/check-emailandpassword`
        await fetch(url,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
} 

export default checkSigninEmail