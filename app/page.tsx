
import React from 'react'
import NavBar from '@/components/navbar'
import Hero from '@/components/hero'
import AboutMe from '@/components/aboutme'
import Service from '@/components/service'
import Development from '@/components/development'
import Portfolio from '@/components/portfolio'
import Footer from '@/components/footer'


function page() {
  return (
    <><NavBar /><Hero /><AboutMe/><Service/><Development/><Portfolio/><Footer/></>
  )
}

export default page