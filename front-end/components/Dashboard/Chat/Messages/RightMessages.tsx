type LeftMessagesProps = {
    message: {
        fromId? :    number,
        toId?  :     number,
        content :   String,
        createdAt:  String,
      },
      avatar: String,
}

export default function RightMessages({message, avatar}: LeftMessagesProps) {
    return (
        <div className="flex  gap-[16px] items-end flex-row-reverse "> 
            <img src={`http://${process.env.NEXT_PUBLIC_APP_URL}:3000/${avatar}`}
             alt="" className="rounded-full min-w-[44px] min-h-[44px]  max-w-[44px] max-h-[44px]   self-end object-cover mb-[29px]"/>
            <span className="flex flex-col gap-[6px]">
                <span className="text-[#AEAEAE] text-[15px] font-[Poppins] font-[500] self-end">You</span>
                <p className="w-fit text-[#FFF] text-[16px] font-[Poppins] font-[500] bg-[#30628dd7] px-[20px] py-[10px] rounded-tr-[20px] rounded-l-[20px] max-w-[400px] break-words lsm:max-sm:max-w-[210px] lsm:max-sm:text-[13px]">
                    {message.content}
                </p>
                <span className="text-[#AEAEAE] text-[15px] font-[Poppins] font-[500] self-end">{
                message.createdAt.split('T')[1].split('.')[0].slice(0, 5)
                }</span>
            </span>
        </div>
    )
}