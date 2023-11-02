type props  = {
    name: string,
    username: string,
    avatar: string,
    cover: string
}

const Friend = ({ cover, avatar, name, username }:props) => {
    return (
    <div className="w-[242px] h-[250px] rounded-[34px] bg-white teamS overflow-x-hidden ">
        <div className="w-[242px] h-[92px]">
        <img
            src={cover}
            alt=""
            className="object-cover w-full h-full"
        />
        </div>
        <div className="relative">
        <div className="rounded-full w-[76px] h-[76px] absolute -top-[38px] right-[83px]">
                <img src={avatar} alt="" className="object-cover rounded-full w-full h-full"/>
        </div>
        <div>
            <img
            src="pellipse-179.svg"
            alt=""
            className="absolute -top-[47px] right-[75px]"
            />
        </div>
    </div>
    <div className="pt-[55px]  text-center">
        <div className="text-[#033B6C] text-[12px] font-[600]">
        {name}
        </div>
        <div className="text-[#064A85] text-[9px] font-[600]">{username}</div>
    </div>
    <div className="flex justify-center gap-[8px] pt-[12px]">
        <button className="w-[90px] h-[34px] rounded-[8px] bg-[#50A6D3] flex items-center justify-center gap-[5px] messageButt">
            <img src="send.svg" alt="" />
            <p className="text-[#fff] text-[10px] font-[400]">Message</p>
        </button>
        <button className="w-[90px] h-[34px] rounded-[8px] bg-[#62AAE7] flex items-center justify-center gap-[5px] playButt">
            <img src="pong-icon.svg" alt="" />
            <p className="text-[#fff] text-[10px] font-[400]">Play With</p>
        </button>
        </div>
    </div>
);
};

export default Friend;