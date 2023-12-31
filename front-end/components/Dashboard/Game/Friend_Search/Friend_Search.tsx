import Link from "next/link";
import Friend from "../../Home/Friend/Friend";
import { useContext, useEffect, useState } from 'react';
import axiosInstance from "@/utils/axiosInstance";
import { contextdata } from '@/app/contextApi';
import FriendCard from "./Friend_Card";
import Lottie from "lottie-react"
import animationData2 from   "../../../../public/ghost2.json"


const FriendSearch = ({setShow}: any) => {
  const {profiles, user, socket}:any = useContext(contextdata);
  const [Friends, setFriends] = useState<any>([]);
  useEffect(() => {
    try{
        const getFriends = async () => {
            try{
                const res = await axiosInstance.get(`http://${process.env.NEXT_PUBLIC_APP_URL}:3000/api/friendship/show`);
                setFriends(res.data);
            }
            catch(err){
            }
        }
        getFriends();
    }
    catch(error)
    {
    }
}, [profiles])

  return (
      <>

  <div className="w-full h-full backdrop-blur-[20px] backSh flex gap-[30px] flex-col items-center justify-center">
    <div className="flex flex-col gap-[16px] w-7/12 ">
      <div className="w-full h-[600px] rounded-[34px] backdrop-blur-[20px] inpShad flex items-center flex-col  ">
        <div className=" pt-[20px] w-10/12">
          <p className="text-[#fff] text-[20px] font-[400] font-['Fredoka']">
            Friends
          </p>
        </div>
        <div className="pt-[20px] w-10/12 flex flex-col gap-[20px] overflow-y-scroll scrollbar-hide">
        {
            Friends && Friends.length > 0 ? (
                Friends.map((friend: any) => (
                    <FriendCard id={friend?.userId} avatar={friend?.avatar} name={`${friend?.firstName} ${friend?.lastName}`} online={friend?.status} level={friend?.level}/>
                ))
            ) : (
                <div className='w-full h-full flex justify-center'>
                    <div className="w-[300px]">
                        <Lottie animationData={animationData2}/>
                    </div>
                </div>
            )
        }
        </div>
      </div>
    </div>
    <div className="w-full  flex justify-center gap-[10px] pb-[40px] flex-col items-center md:flex-row">
      <button onClick={()=>{setShow('map')}} className="w-[240px] h-[77px] retB rounded-[14px] text-white text-[30px] font-[400] hover:bg-gray-400 font-['Fredoka']">
        Back
      </button>
    </div>
  </div>
</>



);
};

export default FriendSearch;



