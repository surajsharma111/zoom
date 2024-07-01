import Banner2 from "../components/Banner2"
import Logo from "../components/Logo"
import CheckCircle from "../components/CheckCircle"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoWarning } from "react-icons/io5";
import { useCookies } from "react-cookie"
import { FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom"



function SignUp() {
    const features = [
        'Host unlimited 40-minute meetings with up to 100 participants',
        'Keep everyone engage with screen sharing and caption',
        'Be meeting ready with HD-quality video and virtual background',
        'Collaborate using Team chat messages, whtieboards, and video clips',
        'Boost productivity with built-in Calendar, Mail, and Notes',
        'Screen sharing, virtual backgrounds, breakout rooms, and local recording',
        'Notes for creating and sharing editable documents'

    ];
    const [emailaddress, setEmail] = useState('')
    const navigate = useNavigate();

    const handleEmailChange = function(event) {
        const value = event.target.value
        setEmail(value)
    };
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(emailaddress){
            navigate('/otp')

        }


    }
    

    

    return (
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
                    <div className=" h-full left-container  w-2/5 h-full flex flex-col gap-8 bg-gray-50">

                        <div className=" mb-2 w-3/5   ">
                            <Banner2 className=" w-1/2 border border-black " />
                        </div>

                        <div className=" flex gap-3 flex-col  rounded-2xl p-6 mt-0 w-4/5 m-0 m-auto  bg-white shadow shadow-lg">
                            <h2 className=" font-bold text-2xl flex justify-center">Create your free Basic account</h2>
                            <ul className="flex flex-col gap-3 font-Almaden font-sans">
                                {
                                    features.map((feature, key) => {
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



                    <div className=" w-3/5   h-full flex justify-center items-center  ">
                        <form onSubmit={handleSubmit} className=" flex flex-col gap-8 items-center  ">
                            <h1 className=" text-3xl font-semibold">Let's Get Started</h1>
                            <input value={emailaddress} onChange={handleEmailChange} className=" p-3 border border-black rounded-lg w-3/5" type="email" name="email" id="email" placeholder="Email Address" />
                            {
                                
                            }
                            <input disabled ={!emailaddress}  className="  bg-blue text-white p-2  w-3/5 rounded-xl border disabled:bg-slate-100 disabled:text-slate-500" type="submit" name="submit" value={"continue"} id="" />
                            <p className=" w-3/5">By signing in, I agree to the <a href="#" className=" text-blue">zoom privacy</a> <a className=" text-blue" href="">Statement</a> and <a className=" text-blue" href="">Terms of Service.</a></p>
                            <div className=" w-3/5 flex flex-row gap-3">
                                <input type="checkbox" />
                                <p> Stay signed in</p>
                            </div>
                            <div className=" w-3/5 justify-center items-center gap-2  flex flex-row">
                                <div className="w-2/6 border-t-2"></div>
                                <p className="w-2/6 mt-0 mr-0">or sign in with</p>
                                <div className="w-2/6 border-t-2 ml-0"></div>
                            </div>
                            <div className=" flex flex-row w-3/5 justify-around">
                                <div className=" border p-3 flex justify-center items-center rounded-xl">
                                    < FaKey className=" w-6 h-6" />
                                </div>
                                <div className=" border p-3 flex justify-center items-center rounded-xl">
                                    < FcGoogle className=" w-6 h-6" />
                                </div>
                                <div className=" border p-3 flex justify-center items-center rounded-xl">
                                    < FaApple className=" w-6 h-6" />
                                </div>


                                <div className=" border p-3 flex justify-center items-center rounded-xl">
                                    < FaFacebook className=" text-blue w-6 h-6" />
                                </div>

                            </div>
                            <p className=" w-3/5">
                                Zoom is protected by reCAPTCHA and the <a className=" text-blue" href="#">Privacy Policy</a> and <a className=" text-blue" href="#">Terms of Service</a> apply.
                            </p>

                        </form>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
export default SignUp