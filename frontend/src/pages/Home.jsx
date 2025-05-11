import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import  VehiclePanel from '../components/vehiclePanel'
import ConfirmedVehicle from '../components/ConfirmedVehicle'
import LocationSearchPanel from '../components/LocationSearchPanel'
import LookingForDriver from '../components/LookingForDriver'
import WaitingforDriver from '../components/WaitingForDriver'

const Home = () => {
  const [pickup, setPickup] = React.useState('')
  const [destination, setDestination] = React.useState('')
  const [panel, setPanel] = React.useState(false)
  const panelref = React.useRef(null)
  const panelclose = React.useRef(null)
  const vehiclepanelref = React.useRef(null)

  const [vehiclePanelOpen, setVehiclePanelOpen] = React.useState(false)
  const [confirmVehiclePanel, setconfirmVehiclePanel] = React.useState(false)
  const ConfirmVehiclePanelref = React.useRef(null)
  const [vehiclefound, setVehicleFound] = React.useState(false)
  const vehicleFoundRef = React.useRef(null)
const [waitingDriver, setWaitingDriver] = React.useState(false)
const waitingDriverRef = React.useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(pickup, destination)
  }


  useGSAP(() => {
    if (panel) {
      gsap.to(panelref.current, {
        height: "70%",
        padding: "2%",
      })
      gsap.to(panelclose.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelref.current, {
        height: "0%",
        padding: "0%",
      })
      gsap.to(panelclose.current, {
        opacity: 0,
      })
    }
  }, [panel])


 useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclepanelref.current, {
        transform :"translateY(0%)"
     })
    }
    else {
      gsap.to(vehiclepanelref.current, {
        transform :"translateY(100%)"
      })
    }
  },[vehiclePanelOpen]
  )


 useGSAP(() => {
    if (confirmVehiclePanel) {
      gsap.to(ConfirmVehiclePanelref.current, {
        transform :"translateY(0%)"
     })
    }
    else {
      gsap.to(ConfirmVehiclePanelref.current, {
        transform :"translateY(100%)"
      })
    }
  },[confirmVehiclePanel])


 useGSAP(() => {
    if (vehiclefound) {
      gsap.to(vehicleFoundRef.current, {
        transform :"translateY(0%)"
     })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform :"translateY(100%)"
      })
    }
  },[vehiclefound]
  )


 useGSAP(() => {
    if (waitingDriver) {
      gsap.to(waitingDriverRef.current, {
        transform :"translateY(0%)"
     })
    }
    else {
      gsap.to(waitingDriverRef.current, {
        transform :"translateY(100%)"
      })
    }
  },[waitingDriver]
  )
  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
      <div  onClick={()=>{
        setVehiclePanelOpen(false)
      }} className="h-screen w-screen">
        <img className="h-full object-cover w-full" src="https://img.freepik.com/free-vector/street-map-desing-with-catering-sector-pins_23-2147618798.jpg?semt=ais_hybrid&w=740" alt="Map background" />
      </div>
      <div className="h-screen absolute  top-0 justify-end flex flex-col w-full">
        <div className="h-[30%] p-5 bg-white relative">
        <h5 className="absolute top-5 right-4 opacity-0" onClick={()=>{
          setPanel(false)
        }} ref={panelclose}>
        <i className="ri-arrow-down-line"></i>
        </h5>
          <h4 className="text-3xl font-semibold mb-3">Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className="absolute h-16 top-[43%] left-[8%] w-1 bg-gray-900 rounded-full"></div>
            <input 
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-3"
              value={pickup}
              type="text"
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanel(true)}
              placeholder="Pickup location"
            />
            <input 
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full"
              value={destination}
              type="text"
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination"
            />
          </form>
        </div>
        <div 
          ref={panelref} 
          className="bg-white h-0 "
        >
          <LocationSearchPanel   panel={panel} setPanel={setPanel} vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div  ref={vehiclepanelref}className='fixed z-10  bg-white bottom-0 translate-y-full w-full py-8 px-3 pt-12  '>
      <VehiclePanel setconfirmVehiclePanel={setconfirmVehiclePanel} setVehiclePanelOpen={setVehiclePanelOpen}></VehiclePanel>
      </div>
      <div  ref={ConfirmVehiclePanelref} className='fixed z-10  bg-white bottom-0 translate-y-full w-full py-6 px-3 pt-12  '>
<ConfirmedVehicle setconfirmVehiclePanel={setconfirmVehiclePanel} setVehicleFound={setVehicleFound}></ConfirmedVehicle>      </div>
      <div  ref={vehicleFoundRef} className='fixed z-10  bg-white bottom-0 translate-y-full w-full py-6 px-3 pt-12  '>
<LookingForDriver setVehicleFound={setVehicleFound}></LookingForDriver>     </div>
      <div ref={waitingDriverRef}  className='fixed z-10  bg-white bottom-0  translate-y-full w-full py-6 px-3 pt-12  '>
        <WaitingforDriver setWaitingDriver={setWaitingDriver} ></WaitingforDriver>     </div>
    </div>
  )
}

export default Home
