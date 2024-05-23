import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'
import Markdown from 'react-markdown';
import useQueryData from '../../../../custom-hook/useQueryData';
import { devBaseImgUrl } from '../../../../helpers/functions-general';

const Trending = () => {

  const {
    isLoading,
    isFetching,
    error,
    data: post,
  } = useQueryData (
   "/v1/post", // endpoint
   "get", // method
   "post", // key
   
  );
 
  return (
    <>
      <section className='py-10'> 
        <div className="container">
            <SectionHeader/>

            <div className="grid mt-10 gap-10 md:grid-cols-[1fr_2fr]">
            <Card/>
            <div className='grid gap-10 md:grid md:grid-cols-2'>
              {/* try */}
              {!isLoading && post?.data.map(
                    (item, key) => (
            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl" key={key}>
                    <div className='overflow-hidden rounded-xl h-[250px] mb-5 -mt-10'>
                        <img src={`${devBaseImgUrl}/${item.post_image}`} alt="" className="w-full object-cover h-[300px] block   transition-transform hover:scale-110" />
                    </div>
                <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                    text-xs'>Travel</small>
                    <h3 className='mt-4 mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>

                    <Markdown>{item.post_article}</Markdown>


            </div>
             )
            ) } 
           
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Trending
