import {VerifiedIcon} from '../icons.tsx';
import {Chat} from './types.ts'
let prevDate:string;
interface MessageProps{
    chat:Chat,
    index:number
}
export default function Message({chat,index}:MessageProps){
    const renderDate:string = prevDate;
    prevDate = chat.time.slice(0,10);
    if(chat.time.slice(0,10) != renderDate && index!=0){

        return (
            <>
                <Date renderDate = {renderDate}/>
                <MessageTemplate chat = {chat}/>
            </>
           );
    }else {
        return <MessageTemplate chat = {chat}/>
    }
}

const monthList:string[] = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
function Date({renderDate}:{
    renderDate:string
}){
    const year = renderDate.slice(0,4)
    const month = renderDate.slice(5,7)
    const date = renderDate.slice(8)
    return(
        <>
            <div className = 'grid grid-cols-3 py-4'>
                <DivideRows />
                <div className = 'flex justify-center items-center text-sm mulish-400 lg:text-lg text-[#b7b7b7]'>
                    {date} {monthList[parseInt(month)-1]}, {year}
                </div>
                <DivideRows />
            </div>
        </>
    );
}

function MessageTemplate({chat}:{
    chat:Chat,
}){
    return (
    <>
        <div className = {`${chat.sender.self && 'flex justify-end'} bottom-0 my-3`}>
            <div className = {`w-[83%] space-x-2 flex`}>
                { !chat.sender.self && <div className = 'max-w-[30px] min-w-[30px] relative h-fit'>
                    <img className= 'rounded-full' src={chat.sender.image} alt="profile" />
                    { chat.sender.is_kyc_verified && <div className = 'absolute -bottom-0.5 right-0 w-[33%] aspect-square'><VerifiedIcon/></div>}
                </div>}
                <div className = {`text-sm ${chat.sender.self?('text-white bg-[#1C63D5] rounded-t-xl rounded-l-xl justify-end'):('text-[#606060] bg-white rounded-r-xl rounded-b-xl ')} flex drop-shadow-md p-2 text-left mullish-400`}>{chat.message}</div>
            </div>
        </div>
    </>
    );
}
function DivideRows(){
    return (
        <div className = 'grid grid-rows-2 divide-y divide-[#b7b7b7]'>
            <div/>
            <div/>
        </div>
    );
}