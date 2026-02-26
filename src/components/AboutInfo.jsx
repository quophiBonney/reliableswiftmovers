import React from 'react'
import {ChartNoAxesCombined, Van} from 'lucide-react'

const AboutInfo = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-10">
      <div>
        <img src={"https://images.pexels.com/photos/6169010/pexels-photo-6169010.jpeg"} alt="" className="shadow-xl rounded-lg"/>
      </div>
      <div className="space-y-4">
        <p className="text-red-500 text-base uppercase lg:mt-16">About -</p>
        <h4 className="text-3xl font-bold">We are leader in moving companies in Canada</h4>
        <p className="text-base">All Canada Van Lines (ACVL), among top moving companies in Alberta, provides tailored relocations across Canada with personalized attention. Our specialists securely pack, transport, and unpack using top techniques. With 2000+ satisfied customers, trust us for hassle-free moves tailored to your needs. We handle the details so you can move forward confidently</p>
        <div className="flex gap-10 mt-10">
            <div className="flex flex-col">
            <div className="flex gap-3 items-center">
               <div className="bg-red-500 p-3 rounded">
                 <ChartNoAxesCombined color={"white"} size={50}/>
               </div>
              <div className="flex flex-col">
                 <p className="text-red-500 text-3xl font-bold">3000+</p>
               <p className="m-auto">Projects Done</p>
              </div>
               </div>
            </div>
            <div>
              <div className="flex gap-3 items-center">
               <div className="bg-red-500 p-3 rounded">
                 <Van color={"white"} size={50}/>
               </div>
              <div className="flex flex-col">
                  <p className="text-red-500 text-3xl font-bold">2000+</p>
               <p className="text-center">Satisfied Clients</p>
              </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
