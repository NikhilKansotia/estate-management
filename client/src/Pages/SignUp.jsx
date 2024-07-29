import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 bg-[#e3ceac]"
          id="username"
        />
        <input
          type="text"
          placeholder="Password"
          className="border p-3 bg-[#e3ceac]"
          id="password"
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-3 bg-[#e3ceac]"
          id="email"
        />
        <button className="bg-[#EF5A6F] text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
