import React from 'react'

function VehiclePanel(props) {
  return (
    <div>
      <h5 className="absolute top-5 right-4 " onClick={()=>{
          props.setVehiclePanelOpen(false)
        }} >
        <i className="ri-arrow-down-line"></i>
        </h5>
        <h2 className='text-2xl font-semibold mb-5'>choose the vehicle </h2>
        <div onClick={()=>{
          props.setconfirmVehiclePanel(true)
        }} className=' border-2 active:border-black  border-white  rounded-xl mb-5  p-3 flex items-center gap-10 shadow-md w-full'>
          <img 
            className="h-12 w-auto" 
            src="https://static.vecteezy.com/system/resources/previews/042/730/731/non_2x/modern-car-on-transparent-background-free-png.png" 
            alt="Uber car" 
          />
          <div className='flex-1'>
            <div className='flex items-center justify-between'>
              <h4 className='font-medium'>UberGo
                <span className='text-gray-600 text-sm ml-2'>
                  <i className="ri-user-fill"></i> 4
                </span>
              </h4>
              <span className='font-medium'>₹193.20</span>
            </div>
            <div className='text-gray-500 text-sm'>
              <p>2 mins away</p>
              <p className='text-xs'>Affordable, compact rides</p>
            </div>
          </div>
        </div>
        <div  onClick={()=>{
          props.setconfirmVehiclePanel(true)       
        }} className='bg-white border-white border-2 active:border-black  rounded-xl mb-5 rounded-lg p-3 flex items-center gap-10 shadow-md w-full'>
          <img 
            className="h-12 w-auto" 
            src="https://static.vecteezy.com/system/resources/previews/042/268/515/non_2x/ai-generated-sticker-of-a-motorbike-or-motorcycle-on-a-transparent-background-ai-generated-png.png" 
            alt="Uber car" 
          />
          <div className='flex-1'>
            <div className='flex items-center justify-between'>
              <h4 className='font-medium'>UberGo
                <span className='text-gray-600 text-sm ml-2'>
                  <i className="ri-user-fill"></i> 4
                </span>
              </h4>
              <span className='font-medium'>₹193.20</span>
            </div>
            <div className='text-gray-500 text-sm'>
              <p>2 mins away</p>
              <p className='text-xs'>Affordable, compact rides</p>
            </div>
          </div>
        </div>
        <div onClick={()=>{
          props.setconfirmVehiclePanel(true)
        }} className='bg-white  border-white   border-2 active:border-black rounded-xl mb-5 rounded-lg p-3 flex items-center gap-10 shadow-md w-full'>
          <img 
            className="h-12 w-auto" 
            src="https://static.vecteezy.com/system/resources/previews/024/960/152/non_2x/car-automobile-vehicle-free-png.png" 
            alt="Uber car" 
          />
          <div className='flex-1'>
            <div className='flex items-center justify-between'>
              <h4 className='font-medium'>UberGo
                <span className='text-gray-600 text-sm ml-2'>
                  <i className="ri-user-fill"></i> 4
                </span>
              </h4>
              <span className='font-medium'>₹193.20</span>
            </div>
            <div className='text-gray-500 text-sm'>
              <p>2 mins away</p>
              <p className='text-xs'>Affordable, auto rides</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VehiclePanel
