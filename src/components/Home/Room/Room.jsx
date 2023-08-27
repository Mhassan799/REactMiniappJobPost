import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const Room = () => {
    const {Id} = useParams()
     // generate Kit Token
const myMeeting = (element)=>{
    const appID = 981968277;
    const serverSecret = "64772dd96c494ad617cb094feba3c298";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, Id,Date.now().toString(),'sheraz');
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
       container:element,
       scenario:{
        mode:ZegoUIKitPrebuilt.VideoConferencebui
       }
    })
}
  return (
    <div> <div
    className="myCallContainer"
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}
  ></div></div>
  )
}

export default Room