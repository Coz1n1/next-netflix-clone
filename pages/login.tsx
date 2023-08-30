import React, { useState, ChangeEvent, useCallback } from "react";
import { Input } from "@/components/Input";
import Image from "next/image";
import axios from "axios";

const Login = () => {
  const [navi, setNavi] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClick = () => {
    setNavi(!navi);
  };

  const login = useCallback(async () => {}, []);

  const registration = useCallback(async () => {
    console.log(email + name + password);

    try {
      await axios.post("/api/registration", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }, [name, email, password]);

  return (
    <div className="relative h-screen w-screen bg-[url('/images/netflix_hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="px-24 py-4">
        <Image
          src="/images/netflix_header.png"
          alt="Page logo"
          width={300}
          height={100}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-4/5 lg:w-3/12 bg-black/80 rounded flex items-center justify-center flex-col px-8 md:px-16 pt-16 pb-36">
          <span className="text-white text-4xl font-semibold text-left w-full">
            {navi ? "Register" : "Sign In"}
          </span>
          {navi === true && (
            <Input
              name="Username"
              id="username"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
            />
          )}
          <Input
            name="Email"
            id="email"
            type="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
          />
          <Input
            name="Password"
            id="password"
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
          />
          <button
            onClick={registration}
            className="mt-6 bg-red-600 w-full py-4 rounded-md text-white font-bold"
          >
            {navi ? "Register" : "Sign In"}
          </button>
          <div className="w-full flex justify-between mt-2">
            <span className="text-zinc-400 text-sm">
              <input type="checkbox"></input> Remember me
            </span>
            <span className="text-zinc-400 text-sm cursor-pointer">
              Need help?
            </span>
          </div>
          <span className="mt-12 text-left w-full text-zinc-400">
            {navi ? "Already have an account?" : "New to Netflix?"}{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleClick}
            >
              {navi ? "Sign In." : "Sign up now."}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
