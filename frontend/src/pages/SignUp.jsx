
function SignUp(){
    return(
        <>
           <div className="container">
                <div className=" w-full border border-black topbar flex flex-row">
                    <div>
                        <h1>Zoom</h1>
                    </div>
                    <div className=" ml-auto flex flex-row gap-5 border border-black">
                        <p>Already have an account? <a href="#">Sign In</a></p>
                        <a href="#">Support</a>
                        <a href="#">English</a>
                    </div>

                </div>

                <div className="body">
                    <div className="left-container">
                        <img src="" alt="" />
                        <div>
                            <h2>Create your free Basic account</h2>
                            <ul>
                                <li><img src="" alt="" />
                                <p>Host unlimited 40-minute meetings with up to 100 participants</p></li>

                                <li><img src="" alt="" />
                                <p>Keep everyone engage with screen sharing and caption </p></li>

                                <li><img src="" alt="" />
                                <p>Be meeting ready with HD-quality video and virtual background</p></li>

                                <li><img src="" alt="" />
                                <p>Collaborate using Team chat messages, whtieboards, and video clips</p></li>

                                <li><img src="" alt="" />
                                <p>Boost productivity with built-in Calendar, Mail, and Notes</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-container"> 
                        <div>
                            <h1>Verify Your Age</h1>
                            <p>Please confirm your birth year. This data will not be stored.</p>
                            <input type="number" name="birthyear" id="birthyear" />
                            <input type="submit" name="submit" value={"continue"} id="" />
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default SignUp