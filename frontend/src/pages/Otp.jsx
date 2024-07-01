import Banner3 from "../components/Banner3"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";



function Otp() {
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
                        <div className=" w-4/5 m-0 m-auto mb ">
                            <Banner3 />
                        </div>
                    </div>
                    <div className=" w-3/5   h-full flex justify-center items-center  ">
                        <form  className=" flex flex-col gap-8 items-center  ">
                            <h1 className=" text-3xl font-semibold">Check Your Email For A Code</h1>
                            <p>Please enter the verification code sent to your email address srjsharma987@gmail.com</p>
                            <div className=" p-3 rounded-lg w-3/5 pt-0 pb-0   flex justify-evenly">
                                <input type="text" maxLength={1} className=" border w-10 h-14 border-black rounded-lg shadow-lg text-center" />
                                <input type="text" maxLength={1} className=" border w-10 h-14 border-black rounded-lg shadow-lg text-center" />
                                <input type="text" maxLength={1} className=" border w-10 h-14 border-black rounded-lg shadow-lg text-center" />
                                <input type="text" maxLength={1} className=" border w-10 h-14 border-black rounded-lg shadow-lg text-center" />
                                <input type="text" maxLength={1} className=" border w-10 h-14 border-black rounded-lg shadow-lg text-center" />
                                <input type="text" maxLength={1} className=" border w-10 h-14 border-black rounded-lg shadow-lg text-center" />
                              
                                
                            </div>
                            <p className=" flex justify-end w-3/5 gap-2">
                                code expired <a className=" text-blue" href="#">Resend</a>
                            </p>

                            
                            <input   className="  bg-blue text-white p-2  w-3/5 rounded-xl border disabled:bg-slate-100 disabled:text-slate-500" type="submit" name="submit" value="Verify" />
                            <p className=" w-3/5 text-center">Can't find the email? Click <a className=" text-blue" href="#">here</a> to resend.</p>
                            
                         
                            <div className=" flex flex-row w-3/5 justify-around">
                                <div className=" flex gap-2 border p-3  justify-center items-center rounded-xl">
                                    < SiGmail className=" w-6 h-6 text-red-500" />
                                    <p>Open gmail</p>
                                </div>
                                <div className=" border p-3 flex gap-2 justify-center items-center rounded-xl">
                                    < PiMicrosoftOutlookLogo className=" w-6 h-6 text-lightBlue-400" />
                                    <p>Open Outlook</p>
                                </div>
                

                            </div>
                            

                        </form>
                    </div>

                </div>

            </div>


        </div>

    )
}
export default Otp