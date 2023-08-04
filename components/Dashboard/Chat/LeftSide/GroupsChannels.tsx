'use client';
import Channel from "../Channel/Channel";
import { useRef } from "react";

export default function GroupsChannels() {


  const groupsChannelsRef = useRef<HTMLDivElement | null>(null);
  const showMoreRef = useRef<HTMLSpanElement | null >(null);

  const handelShowMore = () => {
    showMoreRef.current?.classList.toggle("rotate-180");
    groupsChannelsRef.current?.classList.toggle("overflow-y-hidden");
    groupsChannelsRef.current?.classList.toggle("max-h-[235px]");
  }
  return (
      <div className="chat__left__bottom__groups flex flex-col  justify-center items-center">
              <span className="flex items-center justify-start gap-[10px] w-full mb-[20px]">
                <span className="flex justify-center items-center bg-[#0074D9] rounded-[15px] w-[27px] h-[27px]">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.74634 0C5.12986 0 4.53862 0.243841 4.1027 0.67788C3.66677 1.11192 3.42188 1.7006 3.42188 2.31443C3.42188 2.92825 3.66677 3.51693 4.1027 3.95097C4.53862 4.38501 5.12986 4.62885 5.74634 4.62885C6.36283 4.62885 6.95407 4.38501 7.38999 3.95097C7.82591 3.51693 8.07081 2.92825 8.07081 2.31443C8.07081 1.7006 7.82591 1.11192 7.38999 0.67788C6.95407 0.243841 6.36283 0 5.74634 0ZM4.15592 2.31443C4.15592 1.89444 4.32348 1.49166 4.62174 1.19468C4.92001 0.89771 5.32454 0.730872 5.74634 0.730872C6.16815 0.730872 6.57268 0.89771 6.87094 1.19468C7.16921 1.49166 7.33677 1.89444 7.33677 2.31443C7.33677 2.73441 7.16921 3.1372 6.87094 3.43417C6.57268 3.73114 6.16815 3.89798 5.74634 3.89798C5.32454 3.89798 4.92001 3.73114 4.62174 3.43417C4.32348 3.1372 4.15592 2.73441 4.15592 2.31443Z"
                      fill="white"
                    />
                    <path
                      d="M8.68401 0.974609C8.58667 0.974609 8.49332 1.01311 8.42449 1.08164C8.35566 1.15018 8.31699 1.24313 8.31699 1.34005C8.31699 1.43696 8.35566 1.52991 8.42449 1.59845C8.49332 1.66698 8.58667 1.70548 8.68401 1.70548C9.35786 1.70548 9.78507 2.14693 9.78507 2.55816C9.78507 2.9694 9.35786 3.41085 8.68401 3.41085C8.58667 3.41085 8.49332 3.44935 8.42449 3.51788C8.35566 3.58641 8.31699 3.67936 8.31699 3.77628C8.31699 3.8732 8.35566 3.96615 8.42449 4.03469C8.49332 4.10322 8.58667 4.14172 8.68401 4.14172C9.6319 4.14172 10.5191 3.49222 10.5191 2.55816C10.5191 1.62411 9.6319 0.974609 8.68401 0.974609ZM3.17869 1.34005C3.17869 1.24313 3.14002 1.15018 3.07119 1.08164C3.00236 1.01311 2.90901 0.974609 2.81167 0.974609C1.86378 0.974609 0.976562 1.62411 0.976562 2.55816C0.976562 3.49222 1.86378 4.14172 2.81167 4.14172C2.90901 4.14172 3.00236 4.10322 3.07119 4.03469C3.14002 3.96615 3.17869 3.8732 3.17869 3.77628C3.17869 3.67936 3.14002 3.58641 3.07119 3.51788C3.00236 3.44935 2.90901 3.41085 2.81167 3.41085C2.13831 3.41085 1.71061 2.9694 1.71061 2.55816C1.71061 2.14693 2.13831 1.70548 2.81167 1.70548C2.90901 1.70548 3.00236 1.66698 3.07119 1.59845C3.14002 1.52991 3.17869 1.43696 3.17869 1.34005Z"
                      fill="white"
                    />
                    <path
                      d="M5.7485 5.36133C4.87548 5.36133 4.06804 5.59521 3.46857 5.99329C2.87155 6.38991 2.44531 6.97753 2.44531 7.67576C2.44531 8.37398 2.87155 8.96209 3.46857 9.35822C4.06804 9.75582 4.87548 9.99018 5.7485 9.99018C6.62153 9.99018 7.42897 9.7563 8.02844 9.35822C8.62546 8.9616 9.0517 8.37398 9.0517 7.67576C9.0517 6.97753 8.62497 6.38942 8.02844 5.99329C7.42897 5.59569 6.62153 5.36133 5.7485 5.36133ZM3.17936 7.67576C3.17936 7.29765 3.41033 6.91078 3.87572 6.60186C4.33914 6.29441 5.00027 6.0922 5.7485 6.0922C6.49723 6.0922 7.15787 6.29441 7.62129 6.60186C8.08667 6.91078 8.31765 7.29765 8.31765 7.67576C8.31765 8.05386 8.08667 8.44073 7.62129 8.74965C7.15787 9.0571 6.49674 9.25931 5.7485 9.25931C4.99978 9.25931 4.33914 9.0571 3.87572 8.74965C3.41033 8.44073 3.17936 8.05386 3.17936 7.67576Z"
                      fill="white"
                    />
                    <path
                      d="M9.30619 6.13538C9.31646 6.08842 9.33592 6.04394 9.36348 6.00448C9.39103 5.96502 9.42613 5.93136 9.46677 5.90543C9.50741 5.87949 9.55278 5.8618 9.6003 5.85335C9.64782 5.8449 9.69654 5.84587 9.74368 5.85619C10.214 5.959 10.6382 6.14464 10.9534 6.40142C11.268 6.65771 11.5 7.01048 11.5 7.43146C11.5 7.85293 11.268 8.20521 10.9534 8.46151C10.6382 8.71829 10.2144 8.90393 9.74368 9.00674C9.69658 9.01704 9.64789 9.018 9.60041 9.00957C9.55294 9.00114 9.50759 8.98348 9.46696 8.9576C9.42634 8.93172 9.39123 8.89812 9.36365 8.85873C9.33606 8.81935 9.31654 8.77493 9.30619 8.72803C9.29585 8.68113 9.29488 8.63266 9.30335 8.58538C9.31181 8.53811 9.32955 8.49296 9.35554 8.45251C9.38153 8.41206 9.41527 8.3771 9.45483 8.34964C9.4944 8.32217 9.539 8.30273 9.58611 8.29243C9.97417 8.20814 10.2839 8.06245 10.4885 7.89581C10.693 7.72917 10.766 7.56594 10.766 7.43146C10.766 7.29698 10.693 7.13424 10.4885 6.96712C10.2839 6.80048 9.97417 6.65528 9.58611 6.5705C9.53899 6.56022 9.49436 6.5408 9.45479 6.51334C9.41521 6.48588 9.38146 6.45093 9.35546 6.41047C9.32946 6.37001 9.31173 6.32485 9.30328 6.27757C9.29482 6.23028 9.29581 6.1818 9.30619 6.1349V6.13538ZM1.75681 5.85619C1.85194 5.83552 1.95143 5.85331 2.03338 5.90567C2.11534 5.95803 2.17304 6.04066 2.19381 6.13538C2.21457 6.23011 2.1967 6.32916 2.14411 6.41076C2.09153 6.49236 2.00854 6.54982 1.9134 6.5705C1.52583 6.65479 1.21606 6.80048 1.01151 6.96712C0.806957 7.13376 0.734043 7.29698 0.734043 7.43146C0.734043 7.56594 0.806957 7.72868 1.01151 7.89581C1.21606 8.06245 1.52583 8.20765 1.91389 8.29243C2.00903 8.31324 2.09196 8.37082 2.14446 8.45251C2.19695 8.5342 2.2147 8.63331 2.19381 8.72803C2.17291 8.82275 2.11508 8.90533 2.03304 8.9576C1.95099 9.00987 1.85145 9.02754 1.75632 9.00674C1.28555 8.90393 0.861766 8.71829 0.546617 8.46151C0.231957 8.20521 0 7.85245 0 7.43146C0 7.00999 0.231957 6.65771 0.546617 6.40142C0.861766 6.14464 1.28604 5.959 1.75681 5.85619Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p className="text-[16px] font-[500] font-[Poppins] text-[#0174D9]">
                  Groups & Channels
                </p>
              </span>
              <div className="flex flex-col gap-[20px] overflow-y-hidden max-h-[235px] rounded-[5px] w-full" ref={groupsChannelsRef}>
                <Channel
                  avatar="/userProfile.jpg"
                  channel="1337 team"
                  lastMessage="Ghda anmchi"
                  lastMessageTime="12:00"
                  notification={6}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Leet"
                  lastMessage="Ewa ya hamid"
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={10}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Zanadi9a"
                  lastMessage="Obeaj ara chi bosa"
                  lastMessageTime="12:00"
                  notification={100}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={99}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
                <Channel
                  avatar="/userProfile.jpg"
                  channel="Channel Name"
                  lastMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                  lastMessageTime="12:00"
                  notification={0}
                  active={false}
                />
              </div>
              <span className="cursor-pointer p-[15px] transition-all duration-300 ease-in-out"
              onClick={handelShowMore} ref={showMoreRef}>
                  <svg width="15" height="15" viewBox="0 0 105 68" fill="#0074D9" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M92.0888 0.667969L52.5 42.0788L12.9112 0.667969L0.75 13.4167L52.5 67.6667L104.25 13.4167L92.0888 0.667969Z" />
                  </svg> 
              </span>
            </div>
  )
}