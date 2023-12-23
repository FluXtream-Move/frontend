"use client"

import Tilt from "react-parallax-tilt";
import Video from 'next-video';
import dash from "/videos/dash.mp4"

export default function DashboardCard() {

    return(
        <div className="flex">
            <Tilt>
                <div className="w-[1100px] h-[600px] bg-gray-500 rounded-b">
                    <Video src={dash} className=""/>
                </div>
            </Tilt>
        </div>
    )
}