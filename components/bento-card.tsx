import React from 'react'
import Image from 'next/image'

function BentoCard() {
  return (
    <div className='p-50'>
        <div>
            <div>
                <h1>Nisarg</h1>
                <span>Send a Stream</span>
                <span>Pick a recipient, token and network</span>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <Image alt="ens avatar" src="https://ipfs.io/ipfs/QmSP4nq9fnN9dAiCj42ug9Wa79rqmQerZXZch82VqpiH7U/image.gif"/>
                </div>
                <div>
                    <span>
                    </span>
                    <span>
                    </span>
                </div>
            </div>
            <span>
                <Image src="/gifs/stream-loop.gif" alt='GIF'/>
            </span>
            <div>
                <div>
                    <Image alt="lens avatar" src="https://ik.imagekit.io/lens/media-snapshot/e931e302b0667cb1bf0a16d292114ebb3d220cc0bf862af0ad7a78960d2ab1c7.png" />
                </div>
                <div>
                    <span>
                    </span>
                    <span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BentoCard