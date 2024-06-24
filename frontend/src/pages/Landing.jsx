import { Link } from "react-router-dom";

function Landing() {

  
  return (
    <div>
      <div className=" w-full max-w-full flex flex-col justify-center items-center container bg-blue-700 w-full h-screen m-0 m-auto">
        <h1 className=" text-white font-semibold text-6xl">Zoom</h1>
        <h1 className=" text-white font-semibold text-6xl">Workplace</h1>
        <div className=" mt-12 flex items-center justify-center w-full">
          <div className=" flex flex-col bg-white w-80 justify-center items-center rounded-lg">
            <button className="  w-4/5 mt-6 mb-2 p-2 rounded-md text-white font-semibold bg-blue-500">
              {" "}
              Join a meeting
            </button>
            <Link className=" border border-black w-4/5 m-2 p-2 text-center  rounded-md" to="/sign-up">  
              Sign up
            </Link>
            <Link className=" border border-black w-4/5 mb-8 m-2 p-2 text-center  rounded-md" to="/sign-in">  
              Sign in
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
