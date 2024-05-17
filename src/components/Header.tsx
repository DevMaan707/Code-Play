import React from 'react'
import MenuItems from './MenuItems'

export default function Header() {
  return (
   <div className='flex justify-between items-center mx-auto  p-3 bg-light-bg' >
    <div className='px-4'>
        <h1>
            Code Play
        </h1>
    </div>
    <div className='flex gap-4 px-4'>
        <MenuItems title='Home' address='/' />
        <MenuItems title='Blogs' address='/blogs' />
        <MenuItems title='Ranks' address='/ranks' />
        <MenuItems title='About' address='/abouts' />
    </div>
   </div>
  )
}
