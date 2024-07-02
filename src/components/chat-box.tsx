import { useState,useEffect, } from "react";
import axios, { AxiosResponse } from 'axios'
import InfiniteScroll from "react-infinite-scroll-component";
import Message from './render-message.tsx';
import {Chat,Data} from './types.ts'

export default function ChatBox() {
  const [page,setPage] = useState<number>(0);
  const [chats,setChats] = useState<Chat[]>([]);

  useEffect(()=>{
      (async()=>{
        const response:AxiosResponse = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`)
        const data:Data = response.data
        setChats((prevState)=>{return data.chats.concat(prevState)})
      })();
  },[page])
    return (
      <div className = 'fixed top-28 bottom-16 w-screen overflow-y-hidden'>
        <div id="chats"  className = 'h-full w-screen overflow-y-scroll flex flex-col-reverse bg-[#faf9f7] px-4'>
            <InfiniteScroll className = 'flex flex-col-reverse overflow-visible'
                dataLength={ chats.length }
                next={ ()=>{setPage((prevState)=>prevState+1)} }
                loader={<p>Fetching Api...</p>}
                hasMore={true}
                scrollableTarget="chats"
                inverse={true}
                >
                   {chats.reverse().map((chat,index)=>{return <Message key={index} chat={chat} index = {index}/>})}
            </InfiniteScroll>
        </div>
        </div>
    )
}