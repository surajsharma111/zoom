import Banner from "../components/Banner"
import Logo from "../components/Logo"
import CheckCircle from "../components/CheckCircle"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoWarning } from "react-icons/io5";
import { useCookies } from "react-cookie"

function SignUp(){
    const features = [
        'Host unlimited 40-minute meetings with up to 100 participants',
        'Keep everyone engage with screen sharing and caption',
        'Be meeting ready with HD-quality video and virtual background',
        'Collaborate using Team chat messages, whtieboards, and video clips',
        'Boost productivity with built-in Calendar, Mail, and Notes'
    ];
    const [cookies, setCookie] = useCookies(['underAge'])
    const [underAge, setUnderAge] = useState(false)
    const [birthyear, setBirthYear] = useState('');
    

    const handelBirthYear = function (event){
        const value = event.target.value;
        setBirthYear(value);
    }
    const handleVerifyAge =  (event)=>{
        event.preventDefault();
        console.log(birthyear);
        const today = new Date();
        const currentYear  = today.getFullYear();
        const age = currentYear - parseInt(birthyear);
        if(age <= 16){
            setUnderAge(true);
            setCookie('underAge', true)
        }

    }
    useEffect(() =>{
        if(cookies.underAge){
            setUnderAge(true)
        }
    }, [cookies])
    return(
        <div className="flex justify-center max-w-full w-full h-screen ">
           <div className="container max-w-full w-full bg-gray-50">
           <div className=" box-border items-center w-full topbar flex flex-row h-16 justify-between bg-white flex-grow  w-">
                    <div className="p-8">
                        <Logo />
                    </div>
                    <div className=" ml-auto flex flex-row gap-7 mr-10">
                    <p>Already have an account
                         <Link className=" text-blue" to="/sign-in">Sign In</Link>
                         </p>
                        <a className=" text-blue" href="#">Support</a>
                        <a className=" text-blue" href="#">English</a>
                    </div>

                </div>

                <div className="body h-full bg-white flex flex-row w-full items-center ">
                    <div className=" h-full left-container  w-2/5 h-full flex flex-col  bg-gray-50">

                        <div className=" w-4/5 m-0 m-auto mb-0">
                             <Banner/>
                        </div>
                        
                        <div className=" flex gap-3 flex-col  rounded-2xl p-6 mt-0 w-4/5 m-0 m-auto  bg-white shadow shadow-lg">
                            <h2 className=" font-bold text-2xl flex justify-center">Create your free Basic account</h2>
                            <ul className="flex flex-col gap-3 font-Almaden font-sans">
                                {
                                    features.map((feature, key) =>{
                                        return (
                                            <li key={key} className="flex flex-row gap-5  flex-nowrap">
                                            <CheckCircle />
                                            {feature}
                                        </li>
                                        );

                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                    {
                        underAge ?

                        (<div className=" w-3/5   h-full flex flex-col justify-center items-center" > 
                            <div className=" flex justify-center">
                            <IoWarning size={120} className=" text-red-700" />
                            </div>
                           <p className=" text-2xl font-bold text-center"> Sorry You cannot sign up for Zoom at this time.</p> 
                            </div>):
                        (
                            <div className=" w-3/5   h-full flex justify-center items-center"> 
                            <form onSubmit={handleVerifyAge} className=" flex flex-col gap-8 items-center ">
                                <h1 className=" text-3xl font-semibold">Verify Your Age</h1>
                                <label className=" font-sans text-sm">Please confirm your birth year. This data will not be stored.</label>
                                <input value={birthyear} onChange={handelBirthYear} className=" p-3 border border-black rounded-lg w-4/5" type="number" name="birthyear" id="birthyear" placeholder="Birth Year" />
                                <input disabled={!birthyear} className=" bg-blue text-white p-2  w-4/5 rounded-xl border disabled:bg-slate-100 disabled:text-slate-500" type="submit" name="submit" value={"continue"} id="" />
                            </form>
                        </div>
                        )
                    }
                  
                </div>
           </div>
        </div>
    )
}
export default SignUp