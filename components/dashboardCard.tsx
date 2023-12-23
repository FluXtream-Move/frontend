"use client"

import Tilt from "react-parallax-tilt";
import Video from 'next-video';
import dash from "/public/laptop.gif"
import k from "/public/laptop.gif"
import Image from "next/image";

export default function DashboardCard() {

    return(
        <div className="flex">
            <Tilt>
                <div className=" rounded-b">
                    <Image src={k} alt="FluXtream logo"  />
                    {/* <Video src={dash} className=""/> */}
                </div>
            </Tilt>
        </div>
    )
}