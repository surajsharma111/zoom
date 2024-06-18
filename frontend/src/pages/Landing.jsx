function Landing(){
return(
    <>
        <div className=" flex flex-col justify-center items-center container bg-blue-700 w-screen h-screen m-0 m-auto">
            <h1 className=" text-white font-semibold text-6xl">Zoom</h1>
            <h1 className=" text-white font-semibold text-6xl">Workplace</h1>
            <div className=" mt-12 flex items-center justify-center w-full">

                <div className=" flex flex-col bg-white w-1/3 justify-center items-center rounded-lg">
                    <button className="  w-4/5 mt-6 mb-2 p-2 rounded-md text-white font-semibold bg-blue-500"> Join a meeting</button>
                    <button className=" border border-black w-4/5 m-2 p-2  rounded-md"> Sign up</button>
                    <button className=" border border-black w-4/5 mb-8 mt-2  p-2 rounded-md "> Sign in</button>
                </div>
            </div>
        </div>
     </>
)
}
export default Landing