import Banner from "../components/Banner"
import Logo from "../components/Logo"
import CheckCircle from "../components/CheckCircle"
function SignUp(){
    return(
        <div className="flex justify-center max-w-full w-full h-screen ">
           <div className="container max-w-full w-full bg-gray-50">
           <div className=" box-border items-center w-full topbar flex flex-row h-16 justify-between bg-white flex-grow border w-">
                    <div className="p-8">
                        <Logo />
                    </div>
                    <div className=" ml-auto flex flex-row gap-7 mr-10">
                        <p>Already have an account? <a className=" text-blue-500" href="#">Sign In</a></p>
                        <a className=" text-blue-500" href="#">Support</a>
                        <a className=" text-blue-400" href="#">English</a>
                    </div>

                </div>

                <div className="body h-full bg-white flex flex-row w-full items-center ">
                    <div className=" h-full left-container border w-2/5 h-full flex flex-col  bg-gray-50">

                        <div className=" w-4/5 m-0 m-auto mb-0">
                             <Banner/>
                        </div>
                        
                        <div className=" flex gap-3 flex-col  rounded-2xl p-6 mt-0 w-4/5 m-0 m-auto  bg-white shadow-gray-300 ">
                            <h2 className=" font-bold text-2xl flex justify-center">Create your free Basic account</h2>
                            <ul className="flex flex-col gap-3 font-Almaden font-sans">
                                <li className="flex flex-row gap-5  flex-nowrap">
                                <CheckCircle />
                                <p>Host unlimited 40-minute meetings with up to 100 participants</p></li>

                                <li className="flex flex-row gap-5  flex-nowrap">
                                <CheckCircle />
                                <p>Keep everyone engage with screen sharing and caption </p></li>

                                <li className="flex flex-row gap-5  flex-nowrap">
                                <CheckCircle />
                                <p>Be meeting ready with HD-quality video and virtual background</p></li>

                                <li className="flex flex-row gap-5  flex-nowrap">
                                <CheckCircle />
                                <p>Collaborate using Team chat messages, whtieboards, and video clips</p></li>

                                <li className="flex flex-row gap-5  flex-nowrap">
                                <CheckCircle />
                                <p>Boost productivity with built-in Calendar, Mail, and Notes</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className=" w-3/5   h-full flex justify-center items-center"> 
                        <div className=" flex flex-col gap-8 items-center ">
                            <h1 className=" text-3xl font-semibold">Verify Your Age</h1>
                            <p className=" font-sans text-sm">Please confirm your birth year. This data will not be stored.</p>
                            <input className=" p-3 border border-black rounded-lg w-4/5" type="number" name="birthyear" id="birthyear" placeholder="Birth Year" />
                            <input className=" text-gray-600 p-2  w-4/5  bg-gray-200 rounded-xl border " type="submit" name="submit" value={"continue"} id="" />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default SignUp