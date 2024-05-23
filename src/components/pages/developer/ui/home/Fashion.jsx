import React from 'react'
import Card from './Card'
import SectionHeader from './SectionHeader'

const Fashion = () => {
  return (
    <>
      <section className='feature placeholder-gray-100'>
    <div className="container ">
        <SectionHeader title='Fashion & Style' hasLink={true} link="/feature"/>
      <div className="grid mt-10 gap-10 md:grid-cols-3 md:gap-10">
        <Card height="sm"/>
        <Card height="sm"/>
        <Card height="sm"/>
        <Card height="sm"/>
        <Card height="sm"/>
        <Card height="sm"/>
      </div>
    </div>
    </section>
    </>
  )
}

export default Fashion
