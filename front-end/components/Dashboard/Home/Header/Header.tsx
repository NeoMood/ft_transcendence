'use client';
import UserModal from '../userModal/userModal'
import { useContext, useRef, useState } from 'react';
import { contextdata } from '@/app/contextApi';
import Link from 'next/link';
import Avatar from '../../Chat/Avatar/Avatar';

type HeaderProps = {
    modalRef?: any,
    handelShaw?: any,
    show?: boolean,
    notifRef?: any,
    notifIconRef?: any
}
type ChannelProps = {
    avatar: string,
    channel: string,
    lastMessage: string | null | undefined,
    lastMessageTime: string | null | undefined,
    notification: number,
    active: boolean,
    link: string,
}


function UserComponent({avatar, channel, lastMessage, lastMessageTime, notification, active, link}: ChannelProps) {
    return (
        <Link href={`${link}`} className="cursor-pointer w-full flex justify-between items-center hover:bg-[#f3f3f3f5] p-[15px] rounded-[10px]" >
            <div className="flex items-center gap-[14px]">
                <Avatar url={avatar} status={active}/>
                <span>
                    <p className="text-[#034B8A] text-[20px] font-[Poppins] font-[500] max-screenscreenscreenscreen truncate lsm:max-lg:max-w-[152px]">
                        {channel}
                    </p>
                    <p className="text-[#C0C1C5] text-[16px] font-[Poppins] font-[300] max-w-[200px] truncate lg:max-xl:max-w-[150px] lsm:max-lg:max-w-[120px]">
                        {lastMessage}
                    </p>
                </span>
            </div>
            <div className="flex flex-col items-end gap-[13px]">
                <p className="text-[#C0C1C5] text-[14] font-[Poppins] font-[300]">
                    {lastMessageTime}
                </p>
            </div>
        </Link>
)
}

export default function Header({show, modalRef,handelShaw,notifRef,notifIconRef}: HeaderProps) {
    const {profiles, user,setMediaDashbord,dashboardRef}:any = useContext(contextdata);
    const myProfile = profiles?.find((profile:any) => profile?.userId === user?.id);
    const name = `${myProfile?.firstName} ${myProfile?.lastName}`;
    const handelNotifShaw = (Ref: any) => {
        Ref.current.classList.remove('notif')
    }

	const inputRef = useRef<HTMLInputElement | null>(null);
	const [closeSearch, setCloseSearch] = useState<boolean>(true);
	const [users, setUsers] = useState<any>([]);
	const [showBody, setShowBody] = useState<boolean>(false);

	const handleSearch = (e: any) => {
        setCloseSearch(false)
        setShowBody(true)
		const value = e.target.value;
		const result = profiles.filter((profile: any) => {
			if (profile.userId === user.id) return false;
			return profile.firstName.toLowerCase().includes(value.toLowerCase()) || profile.lastName.toLowerCase().includes(value.toLowerCase())|| profile.username.toLowerCase().includes(value.toLowerCase());
		});
		setUsers(result);
	}
    const clearInputValue = () => {
        setShowBody(false)
		if (inputRef.current) {
		inputRef.current.value = '';
		}
	};
    return (
        <div className="flex items-center h-[100px] w-full   gap-[430px]  justify-center 
        
        ">
                
                <div className='header__right flex  w-[1224px] 3xl:w-[1745px] h-[90px] items-center justify-between   gap-[10px]'>
                    <div className="heeere hidden lsm:max-sm:block cursor-pointer" onClick={() => {
                            setMediaDashbord(true)
                            dashboardRef.current?.classList.add("!left-0")
                        }}>
                            <svg width="30" height="28" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 14C17.8852 14.0002 18.2556 14.1486 18.5344 14.4144C18.8132 14.6802 18.979 15.0431 18.9975 15.4279C19.016 15.8127 18.8858 16.1898 18.6338 16.4812C18.3818 16.7726 18.0274 16.9558 17.644 16.993L17.5 17H1.5C1.11478 16.9998 0.744405 16.8514 0.465613 16.5856C0.186821 16.3198 0.020988 15.9569 0.00247574 15.5721C-0.0160365 15.1873 0.114192 14.8102 0.366175 14.5188C0.618159 14.2274 0.972581 14.0442 1.356 14.007L1.5 14H17.5ZM17.5 7C17.8978 7 18.2794 7.15804 18.5607 7.43934C18.842 7.72064 19 8.10218 19 8.5C19 8.89782 18.842 9.27936 18.5607 9.56066C18.2794 9.84196 17.8978 10 17.5 10H1.5C1.10218 10 0.720644 9.84196 0.43934 9.56066C0.158035 9.27936 0 8.89782 0 8.5C0 8.10218 0.158035 7.72064 0.43934 7.43934C0.720644 7.15804 1.10218 7 1.5 7H17.5ZM17.5 0C17.8978 0 18.2794 0.158035 18.5607 0.43934C18.842 0.720644 19 1.10218 19 1.5C19 1.89782 18.842 2.27936 18.5607 2.56066C18.2794 2.84196 17.8978 3 17.5 3H1.5C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H17.5Z" fill="#034B8A"/>
                            </svg> 
                    </div>
                    <div className='flex gap-[30px] w-9/12 xl:w-9/12'>
                        <div className='hidden 2xl:block'>
                            <p className="text-[18px] font-[500] text-[#AEBAC7]  2xl:max-3xl:text-[15px]">Welcome</p>
                            {name ? <p className="text-[25px] font-[700] 2xl:max-3xl:text-[20px]  ">{name}</p> : <p className="text-[25px] font-[700] 2xl:max-3xl:text-[20px]  "></p>}
                        </div>
                        <div className="flex  gap-[20px] items-center z-[0] searchShadow rounded-[20px] w-full xl:w-7/12 relative bg-white">
                            <div className="flex items-center gap-[10px] p-[32px] pr-0  ">
                                {/* <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 27L21.0974 21.0868M24.3684 13.1842C24.3684 16.1504 23.1901 18.9952 21.0926 21.0926C18.9952 23.1901 16.1504 24.3684 13.1842 24.3684C10.218 24.3684 7.37323 23.1901 5.27578 21.0926C3.17833 18.9952 2 16.1504 2 13.1842C2 10.218 3.17833 7.37323 5.27578 5.27578C7.37323 3.17833 10.218 2 13.1842 2C16.1504 2 18.9952 3.17833 21.0926 5.27578C23.1901 7.37323 24.3684 10.218 24.3684 13.1842Z" stroke="#B4C0CB"/>
                                </svg>  */}
                                {
                                    closeSearch ? (
                                        <span onClick={() => { setCloseSearch(false); inputRef.current?.focus(); }} className="cursor-pointer">
                                            <svg
                                                width="29"
                                                height="29"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                                strokeWidth={2}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.32 17C13.915 17 17.64 13.4183 17.64 9C17.64 4.58172 13.915 1 9.32 1C4.72499 1 1 4.58172 1 9C1 13.4183 4.72499 17 9.32 17Z"
                                                    stroke="#898f9496"
                                                />
                                                <path
                                                    d="M19.7193 18.9984L15.1953 14.6484"
                                                    stroke="#898f9496"
                                                />
                                            </svg>
                                        </span>
                                    ) : (
                                        <span className="cursor-pointer" onClick={() => { setCloseSearch(true); setShowBody(false);clearInputValue()}} >
                                            <svg width="29" height="29" viewBox="0 0 17 18" fill="#898f9496" xmlns="http://www.w3.org/2000/svg" className="
                                        hover:fill-black
                                        ">
                                                <path d="M15 2L2 16M2 2L15 16" stroke="#D2D6D8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    )
                                }
                            </div>
                            <div className='w-full'>
                                <input ref={inputRef} onChange={handleSearch} className="w-full  h-[90px] bg-[#FFF]  rounded-[10px] outline-none border-none text-[20px] text-gray-400 font-[500] font-[Poppins] pr-[20px] placeholder:font-[400] placeholder:text-gray-300 " type="text" placeholder="Search for friends to play" />
                            </div>
                                {
                                    showBody && (
                                        <div className=" z-[50] absolute top-[100px] w-full rounded-[15px] h-[280px] bg-[#FFF] py-[25px] px-[25px] flex flex-col gap-[20px] overflow-y-scroll no-scrollbar p-inf">
                                            {
                                                users?.map((user: any) => {
                                                    return(
                                                        <UserComponent
                                                            avatar={`http://${process.env.NEXT_PUBLIC_APP_URL}:3000/${user.avatar}`}
                                                            channel={`${user.firstName} ${user.lastName}`}
                                                            lastMessage={''}
                                                            lastMessageTime={''}
                                                            notification={0}
                                                            active={false}
                                                            link={`/Profile/users/${user.userId}`}
                                                            key={user.userId}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                        </div>
                    </div>


                    <div className='flex  gap-[20px] 3xl:gap-[60px]'>
                        <div className="z-[50] bg-[#FFF]  cursor-pointer w-[88px] h-[90px] notifShadow flex justify-center items-center rounded-[30px] " onClick={()=>{handelShaw(notifRef);handelNotifShaw(notifIconRef)}}>
                            <div className="notif relative after:animate-ping" ref={notifIconRef}>
                                <svg  width="34px" height="40px" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9264 34.4558C13.9262 34.2443 20.0186 34.2443 21.0184 34.4558C21.8731 34.6532 22.7974 35.1145 22.7974 36.1217C22.7477 37.0805 22.1852 37.9305 21.408 38.4704C20.4002 39.256 19.2175 39.7535 17.9811 39.9328C17.2974 40.0214 16.6255 40.0234 15.9656 39.9328C14.7272 39.7535 13.5445 39.256 12.5388 38.4684C11.7596 37.9305 11.197 37.0805 11.1473 36.1217C11.1473 35.1145 12.0716 34.6532 12.9264 34.4558ZM17.0904 0C21.2507 0 25.5005 1.97404 28.0249 5.24933C29.6628 7.35833 30.4141 9.46531 30.4141 12.7406V13.5927C30.4141 16.1045 31.078 17.5851 32.539 19.2912C33.6462 20.5481 34 22.1616 34 23.912C34 25.6605 33.4255 27.3203 32.2747 28.6679C30.768 30.2833 28.6431 31.3147 26.4745 31.494C23.3319 31.7619 20.1873 31.9875 17.001 31.9875C13.8127 31.9875 10.6701 31.8525 7.52751 31.494C5.35691 31.3147 3.23204 30.2833 1.72733 28.6679C0.57644 27.3203 0 25.6605 0 23.912C0 22.1616 0.355802 20.5481 1.46098 19.2912C2.96767 17.5851 3.58784 16.1045 3.58784 13.5927V12.7406C3.58784 9.37668 4.42666 7.17704 6.15399 5.02372C8.72213 1.88339 12.8387 0 16.9115 0H17.0904Z" fill="#00539D"/>
                                </svg> 
                            </div>
                        </div>
                        <div className="z-[50] bg-[#FFF]  cursor-pointer w-[88px] h-[90px] notifShadow rounded-[30px] hidden lg:block 3xl:hidden">
                                <Link href="/Profile">
                            <div className='flex justify-center items-center    w-full h-full '>
                            <img className="w-[55px] h-[55px] rounded-full outline  outline-[5px] outline-[#ACDAAD] object-cover "
                                src={
                                    `http://${process.env.NEXT_PUBLIC_APP_URL}:3000/${myProfile?.avatar}`
                                } alt="" />
                            </div>
                                </Link>
                        </div >
                        <div className=" hidden 3xl:block" >
                            <div className='z-[51]   profileShadow flex gap-[15px]  items-center py-[13px] px-[18px] rounded-[20px]  relative  max-w-[270px] bg-white h-[90px]'>
                            <div className="relative after:animate-ping">
                                <div className="w-[55px] h-[55px] rounded-full">
                                <img className="w-[55px] h-[55px] rounded-full outline  outline-[5px] outline-[#ACDAAD] object-cover"
                                src={
                                    `http://${process.env.NEXT_PUBLIC_APP_URL}:3000/${myProfile?.avatar}`
                                } alt="" />
                                <span className="absolute top-[0px] right-[0px] w-[10px] h-[10px] rounded-full bg-[#2FCD48]
                                outline outline-[4px] outline-[#fff]
                                "></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[5px] justify-start h-full '>
                                <p className="font-[Poppins] text-[14px] font-[6500] text-[#AEBAC7] ">Enjoy your game,</p>
                                <p className="font-[Poppins] text-[16px] font-[600] text-[#00539D] ">{name}</p>
                            </div>
                            <div className='cursor-pointer hidden 2xl:block' onClick={()=>handelShaw(modalRef)} >
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.492 12.841C6.41467 12.7657 6.084 12.4812 5.812 12.2163C4.10133 10.6628 1.30133 6.61016 0.446667 4.48904C0.309333 4.16691 0.0186667 3.35249 0 2.91736C0 2.50041 0.096 2.10294 0.290667 1.72366C0.562667 1.25085 0.990667 0.87157 1.496 0.663744C1.84667 0.529956 2.896 0.32213 2.91467 0.32213C4.06267 0.114304 5.928 0 7.98933 0C9.95333 0 11.7427 0.114304 12.908 0.284462C12.9267 0.303945 14.2307 0.511771 14.6773 0.739081C15.4933 1.15603 16 1.97045 16 2.84202V2.91736C15.98 3.48498 15.4733 4.67868 15.4547 4.67868C14.5987 6.6855 11.936 10.6446 10.1667 12.2358C10.1667 12.2358 9.712 12.6839 9.428 12.8787C9.02 13.1827 8.51467 13.3333 8.00933 13.3333C7.44533 13.3333 6.92 13.1632 6.492 12.841Z" fill="#00539D"/>
                                </svg> 
                            </div>
                            <UserModal modalRef={modalRef} name={name} username={myProfile?.username} avatar={myProfile?.avatar} cover={myProfile?.cover} wins={myProfile?.win} rewards={myProfile?.points}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}