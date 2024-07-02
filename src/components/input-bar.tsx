import { useState } from 'react';
import {Click,SendIcon,PaperclipIcon} from '../icons.tsx'

export default function InputBar(){
    const [open,setOpen] = useState<boolean>(false);
    return (
        <>
            <div className = 'fixed bottom-0 w-screen h-16 items-center flex justify-around space-x-3 py-2 px-4 bg-[#faf9f4]'>
                 <input className = 'w-[80%] rounded-md outline-none py-2 px-2 mulish-500 'type="text" placeholder="Reply to @Rohit Yadav"  />
                 <div className = 'flex items-center space-x-3'>
                    <button className = 'relative' onClick ={()=>{setOpen((prev)=> !prev)}}>
                        <PaperclipIcon/>
                        {open &&
                            <div className = 'absolute -top-[75px] -left-[69px]'>
                                <Click/>
                            </div>}
                    </button>
                    <SendIcon/>
                 </div>
            </div>
        </>
    );
}