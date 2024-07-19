import Banner3 from "../components/Banner3"
import Logo from "../components/Logo"
import { Link, useSearchParams } from "react-router-dom"
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { useState } from "react";
import checkOtp from "../action/verifyOtp";
import { signupValidationSchema } from "../validationSchema/signup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";


function Otp() {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const [otpError, setOtpError] = useState('');



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signupValidationSchema),
    });

    async function handleCode(data) {
        setOtpError('');
        const response = await checkOtp({
            ...data,
            email,
        });
        console.log()
        const body = await response.json();
        if (response.status === 400) {

            setOtpError(body);
        }
        else if (response.status === 200) {
            navigate(`/activate?email=${email}&id=${body.id}`)
        }
    }

    console.log(errors)
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


                        {
                            otpError && (<p className='text-sm text-red-600 my-4'>{otpError}</p>)
                        }
                        <form onSubmit={handleSubmit(handleCode)}
                            className=" flex flex-col gap-8 items-center  ">
                            <h1 className=" text-3xl font-semibold">Check Your Email For A Code</h1>
                            <p>{
                                `Please enter the verification code sent to your email address ${email} `
                            }</p>

                            <input {...register('code')} type="number" id="number" className=" p-4 border" />
                            {errors.code?.meaasge && <span className=" text-sm text-red-600">{errors.code.message}</span>}

                            <p className=" flex justify-end w-3/5 gap-2">
                                code expired <a className=" text-blue" href="#">Resend</a>
                            </p>

                            <input className="  bg-blue text-white p-2  w-3/5 rounded-xl" type="submit" />
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
export default Otp;
