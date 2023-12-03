"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/Dashboard/signUp/Error_Message";
import CompleteProfile from "@/components/Dashboard/CompleteProfile/CompleteProfile";



import { useState, useEffect, useRef, use } from "react";
import {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
} from "@/utils/localStorage";
import { on } from "events";
import Email from "next-auth/providers/email";


export default function Home() {
  const [showCompleteProfile, setShowCompleteProfile] = useState(false);
  const router = useRouter();
  const [isloading, setIsLoading] = useState(true);
  const [info, setInfo] = useState<any>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    avatar: "/nouser.avif",
  });


  type FormValues = {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    avatar: string;
  };

  const form = useForm<FormValues>({ mode: "all" });
  const { register, handleSubmit, formState } = form;
  const { errors, isDirty } = formState;
  const onSubmit = async (data: FormValues) => {
        setShowCompleteProfile(true);
        setInfo({
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
          email: data.email,
          password: data.password,
          avatar: "/nouser.avif",
        });
  }

  const onError = (errors: any) => console.log(errors);
  const registerOptions = {
    firstName: {
      required: "First name is required",
      maxLength: {
        value: 20,
        message: "should not exceed 20 characters",
      },
      minLength: {
        value: 3,
        message: "at least 3 characters",
      },
      validate: (val: any) =>
        val?.match(/\p{L}/gu)?.join("") === val ||
        "must contain only characters",
    },
    lastName: {
      required: "Last name is required",
      maxLength: {
        value: 20,
        message: "should not exceed 20 characters",
      },
      minLength: {
        value: 3,
        message: "at least 3 characters",
      },
      validate: (val: any) =>
        val?.match(/\p{L}/gu)?.join("") === val ||
        "must contain only characters",
    },
    userName: {
      required: "Name is required",
      validate: async (value: string) => {
        const response = await axios.post(
          `http://${process.env.NEXT_PUBLIC_APP_URL}:3000/api/user/check-username`,
          {
            username: value,
          }
        );
        if (response.data !== false) return "Username already exists";
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address",
      },
      validate: async (value: string) => {
        const response = await axios.post(
          `http://${process.env.NEXT_PUBLIC_APP_URL}:3000/api/user/check-email`,
          {
            email: value,
          }
        );
        if (response.data !== false) return "Email already exists";
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
      validate: (value: string) => {
        return (
          [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
            pattern.test(value)
          ) || "must include lower, upper, number, and special chars"
        );
      },
    },
  };
  return (
    <>
      {showCompleteProfile && <CompleteProfile info={info} setInfo={setInfo}/>}
      <div
        className="h-[100vh] w-[100%] flex justify-around items-center bgImg bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: 'url("backfilter.svg")' }}
      >
        <div className=" w-[100vw]  h-full bg-blue-200 bg-opacity-0 backdrop-blur-[7px] flex flex-row items-center justify-center md:w-11/12 md:max-h-[735px] md:rounded-[61px] xl:max-w-[1404px] xl:mx-auto">
          <div className="w-[100%] flex flex-col items-center justify-center xl:w-[30%] py-[50px]">
            <div className="flex flex-col pt-[20px] gap-[16px] sm:flex-row w-full items-center justify-center">
              <button className="flex justify-evenly items-center w-[170px] h-[52px] border-[0.1px] rounded-[11px] border-white cursor-pointer">
                <img
                  src="goog.svg"
                  alt=""
                  className="w-[20.153px] h-[20.56px]"
                />
                <p className="text-white text-[10px] font-[400] cursor-pointer">
                  Log in with google
                </p>
              </button>
              <button className="flex justify-evenly items-center w-[170px] h-[52px] border-[0.1px] rounded-[11px] border-white cursor-pointer">
                <img
                  src="423918.logowik 1.png"
                  alt=""
                  className="w-[25px] h-[21px]"
                />
                <p className="text-white text-[10px] font-[400] cursor-pointer">
                  Log in with intra
                </p>
              </button>
            </div>
            <div className="flex w-full pt-[20px] justify-center  gap-[10px] items-center">
              <div className="w-[61px] h-[1px] bg-white" />
              <p className="text-white text-[15px] font-[400]">OR</p>
              <div className="w-[61px] h-[1px] bg-white" />
            </div>
            <div className=" w-full">
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit, onError)}
                action=""
                className="flex flex-col items-center gap-[24px] pt-[16px] "
              >
                <div className="flex flex-col gap-[16px]  w-[70%] md:w-[50%] xl:w-full ">
                  <div className="flex flex-col gap-[10px] justify-between sm:flex-row  w-full ">
                    <div className="pb-[20px]">
                      <input
                        {...register("firstName", registerOptions.firstName)}
                        type="firstName"
                        className={`text-white h-[65px] rounded-[11px] border-[0.1px]   p-[27px] w-full  bg-white bg-opacity-10 backdrop-blur-lg  ${
                          errors.firstName
                            ? "border-[1px] border-red-400 placeholder:text-red-400"
                            : "placeholder:text-white"
                        }`}
                        placeholder="First name"
                      />
                      <ErrorMessage message={errors.firstName?.message || ""} />
                    </div>
                    <div className="pb-[20px]">
                      <input
                        {...register("lastName", registerOptions.lastName)}
                        type="lastName"
                        className={`text-white h-[65px] rounded-[11px] border-[0.1px]   p-[27px] w-full   bg-white bg-opacity-10 backdrop-blur-lg  ${
                          errors.lastName
                            ? "border-[1px] border-red-400 placeholder:text-red-400"
                            : "placeholder:text-white"
                        }`}
                        placeholder="Last name"
                      />
                      <ErrorMessage message={errors.lastName?.message || ""} />
                    </div>
                  </div>
                  <div className="pb-[20px]">
                    <input
                      {...register("userName", registerOptions.userName)}
                      type="userName"
                      className={`text-white h-[65px] rounded-[11px] border-[0.1px]   p-[27px] w-full  bg-white bg-opacity-10 backdrop-blur-lg  ${
                        errors.userName
                          ? "border-[1px] border-red-400 placeholder:text-red-400"
                          : "placeholder:text-white"
                      }`}
                      placeholder="Username"
                    />
                    <ErrorMessage message={errors.userName?.message || ""} />
                  </div>
                  <div className="pb-[20px]">
                    <input
                      {...register("email", registerOptions.email)}
                      type="email"
                      className={`text-white h-[65px] rounded-[11px] border-[0.1px]   p-[27px] w-full  bg-white bg-opacity-10 backdrop-blur-lg  ${
                        errors.email
                          ? "border-[1px] border-red-400 placeholder:text-red-400"
                          : "placeholder:text-white"
                      }`}
                      placeholder="Email"
                    />
                    <ErrorMessage message={errors.email?.message || ""} />
                  </div>
                  <div className="pb-[20px]">
                    <input
                      {...register("password", registerOptions.password)}
                      type="password"
                      className={`text-white h-[65px] rounded-[11px] border-[0.1px]   p-[27px] w-full  bg-white bg-opacity-10 backdrop-blur-lg  ${
                        errors.password
                          ? "border-[1px] border-red-400 placeholder:text-red-400"
                          : "placeholder:text-white"
                      }`}
                      placeholder="Password"
                    />
                    <ErrorMessage message={errors.password?.message || ""} />
                  </div>
                </div>

                <button
                  disabled={!isDirty}
                  className="w-[217px] h-[53px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[11px] text-[#FFF] text-[20px] font-[500] md:h-[68.345px] l-inp"
                >
                  Sign up
                </button>
              </form>
            </div>
            <div className="flex flex-row items-center gap-[2px] pt-[24px]">
              <p className="text-white text-[14px] font-[300] sm:text-[18.963px]">
                Already have an account?
                <Link
                  href="/login"
                  className="text-[#eee] text-[14px] font-[400] sm:text-[18.963px] pl-[2px]"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div className="xl:block hidden relative">
            <img
              src="Frame 101-PhotoRoom.png"
              alt=""
              className=" relative mt-[-112px] ml-[60px]"
            />
            <img
              src="heroball.png"
              alt=""
              className="mt-[-200px] ml-[60px]  top-[440px] left-[45px] animateball absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
}
