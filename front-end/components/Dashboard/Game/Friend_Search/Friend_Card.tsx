import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";

type props  = {
    name: string,
    avatar: string,
    online: string
}

const FriendCard = ({avatar, name, online }:props) => {
    const avatarUrl = `http://${process.env.NEXT_PUBLIC_APP_URL}:3000/${avatar}`;
    return (
        <div className="w-full md:h-[121px] rounded-[22px] bg-[rgba(225,241,253,0.3)] backdrop-blur-[40px] flex items-center justify-center ">
        <div className="flex items-center justify-between  w-11/12  flex-col md:flex-row gap-[20px]  md:p-0">
        <div className="flex items-center gap-[24px] flex-col md:flex-row py-[15px]">
            <div className="w-[92px] h-[92px] rounded-full ">
            <img
                src={avatarUrl}
                alt=""
                className="rounded-full w-full h-full object-cover"
            />
            </div>
            <div className="flex flex-col ">
            <p className="text-[20px] md:text-[30px] text-[#3271A8] font-['Fredoka'] font-[400]">
                {name}
            </p>
            <p className="text-[10px] md:text-[20px] text-[#064A85] font-['Fredoka'] font-[600]">
                LVL 5
            </p>
            </div>
        </div>
        <div className="pb-[15px] md:pb-0">
            <button disabled={online === 'online' ? false : true} className={`w-[144px] h-[46px] rounded-[8px] bg-[#3271A8] flex items-center justify-center gap-[5px]   ${online === 'online' ? 'bg-[#62AAE7] hover:bg-[#3e8acdcb] playButt' : 'bg-[#D0D0D0] cursor-not-allowed playButt1 '}`}>
            <img src="pong-icon.svg" alt="" className="w-[15px]" />
            <p  className="text-[#fff] text-[13px] font-[400] font-['Fredoka']">
                Invite To Play
            </p>
            </button>
        </div>
        </div>
    </div>
);
};

export default FriendCard;