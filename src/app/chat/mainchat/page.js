
import Mainchatcom from '@/app/components/mainchatcom'
import React from 'react'

const page = async(params) => {
    console.log("para",params.searchParams);
  return (
    <div>
       <Mainchatcom username={params.searchParams.username} room=
       {params.searchParams.room}/>
    </div>
   
  )
}

export default page