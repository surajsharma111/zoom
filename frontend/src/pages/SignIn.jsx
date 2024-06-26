import Logo from "../components/Logo"
import Banner from "../components/Banner"
function SignIn() {
    return (
        <div className=" container w-screen h-screen max-w-full">
            <div className=" box-border items-center w-full topbar flex flex-row h-16 justify-between bg-white flex-grow border w-">
                <div className="p-8">
                    <Logo />
                </div>
                <div className=" ml-auto flex flex-row gap-7 mr-10">
                    <p>New to Zoom? <a className=" text-blue-500" href="#">Sign up Free</a></p>
                    <a className=" text-blue-500" href="#">Support</a>
                    <a className=" text-blue-400" href="#">English</a>
                </div>

            </div>
            <div className="body h-full bg-white flex flex-row w-full items-center ">
                    <div className=" h-full left-container border w-2/5 h-full flex justify-center items-center  bg-gray-50">

                        <div className=" w-4/5 m-0 m-auto mb ">
                             <Banner/>
                        </div>
                        
                    </div>
                    <div className=" w-3/5   h-full flex justify-center items-center border "> 
                        <div className=" flex flex-col gap-8 items-center border w-1/2 ">
                            <h1 className=" text-3xl font-semibold">Sign In</h1>
                            <input className=" p-3 border border-black rounded-lg w-4/5" type="email" name="email" id="email" placeholder="Email Address" />
                            <input className=" p-3 border border-black rounded-lg w-4/5" type="password" name="password" id="password" placeholder="password" />
                            <div className=" flex justify-between text-blue-500 w-4/5">
                                <a href="#">forgot password</a>
                                <a href="#">Help?</a>
                            </div>
                            <input className="  text-white bg-blue-500 p-2  w-4/5 rounded-xl border " type="submit" name="submit" value={"Sign In"} id="" />
                            <p className=" w-4/5">By signing in, I agree to the <a href="#" className=" text-blue-500">zoom privacy</a> <a className=" text-blue-500" href="">Statement</a> and <a className=" text-blue-500" href="">Terms of Service.</a></p>
                            <div className=" w-4/5 flex flex-row gap-3">
                                <input type="checkbox" />
                                <p> Stay signed in</p>
                            </div>
                            <div className=" w-4/5 justify-center items-center gap-2  flex flex-row">
                                <div className="w-2/6 border-t-2"></div>
                                <p className="w-2/6 mt-0 mr-0">or sign in with</p>
                                <div className="w-2/6 border-t-2 ml-0"></div>
                            </div>
                            <div>
                                <img src={<svg aria-hidden="true" viewBox="0 0 16 16" className="zm-icons zm-icons--mini"><use href="#key" xlinkHref="#key"></use></svg>} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

        </div>
    )
}
export default SignIn