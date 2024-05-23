import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

const Trending = () => {

 
  return (
    <>
      <section className='py-10'> 
        <div className="container">
            <SectionHeader/>

            <div className="grid mt-10 gap-10 md:grid-cols-[1fr_2fr]">
            <Card/>
            <div className='grid gap-10 md:grid md:grid-cols-2'>
              {/* try */}

            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl">
                    <div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
                        <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-will-unveil-a-fiercer-look-sound-and-attitude-at-their-grand-two-part-launch-this-June-on-KTX.PH-2.jpg" alt="" className="w-full object-cover h-[300px] block   transition-transform hover:scale-110" />
                    </div>
                <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs'>Travel</small>
                    <h3 className='mt-4 mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </div>
            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl">
                    <div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
                        <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-will-unveil-a-fiercer-look-sound-and-attitude-at-their-grand-two-part-launch-this-June-on-KTX.PH-2.jpg" alt="" className="w-full object-cover h-[300px] block   transition-transform hover:scale-110" />
                    </div>
                <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs'>Travel</small>
                    <h3 className='mt-4 mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </div>
            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl">
                    <div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
                        <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-will-unveil-a-fiercer-look-sound-and-attitude-at-their-grand-two-part-launch-this-June-on-KTX.PH-2.jpg" alt="" className="w-full object-cover h-[300px] block   transition-transform hover:scale-110" />
                    </div>
                <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs'>Travel</small>
                    <h3 className='mt-4 mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </div>
            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl">
                    <div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
                        <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-will-unveil-a-fiercer-look-sound-and-attitude-at-their-grand-two-part-launch-this-June-on-KTX.PH-2.jpg" alt="" className="w-full object-cover h-[300px] block   transition-transform hover:scale-110" />
                    </div>
                <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs'>Travel</small>
                    <h3 className='mt-4 mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </div>
          

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Trending
