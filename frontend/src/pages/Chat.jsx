import { useState } from 'react';
import {io} from 'socket.io-client'

function Chat(){
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState(['Hello', 'How are You'])
    const url = 'http://localhost:3000/';
    const socket = io(url)

    function changeMessage(event){
        setMessage(event.target.value)
    }
    function sendMessage(event){
        event.preventDefault();
        if(message){
            socket.emit('chat message', message)
        }
        setMessage("");
    }

    socket.on('chat message',(msg)=>{
        setMessages([...messages, msg]);
    });


    return(
        <div className=" flex justify-center p-20">
            <div className="w-1/2 flex flex-col border border-black">
                <div className=" h-96 bg-gray-50">
                    {
                        messages.map((msg, index) =>(<p key={index}>{msg}</p>))
                    }
                </div>
                <form className="flex h-16 " onSubmit={sendMessage}>
                    <input type="text" value={message} onChange={changeMessage} placeholder="Message..." className=" p-4 text-lg flex-grow " />
                    <button type="submit" className=" p-4 font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Send
</button>
                </form>
            </div>
        </div>
    )
}
export default Chat