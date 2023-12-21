import React from 'react'

function Profile() {
  return (
    <div>
      <span>
        <h4>Wallet Connected</h4>
       </span>
       <div>
        <div>
          <div>
            <canvas>
            </canvas>
        </div>
        <span>0xeC56...6288</span>
        <h5>
          <span data-cy="token-amount">0.03933</span> 
          Aptos
        </h5>
        </div>
        <div>
          <button>
            Copy Address
            <span>
            </span>
          </button>
          <button>
            Disconnect
            <span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile