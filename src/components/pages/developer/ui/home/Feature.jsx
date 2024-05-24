import React from 'react'
import Card from './Card'
import SectionHeader from './SectionHeader'
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerWindow from '../partials/spinners/SpinnerWindow';
import Post from '../../dashboard/post/Post';

const Feature = () => {
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

 

  const getFeatured = () => post?.data.filter(item => item.post_category_id === 3)
  console.log(getFeatured());

  return (
    <>
    <section className='feature placeholder-gray-100 mb-10'>
    <div className="container ">
        <SectionHeader title='Feature Now' hasLink={true} link="/feature"/>
      <div className="grid mt-10 gap-10 md:grid-cols-3 md:gap-10">
        {isLoading ? <SpinnerWindow/> : getFeatured()?.map((item, key)=>(
          <Card height="sm" item={item} key={key}/>
        ))}

      </div>
    </div>
    </section>
    </>
  )
}

export default Feature
