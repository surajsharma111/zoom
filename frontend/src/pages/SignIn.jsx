import Logo from "../components/Logo"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




function SignIn() {
    return (
        <div className=" container w-screen h-screen max-w-full">
            <div className=" box-border items-center w-full topbar flex flex-row h-16 justify-between bg-white flex-grow border w-">
                <div className="p-8">
                    <Logo />
                </div>
                <div className=" ml-auto flex flex-row gap-7 mr-10">
                    <p>New to Zoom?
                         <Link className=" text-blue" to="/sign-up">Sign up Free</Link>
                         </p>
                    <a className=" text-blue" href="#">Support</a>
                    <a className=" text-blue" href="#">English</a>
                </div>

            </div>
            <div className="body h-full bg-white flex flex-row w-full items-center ">
                    <div className=" h-full left-container  w-2/5 h-full flex justify-center items-center  bg-gray-50">

                        <div className=" w-4/5 m-0 m-auto mb ">
                             <Banner/>
                        </div>
                        
                    </div>
                    <div className=" w-3/5   h-full flex justify-center items-center  "> 
                        <form className=" flex flex-col gap-8 items-center  ">
                            <h1 className=" text-3xl font-semibold">Sign In</h1>
                            <input className=" p-3 border border-black rounded-lg w-3/5" type="email" name="email" id="email" placeholder="Email Address" />
                            <input className=" p-3 border border-black rounded-lg w-3/5" type="password" name="password" id="password" placeholder="password" />
                            <div className=" flex justify-between text-blue w-3/5">
                                <a href="#">forgot password</a>
                                <a href="#">Help?</a>
                            </div>
                            <input className="  text-white bg-blue p-2  w-3/5 rounded-xl border " type="submit" name="submit" value={"Sign In"} id="" />
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
    )
}
export default SignIn