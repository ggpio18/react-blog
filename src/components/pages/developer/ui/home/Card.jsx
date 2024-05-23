import React from 'react'

const Card = ({height="lg"}) => {
  return (
    <div className="card__lg shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl">

    <div className={`overflow-hidden rounded-xl mb-5 -mt-10 ${height === "lg" ? "h-[500px]" : "h-[300]" }`}>

    <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-will-unveil-a-fiercer-look-sound-and-attitude-at-their-grand-two-part-launch-this-June-on-KTX.PH-2.jpg" alt="" className={`w-full object-cover $ rounded-xl  h-full overflow-hidden  hover:scale-110 transition-transform`}/>
    </div>


    <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
        text-xs'>Travel</small>

        <h3 className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <p className='line-clamp-3 text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores perspiciatis officia atque voluptatibus, magnam doloribus, neque perferendis quaerat esse nobis maiores numquam quod sequi. Hic debitis ullam alias blanditiis?</p>

        <div className='flex justify-between items-center mt-4'>
            <div className='flex gap-3 items-center'>
                <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-10 object-cover' />
                <small className='mb-0 text-nowrap opacity-60'>Johnny Hale</small>
            </div>
            <small className='opacity-60'>August 23, 2022</small>
        </div>
    </div>

  )
}

export default Card