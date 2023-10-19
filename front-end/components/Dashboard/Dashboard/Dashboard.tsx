'use client';
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { contextdata } from "@/app/contextApi"

import {removeLocalStorageItem} from "@/utils/localStorage"

type Props = {
    path : string
}
export default function Nav( {path} : Props) {
    const router = useRouter();
    const {socket, dashboardRef,mediaDashbord,setMediaDashbord}: any = useContext(contextdata);
    return (
        <div ref={dashboardRef} className='bg-[#FFF]  header w-[150px] h-full   shadooow fixed top-0 left-0 z-[100]  overflow-y-scroll no-scrollbar lsm:max-lg:w-[100px] lsm:max-sm:left-[-150px] transition-all duration-300'>
            <div className="flex z-[99] flex-col items-center gap-[30px] w-full min-h-[580px] h-full justify-between relative py-[45px] bg-[#FFF]">
                    <Link href='/' className=" w-full flex justify-center items-center self-start">
                        <Image
                            src="/logo.png"
                            alt=""
                            width={150}
                            height={150}
                            className="object-contain w-[60px]"
                        />
                    </Link>
                    <div className="flex flex-col items-center justify-center  gap-[50px]  w-full">
                        <Link href='/'>
                            <div  id="Home" className={path === "Home" ? "dashboardIcons active" : "dashboardIcons"}>
                                <svg  id="Home"
                                    width="34" height="34" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Home" d="M12.8782 34.7307V29.0739C12.8782 27.6299 14.0524 26.4593 15.5007 26.4593H20.7953C21.4908 26.4593 22.1579 26.7347 22.6497 27.2251C23.1415 27.7154 23.4178 28.3805 23.4178 29.0739V34.7307C23.4134 35.331 23.6495 35.9083 24.0738 36.3343C24.498 36.7604 25.0753 37 25.6775 37H29.2896C30.9766 37.0043 32.5961 36.3393 33.7905 35.1515C34.985 33.9637 35.6562 32.3509 35.6562 30.669V14.5537C35.6562 13.1951 35.0522 11.9063 34.0069 11.0346L21.7189 1.25036C19.5814 -0.465161 16.5188 -0.409771 14.4451 1.38191L2.43759 11.0346C1.34288 11.8806 0.688583 13.1732 0.65625 14.5537V30.6525C0.65625 34.1581 3.50669 37 7.02289 37H10.5526C11.8032 37 12.8197 35.994 12.8287 34.7471L12.8782 34.7307Z" fill="#00539D"/>
                                </svg>
                            </div>
                        </Link>
                        <Link href='/Profile' >
                            <div  id="User"  className={path === "Profile" ? "dashboardIcons active" : "dashboardIcons"}>
                                <svg  id="User"  width="34" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  id="User"  d="M13.2048 21.7449C20.3662 21.7449 26.4096 22.9086 26.4096 27.3983C26.4096 31.8896 20.3265 33.012 13.2048 33.012C6.04512 33.012 0 31.8484 0 27.3587C0 22.8673 6.0831 21.7449 13.2048 21.7449ZM13.2048 0C18.0561 0 21.9431 3.88556 21.9431 8.73342C21.9431 13.5813 18.0561 17.4685 13.2048 17.4685C8.35518 17.4685 4.46655 13.5813 4.46655 8.73342C4.46655 3.88556 8.35518 0 13.2048 0Z" fill="#00539D" />
                                </svg>
                            </div>
                        </Link>
                        <Link href='/Chat' >
                            <div  id="Chat"  className={path === "Chat" ? "dashboardIcons active" : "dashboardIcons"}>
                                <svg  id="Chat" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Chat" d="M16.539 0C25.9145 0 33.012 7.68683 33.012 16.4812C33.012 26.6807 24.693 33.012 16.506 33.012C13.799 33.012 10.7949 32.2847 8.38506 30.863C7.54325 30.3506 6.83349 29.9704 5.92566 30.2679L2.59145 31.2598C1.74964 31.5243 0.990361 30.863 1.23795 29.9704L2.34386 26.2675C2.52542 25.755 2.49241 25.2095 2.22831 24.7797C0.808795 22.1678 0 19.308 0 16.5308C0 7.83561 6.94904 0 16.539 0ZM24.0823 14.4314C22.9104 14.4314 21.9695 15.3737 21.9695 16.5473C21.9695 17.7045 22.9104 18.6633 24.0823 18.6633C25.2542 18.6633 26.1951 17.7045 26.1951 16.5473C26.1951 15.3737 25.2542 14.4314 24.0823 14.4314ZM16.473 14.4314C15.3176 14.4149 14.3602 15.3737 14.3602 16.5308C14.3602 17.7045 15.3011 18.6468 16.473 18.6633C17.6449 18.6633 18.5858 17.7045 18.5858 16.5473C18.5858 15.3737 17.6449 14.4314 16.473 14.4314ZM8.86373 14.4314C7.69181 14.4314 6.75096 15.3737 6.75096 16.5473C6.75096 17.7045 7.70831 18.6633 8.86373 18.6633C10.0357 18.6468 10.9765 17.7045 10.9765 16.5473C10.9765 15.3737 10.0357 14.4314 8.86373 14.4314Z" fill="#00539D" />
                                </svg>
                            </div>
                        </Link>
                        <Link href='/Game' >
                            <div  id="Game" className={path === "Game" ? "dashboardIcons active" : "dashboardIcons"}>
                                <svg id="Game"  width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Game" d="M10.4965 0C11.1768 0 11.7113 0.54066 11.7113 1.19263C11.7113 1.66968 12.1163 2.05133 12.6022 2.05133H14.2059C16.6518 2.06723 18.6442 4.02314 18.6604 6.40841V6.71054C20.1992 6.71054 21.7381 6.74234 23.2931 6.75825C28.9139 6.75825 33.012 10.7655 33.012 16.2993V23.4074C33.012 28.9412 28.9139 32.9484 23.2931 32.9484C21.0415 32.9961 18.79 33.012 16.5222 33.012C14.2545 33.012 11.9705 32.9961 9.71895 32.9484C4.09816 32.9484 0 28.9412 0 23.4074V16.2993C0 10.7655 4.09816 6.75825 9.73515 6.75825C11.8571 6.72644 14.0277 6.69464 16.2307 6.69464V6.42431C16.2307 5.32709 15.3074 4.43659 14.2059 4.43659H12.6022C10.7718 4.43659 9.2816 2.97363 9.2816 1.19263C9.2816 0.54066 9.83234 0 10.4965 0ZM11.6951 15.7904C11.0148 15.7904 10.4803 16.3311 10.4803 16.9831V18.6528H8.76326C8.09913 18.6528 7.54839 19.1934 7.54839 19.8454C7.54839 20.5133 8.09913 21.038 8.76326 21.038H10.4803V22.7236C10.4803 23.3756 11.0148 23.9162 11.6951 23.9162C12.3593 23.9162 12.91 23.3756 12.91 22.7236V21.038H14.6108C15.275 21.038 15.8257 20.5133 15.8257 19.8454C15.8257 19.1934 15.275 18.6528 14.6108 18.6528H12.91V16.9831C12.91 16.3311 12.3593 15.7904 11.6951 15.7904ZM24.427 21.4356H24.265C23.583 21.4356 23.0501 21.9762 23.0501 22.6282C23.0501 23.2961 23.583 23.8208 24.265 23.8208H24.427C25.0911 23.8208 25.6418 23.2961 25.6418 22.6282C25.6418 21.9762 25.0911 21.4356 24.427 21.4356ZM21.6571 15.9654H21.4951C20.8148 15.9654 20.2802 16.506 20.2802 17.158C20.2802 17.8259 20.8148 18.3506 21.4951 18.3506H21.6571C22.3212 18.3506 22.8719 17.8259 22.8719 17.158C22.8719 16.506 22.3212 15.9654 21.6571 15.9654Z" fill="#00539D" />
                                </svg> 
                            </div>
                        </Link>
                        <div className="w-[48px] h-[2px] bg-[#8FC0EC] my-5 rounded-full"></div>
                        <Link href='/Setting'  >
                            <div id="setting" className={path === "setting" ? "dashboardIcons active" : "dashboardIcons"}>
                                <svg id="setting" width="34" height="34" viewBox="0 0 34 34" fill="#00539D" xmlns="http://www.w3.org/2000/svg">
                                    <path id="setting" d="M17.7511 0C19.065 0 20.2546 0.69321 20.9115 1.71652C21.2311 2.21167 21.4442 2.82235 21.3909 3.46605C21.3554 3.9612 21.5152 4.45635 21.7993 4.91849C22.7048 6.32141 24.7111 6.84958 26.2736 6.05733C28.0313 5.10005 30.2507 5.67772 31.2628 7.31171L32.4524 9.25931C33.4822 10.8933 32.914 12.9894 31.1385 13.9302C29.6293 14.772 29.0966 16.637 30.0021 18.0565C30.2862 18.5021 30.6058 18.8817 31.103 19.1128C31.7244 19.4264 32.2038 19.9215 32.5411 20.4167C33.1981 21.44 33.1448 22.6944 32.5056 23.8002L31.2628 25.7808C30.6058 26.8371 29.3807 27.4973 28.1201 27.4973C27.4987 27.4973 26.8062 27.3323 26.2381 27.0022C25.7764 26.7216 25.2438 26.6226 24.6756 26.6226C22.9178 26.6226 21.4442 27.9925 21.3909 29.6265C21.3909 31.5245 19.7574 33.01 17.7156 33.01H15.3009C13.2413 33.01 11.6078 31.5245 11.6078 29.6265C11.5723 27.9925 10.0986 26.6226 8.34085 26.6226C7.75493 26.6226 7.22227 26.7216 6.77839 27.0022C6.21023 27.3323 5.50002 27.4973 4.89635 27.4973C3.61797 27.4973 2.39287 26.8371 1.73593 25.7808L0.510821 23.8002C-0.14612 22.7274 -0.181631 21.44 0.47531 20.4167C0.759393 19.9215 1.29205 19.4264 1.89572 19.1128C2.39287 18.8817 2.71246 18.5021 3.0143 18.0565C3.90206 16.637 3.3694 14.772 1.86021 13.9302C0.102452 12.9894 -0.465713 10.8933 0.546331 9.25931L1.73593 7.31171C2.76573 5.67772 4.96737 5.10005 6.74288 6.05733C8.28758 6.84958 10.2939 6.32141 11.1994 4.91849C11.4835 4.45635 11.6433 3.9612 11.6078 3.46605C11.5723 2.82235 11.7676 2.21167 12.1049 1.71652C12.7619 0.69321 13.9515 0.03301 15.2476 0H17.7511ZM16.526 11.8506C13.7384 11.8506 11.4835 13.9302 11.4835 16.5215C11.4835 19.1128 13.7384 21.1759 16.526 21.1759C19.3135 21.1759 21.5152 19.1128 21.5152 16.5215C21.5152 13.9302 19.3135 11.8506 16.526 11.8506Z" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                <div  className=" w-full flex flex-col items-center justify-center pl-[10px] cursor-pointer self-end"
                    onClick={
                        () => {
                            removeLocalStorageItem("Token");
                            socket?.disconnect();
                            router.push('/login');
                        }
                    }
                >
                    <svg width="40" height="38" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9855 0C23.9506 0 28 3.98 28 8.88V18.46H15.7907C14.9157 18.46 14.2238 19.14 14.2238 20C14.2238 20.84 14.9157 21.54 15.7907 21.54H28V31.1C28 36 23.9506 40 18.9448 40H9.03488C4.04942 40 0 36.02 0 31.12V8.9C0 3.98 4.06977 0 9.05523 0H18.9855ZM33.0804 13.1004C33.6804 12.4804 34.6604 12.4804 35.2604 13.0804L41.1004 18.9004C41.4004 19.2004 41.5604 19.5804 41.5604 20.0004C41.5604 20.4004 41.4004 20.8004 41.1004 21.0804L35.2604 26.9004C34.9604 27.2004 34.5604 27.3604 34.1804 27.3604C33.7804 27.3604 33.3804 27.2004 33.0804 26.9004C32.4804 26.3004 32.4804 25.3204 33.0804 24.7204L36.2804 21.5404L28 21.54V18.46L36.2804 18.4604L33.0804 15.2804C32.4804 14.6804 32.4804 13.7004 33.0804 13.1004Z" fill="#8FC0EC"/>
                    </svg>
                </div>
            </div>
            {
                mediaDashbord &&
                <div className="min-w-full min-h-full z-[95] flex flex-col items-center justify-center pl-[10px] cursor-pointer self-end fixed top-0 left-0 bg-black bg-opacity-5 backdrop-blur-[1.5px]" onClick={() => {setMediaDashbord(false) ; dashboardRef.current?.classList.remove("!left-0")}}/>
            }
        </div>
    )
}