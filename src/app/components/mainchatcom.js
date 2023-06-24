'use client';
import React,{useEffect,useState} from 'react'
import io from 'socket.io-client';
import SendMessage from './sendmessage';
import MessageReceived from './messagereceived';
import RoomAndUsers from './Roomanduser';
const socket = io.connect('http://localhost:4000');
const Mainchatcom = ({username,room}) => {
  console.log("u",username,room);
  const [joinroom, setjoinroom] = useState(false);
  console.log("join",joinroom);
  useEffect(() => {
  if(!joinroom){
    socket.emit('join_room', { username, room });
    socket.connect()
    setjoinroom(true)
  }
  }, [joinroom]);
  return (
    <div>Mainchatcom
      {joinroom ?
      <>
      <RoomAndUsers socket={socket} username={username} room={room}/>
      <MessageReceived socket={socket}/>
      <SendMessage socket={socket} username={username} room={room}/>
      </> : "please wait"
      }
      
    </div>
  )
}

export default Mainchatcom