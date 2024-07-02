import { useState,useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import {EditIcon,BackIcon,VerticalDotsIcon,ShareNumberIcon,MembersIcon,ReportIcon} from "../icons.tsx";
import {Data} from './types.ts'
interface chatHeader{
    from:string,
    to:string,
    name:string
}

export default function ChatHeader (){
    const [chatHeader,setChatHeader] = useState<chatHeader>({
        from:'Loading',
        to:'Loading',
        name:'Loading'
    });
    const [open,setOpen] = useState<boolean>(false);
    useEffect(()=>{
        (async()=>{
          const response:AxiosResponse = await axios.get('https://qa.corider.in/assignment/chat?page=0')
          const data:Data = response.data
          setChatHeader({
                from:data.from,
                to:data.to,
                name:data.name
            })
        })();
      },[])
  return (
    
    <div className = 'fixed top-0 h-28 z-10 w-screen border-b-2 border-[#E5E5E0] flex flex-col justify-between px-5 py-4 text-[#141e0d] space-y-1 bg-[#faf9f7]'>
        <div className = 'flex justify-between items-center'>
            <div className = 'space-x-3 flex items-center'>
                <BackIcon/>
                <span className = 'text-2xl text-nowrap mulish-700'>{chatHeader.name}</span>
            </div>
            <EditIcon/>
        </div>
        <div className = 'flex justify-between items-center'>
            <p className = 'text-nowrap'>
                <span className = 'text-[#606060] mulish-500 text-base'>From </span><span className = 'mulish-700 text-lg text-[#141e0d] font-extrabold'>{chatHeader.from}</span><br />
                <span className = 'text-[#606060] mulish-500 text-base'>To </span><span className = 'mulish-700 text-lg text-[#141e0d] font-extrabold'>{chatHeader.to}</span>
            </p> 
            <button className = 'relative' onClick={()=>{setOpen((prevState)=>!prevState)}}><VerticalDotsIcon/>
                {open && <div className = 'absolute top-6 right-0 w-40 h-36 grid grid-rows-3 px-2 bg-white divide-y divide-[#E5E5E0] rounded-lg drop-shadow-md'>
                    <button className = 'flex gap-2 items-center'>
                        <MembersIcon/>
                        Members
                    </button>
                    <button className = 'flex gap-2 items-center'>
                        <ShareNumberIcon/>
                        ShareNumber
                    </button>
                    <button className = 'flex gap-2 items-center'>
                        <ReportIcon/>
                        Report
                    </button>
                </div>}
            </button>
        </div>
    </div>
  )
}