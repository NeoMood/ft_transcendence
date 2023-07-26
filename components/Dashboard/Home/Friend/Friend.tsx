
type props  = {
    name: string,
    username: string,
    avatar: string,
}

export default function Friend({name, username, avatar}:props) {
    return (
        <div className='flex  items-center justify-between w-[311px] min-h-[70px] bg-[#FFF] p-[13px] rounded-[9px] shadow-7xl'>
            <div className='flex items-center justify-center gap-[16px]  bg-[#FFF] rounded-full'>
                <img className="w-[42px] h-[42px] rounded-full outline  outline-[2px] outline-[#ACDAAD]  border-[3px] border-[#fff]"
                src={avatar} alt="" />
                <span className='flex flex-col justify-center '>
                    <p className='text-[#063B6B] text-[12px] font-[600]'>{name}</p>
                    <p className='text-[#064A85] text-[9px]  font-[600]'>{`@${username}`}</p>
                </span>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <button className="w-[70px] h-[20px] bg-[#62AAE7] text-[9px] font-[500] text-[#fff] rounded-[5px] flex items-center justify-center gap-[5px]">
                    <svg width="11" height="11" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.28885 0C2.89589 0 3.47807 0.24114 3.90731 0.670372C4.33655 1.0996 4.5777 1.68177 4.5777 2.28879C4.5777 2.65741 4.49072 3.00531 4.33604 3.31369L4.92946 3.90733C4.97463 3.95251 5 4.01378 5 4.07767C5 4.14155 4.97463 4.20282 4.92946 4.248L4.2481 4.92934C4.22573 4.95174 4.19916 4.96951 4.16991 4.98163C4.14066 4.99376 4.10931 5 4.07764 5C4.04598 5 4.01463 4.99376 3.98538 4.98163C3.95613 4.96951 3.92956 4.95174 3.90719 4.92934L3.31377 4.33594C2.99567 4.49537 2.64467 4.57813 2.28885 4.57759C1.68181 4.57759 1.09963 4.33645 0.670388 3.90722C0.241146 3.47798 0 2.89582 0 2.28879C0 1.68177 0.241146 1.0996 0.670388 0.670372C1.09963 0.24114 1.68181 9.04539e-09 2.28885 0ZM3.56651 3.22551L3.22583 3.56618L4.07777 4.41785L4.41844 4.07719L3.56651 3.22551ZM4.01561 1.75466L1.7547 4.01551C1.92774 4.06883 2.10779 4.09587 2.28885 4.09574C2.51475 4.09604 2.73869 4.05387 2.949 3.97142L2.71482 3.73676C2.66965 3.69158 2.64427 3.63031 2.64427 3.56642C2.64427 3.50254 2.66965 3.44127 2.71482 3.39609L3.39617 2.71475C3.44135 2.66958 3.50262 2.64421 3.56651 2.64421C3.6304 2.64421 3.69167 2.66958 3.73685 2.71475L3.97151 2.94893C4.05396 2.73862 4.09614 2.51469 4.09584 2.28879C4.09584 2.1028 4.06765 1.92355 4.01561 1.75466Z" fill="white"/>
                        <circle cx="3.5" cy="0.5" r="0.4" fill="#7DBDF0" stroke="white"/>
                    </svg>
                    Play with
                </button>
                <button  className="w-[70px] h-[20px] bg-[#50A6D3] text-[9px] font-[500] text-[#fff] rounded-[5px]  flex items-center justify-center gap-[5px]">
                    <svg width="10" height="10" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.85884 0.145496C4.73379 0.0171495 4.54872 -0.0306657 4.37615 0.0196661L0.351999 1.18988C0.169925 1.24046 0.0408718 1.38567 0.00610754 1.57014C-0.029407 1.75788 0.0946438 1.9962 0.25671 2.09585L1.51498 2.8692C1.64403 2.94848 1.8106 2.92859 1.91739 2.82088L3.35823 1.37108C3.43076 1.29558 3.55081 1.29558 3.62334 1.37108C3.69587 1.44406 3.69587 1.56234 3.62334 1.63783L2.18 3.08789C2.07295 3.19535 2.05295 3.36271 2.13173 3.49256L2.90054 4.76344C2.99058 4.91444 3.14564 5 3.31571 5C3.33572 5 3.35823 5 3.37824 4.99748C3.57332 4.97232 3.72838 4.83894 3.7859 4.65019L4.97889 0.631198C5.03141 0.46007 4.9839 0.273842 4.85884 0.145496Z" fill="white"/>
                    </svg> 
                    Message
                </button>
            </div>
        </div>
    )
}
    