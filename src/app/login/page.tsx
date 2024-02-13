"use client";
import { useState } from "react";
export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function SignupHandler(): void {}
  return (
    <div className=" h-screen w-full flex items-center justify-center">
      <div className="w-1/3 flex flex-col border-white p-3 rounded-md border-2 border-solid">
        <h1 className="text-4xl font-bold mb-2 text-center">Login</h1>
        <label htmlFor="email" className="text-xl font-sans mb-1  ">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="p-1 text-sm mb-2 font-bold text-black"
        />
        <label htmlFor="password" className="text-xl font-sans mb-1 ">
          Password
        </label>
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="p-1 text-sm  mb-2 font-bold text-black"
        />
        <button
          onClick={SignupHandler}
          className="bg-blue-600 p-2 rounded-md font-bold hover:bg-blue-700 duration-300 ease-in-out mb-2 mt-2">
          Login
        </button>
        <a
          href="/signup"
          className="text-center m-2 underline active:text-blue-300">
          Signup here
        </a>
      </div>
    </div>
  );
}
