import React from 'react'

const LocationSearchPanel = (props) => {
  const { vehiclePanelOpen, setVehiclePanelOpen , setPanel } = props
  const locations = [
    " 24B,kapoors school hello everyone ",
    " 24B,kapoors cafe,s 24B,kapoors school",
    "20B sharma,s institute of engineering",
    " 24B,kapoors school",
  ]
  return (
    <div>
      {
        locations.map((location,index) => {

          return (<>
            <div onClick={()=>{
              setVehiclePanelOpen(true)
              setPanel(false)

            }}  key={index} className='flex items-center  rounded-xl p-3 border-white  my-4   justify-start border-2 active:border-black gap-4'>
              <h2 className='bg-[#eee] h-10 w-12 flex items-center  justify-center  rounded-full'><i className="ri-map-pin-line "></i></h2>
              <h4 className='font-medium '>{location}</h4>
            </div>
          </>)
        })
         
      }
    </div>
  )
}

export default LocationSearchPanel
