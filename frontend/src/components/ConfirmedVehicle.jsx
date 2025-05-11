import React from 'react'

function ConfirmedVehicle(props) {
  return (
    <div>
      <h5 className="absolute top-5 right-4 " onClick={() => {
        props.setconfirmVehiclePanel(false)
      }} >
        <i className="ri-arrow-down-line"></i>
      </h5>
      <h2 className='text-2xl font-semibold mb-5'>Confirm your Ride.  </h2>
      <div className='flex justify-between items-center gap-3 flex-col '>
        <img className='h-30 '
          src="https://static.vecteezy.com/system/resources/previews/042/730/731/non_2x/modern-car-on-transparent-background-free-png.png"
          alt="Uber car"
        />
        <div className='w-full mt-5 '>
          <div className='flex items-center p-3 gap-5 border-b-2'>
            <i className=" font-lg ri-map-pin-line"></i>
            <div>
              <h3 className='text-lg font-medium'> 562/11/a</h3>
              <p className='text-sm -mt-1 text-gray-600'> gajraula hapur
              </p>
            </div>
          </div>
          <div className='flex items-center p-3 gap-5 border-b-2'>
            <i className=" font-lg ri-map-pin-time-fill"></i>
            <div>
              <h3 className='text-lg font-medium'> 562/11/a</h3>
              <p className='text-sm -mt-1 text-gray-600'> gajraula hapur
              </p>
            </div>
          </div>
          <div className='flex items-center p-3  gap-5 '> <i className=" font-lg ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'> Rs.193</h3>
              <p className='text-sm -mt-1 text-gray-600'> Payement Cash
              </p>
            </div>
          </div>

        </div>

        <button  onClick={()=>{
          props.setVehicleFound(true)
          props.setconfirmVehiclePanel(false)
        }}className="w-full mt-5 bg-green-400 rounded-full text-white p-2 font-semibold " >Confirm </button>
      </div>
    </div>
  )
}

export default ConfirmedVehicle
