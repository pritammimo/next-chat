'use client';
import Link from 'next/link';
import React from 'react'

const Chatclient = () => {
    
  return (
    <div>chatclient
      <Link href={`/chat/mainchat?username=pritam&room=dev`}>
       Join room
      </Link>
    </div>
  )
}

export default Chatclient