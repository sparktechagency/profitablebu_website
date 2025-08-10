/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Hero from '../../components/Home/Hero'
import BusinessCard from '../../components/Home/BusinessCard'
import Category from '../../components/Home/Category'
import Country from '../../components/Home/Country'
import SimpleProcess from '../../components/Home/SimpleProcess'
import Review from '../../components/Home/Review'
import FeaturedBusinesses from '../../components/Home/FeaturedBusinesses'
import FeaturedFranchises from '../../components/Home/FeaturedFranchises'
import FeaturedBusinessAssets from '../../components/Home/FeaturedBusinessAssets'

export const HomePage = () => {
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <div>
      <Hero></Hero>
      <div className='container m-auto lg:px-4 px-4'>
        <BusinessCard></BusinessCard>
       {/* <div className='mt-16'>
         <FeaturedBusinesses></FeaturedBusinesses>
       </div>
        <div className='mt-16'>
          <FeaturedFranchises></FeaturedFranchises>
        </div>
        <div className='mt-16'>
          <FeaturedBusinessAssets></FeaturedBusinessAssets>
        </div> */}
        <Category></Category>
        <Country></Country>
        <SimpleProcess></SimpleProcess>
        <Review></Review>
      </div>
    </div>
  )
}
