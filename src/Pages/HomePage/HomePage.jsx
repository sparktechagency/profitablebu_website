/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../../components/Home/Hero'
import BusinessCard from '../../components/Home/BusinessCard'
import Category from '../../components/Home/Category'

export const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <div className='container m-auto'>
        <BusinessCard></BusinessCard>
        <Category></Category>
      </div>
    </div>
  )
}
