import React from 'react'
import UIHeader from '../partials/UIHeader'
import UIFooter from '../partials/UIFooter'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Single = () => {
  return (
    <>
        <UIHeader/>
        <div className='banner my-5 mb-10'>
            <div className="container">
                <h1 className='max-w-[800px] mx-auto text-center py-10 bg-header bg-opacity-10 rounded-lg border-2 border-header border-opacity-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
        </div>

    <div className="container">
        <div className='grid md:grid-cols-[2fr_1fr] gap-10'>
            <article>
            <div className='mb-10'>
            <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
            text-xs mb-3 inline-block'>Travel</small>

                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

                <div className='flex justify-between items-center mt-4'>
                    <div className='flex gap-3 items-center'>
                        <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-10 object-cover mb-0' />
                        <small className='mb-0 text-nowrap opacity-60'>Johnny Hale</small>
                    </div>
                    <small className='opacity-60'>August 23, 2022</small>
                </div>
            </div>

                {/* articles h and p */}
                <img src="https://via.placeholder.com/700x500" alt="" />

                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, tenetur.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, ducimus minima voluptatem optio iste culpa quisquam aliquam itaque, quas quibusdam obcaecati esse modi, atque odit officiis voluptates? Accusamus, architecto nulla.</p>

                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste labore sed voluptas voluptatibus illo impedit, pariatur accusantium dolores asperiores culpa? Et aspernatur soluta inventore ullam, assumenda fugiat vero vel ad.</p>
                <img src="https://via.placeholder.com/700x500" alt="" />

                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, aspernatur!</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, aspernatur!</li>
                </ul>
            </article>

            <aside className=''>
                <div className='sticky top-4'>
                    <div className="card__lg shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-5 ">
                    <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-[100px] mx-auto object-cover mb-5' />
                    <h3 className='text-center'>jhonny hale</h3>
                    <p className='text-center mb-5 !leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod necessitatibus cupiditate? Possimus optio deleniti enim quas incidunt debitis porro atque, nobis, non harum, cupiditate voluptas doloremque earum doloribus consectetur?</p>

                    <ul className='flex justify-center gap-4'>
                        <li><Link className='text-2xl'><FaFacebook/></Link></li>
                        <li><Link className='text-2xl'><FaTwitter/></Link></li>
                        <li><Link className='text-2xl'><FaInstagram/></Link></li>
                        <li><Link className='text-2xl'><FaYoutube/></Link></li>
                    </ul>

                    </div>

                    {/* latest post */}
                    <div className="card__lg shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-5 ">
                        <h2>Latest Post</h2>

                        <div className='grid  grid-cols-[90px_1fr] gap-3 mb-4'>
                            <img src="https://via.placeholder.com/700x500" alt=""  className='h-full w-full object-cover'/>
                            <div>
                                <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                                <small>May 5, 2024</small>
                            </div>
                        </div>
                        <div className='grid  grid-cols-[90px_1fr] gap-3 mb-4'>
                            <img src="https://via.placeholder.com/700x500" alt=""  className='h-full w-full object-cover'/>
                            <div>
                                <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                                <small>May 5, 2024</small>
                            </div>
                        </div>

                    </div>
                </div>
            </aside>
        </div>
    </div>

        <UIFooter/>
    </>
  )
}

export default Single
