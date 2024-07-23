"use client"
import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(()=>{
    document.title = `Login | Get Me A Chai`
    if(session) {
      router.push("/profile");
    }
  },[router, session])

  return (
    <div className="text-white py-14 container mx-auto ">
      <h1 className="font-bold text-2xl md:text-3xl text-center">
        Login/Signup To Get Started
      </h1>

      <div className="flex flex-col gap-2 md:min-h-screen items-center p-10">
        <button className="flex items-center w-64 bg-gray-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={() => {signIn("google")}}
        >
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-0.5 0 48 48"
            version="1.1"
          >
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    id="Fill-1"
                    fill="#FBBC05"
                  >
                    {" "}
                  </path>
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    id="Fill-2"
                    fill="#EB4335"
                  >
                    {" "}
                  </path>
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    id="Fill-3"
                    fill="#34A853"
                  >
                    {" "}
                  </path>
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    id="Fill-4"
                    fill="#4285F4"
                  >
                    {" "}
                  </path>
                </g>
              </g>
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>

        <button className="flex items-center w-64 bg-gray-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={() => {signIn("github")}}
        >
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.868 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.983 1.029-2.681-.103-.253-.447-1.273.098-2.65 0 0 .84-.269 2.75 1.026A9.554 9.554 0 0112 6.812c.852.004 1.709.115 2.51.337 1.91-1.295 2.75-1.026 2.75-1.026.546 1.377.202 2.397.1 2.65.64.698 1.029 1.59 1.029 2.681 0 3.841-2.337 4.685-4.565 4.933.36.31.68.923.68 1.86 0 1.342-.012 2.425-.012 2.754 0 .268.18.578.688.479C19.134 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
            />
          </svg>
          <span>Continue with GitHub</span>
        </button>

        <button className="flex items-center w-64 bg-gray-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-300/80" disabled>
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 -2 44 44"
            version="1.1"
          >
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Color-" transform="translate(-402.000000, -86.000000)">
                <g id="Facebook" transform="translate(402.000000, 86.000000)">
                  <path
                    d="M22,0 C9.849,0 0,9.849 0,22 C0,33.151 9.849,43 22,43 C34.151,43 44,33.151 44,22 C44,9.849 34.151,0 22,0 Z M26.473,22 L23.657,22 L23.657,35.819 L18.755,35.819 L18.755,22 L16.604,22 L16.604,17.335 L18.755,17.335 L18.755,15.188 C18.755,12.376 20.098,10.844 22.71,10.844 C24.112,10.844 25.197,10.936 25.515,10.974 L25.515,14.551 L23.563,14.551 C22.151,14.551 21.992,15.146 21.992,16.066 L21.992,17.335 L25.609,17.335 L25.15,22 L21.992,22 L21.992,35.819 L26.473,35.819 L26.473,22 Z"
                    id="Fill-5"
                    fill="#1877F2"
                  >
                    {" "}
                  </path>
                  <path
                    d="M26.473,22 L23.657,22 L23.657,35.819 L18.755,35.819 L18.755,22 L16.604,22 L16.604,17.335 L18.755,17.335 L18.755,15.188 C18.755,12.376 20.098,10.844 22.71,10.844 C24.112,10.844 25.197,10.936 25.515,10.974 L25.515,14.551 L23.563,14.551 C22.151,14.551 21.992,15.146 21.992,16.066 L21.992,17.335 L25.609,17.335 L25.15,22 L21.992,22 L21.992,35.819 L26.473,35.819 L26.473,22 Z"
                    id="Fill-6"
                    fill="#FFFFFF"
                  >
                    {" "}
                  </path>
                </g>
              </g>
            </g>
          </svg>
          <span>Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
