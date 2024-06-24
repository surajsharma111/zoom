import Logo from "../components/Logo"
function SignIn() {
    return (
            <div className=" container w-full h-full max-w-full">
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
            </div>
    )
}
export default SignIn