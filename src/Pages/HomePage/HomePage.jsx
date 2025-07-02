/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../../components/Home/Hero'
import BusinessCard from '../../components/Home/BusinessCard'
import Category from '../../components/Home/Category'
import Country from '../../components/Home/Country'
import SimpleProcess from '../../components/Home/SimpleProcess'
import Review from '../../components/Home/Review'

export const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <div className='container m-auto'>
        <BusinessCard></BusinessCard>
        <Category></Category>
        <Country></Country>
        <SimpleProcess></SimpleProcess>
        <Review></Review>
      </div>
    </div>
  )
}
