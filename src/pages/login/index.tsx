import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../../components/Layout";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { UseAuth } from "../../context/UseAuth";

const Login: NextPage = () => {
  const [authState, setAuthState] = useState<"REGISTER" | "SIGNIN">("SIGNIN");
  const { login, register } = UseAuth();
  const SignInForm = () => {
    return (
      <form className="w-full h-full bg-white rounded-lg p-5 flex flex-col justify-evenly">
        <div className="text-2xl font-semibold text-center">Welcome back</div>
        <div className="flex flex-col gap-10">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-lg border-2 border-gray-400 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-lg border-2 border-gray-400 w-full"
          />
        </div>
        <div className="flex flex-col gap-5 text-center">
          <button className="p-4 bg-purple-800 text-white w-full rounded-lg">
            Sign In
          </button>
          <div>
            <span
              className="font-semibold text-purple-500 cursor-pointer"
              onClick={() => setAuthState("REGISTER")}
            >
              Click here to register for an account
            </span>
          </div>
        </div>
      </form>
    );
  };
  const RegisterForm = () => {
    return (
      <form className="w-full h-full bg-white rounded-lg p-5 flex flex-col justify-evenly gap-5">
        <div className="text-2xl font-semibold text-center">
          Create an account
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <button
              type="button"
              className="p-4 w-full rounded-lg bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center  "
            >
              <div className="flex gap-4 items-center">
                <FcGoogle size={30} /> Register with Google
              </div>
            </button>
            <button
              type="button"
              className="p-4 w-full rounded-lg bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center"
            >
              <div className="flex gap-4 items-center">
                <AiFillFacebook size={30} /> Register with Facebook
              </div>
            </button>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-10">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-lg border-2 border-gray-400 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-lg border-2 border-gray-400 w-full"
          />
          <input
            type="password"
            placeholder="Verify Password"
            className="p-2 rounded-lg border-2 border-gray-400 w-full"
          />
          <button className="p-4 bg-purple-800 text-white w-full rounded-lg">
            Register
          </button>
        </div>
        <hr />
        <div className="flex flex-col gap-5 text-center">
          <div>
            <span
              className="font-semibold text-purple-500 cursor-pointer"
              onClick={() => setAuthState("SIGNIN")}
            >
              Click here to Sign in instead
            </span>
          </div>
        </div>
      </form>
    );
  };
  return (
    <Layout>
      <div className="bg-gray-800 h-screen flex items-center justify-center">
        <div className="h-3/4 w-1/4 p-5">
          {authState === "SIGNIN" ? <SignInForm /> : <RegisterForm />}
        </div>
      </div>
    </Layout>
  );
};

export default Login;
