import Link from 'next/link'
import React from 'react'

interface MenuItemsProps{
    title:string;
    address:string;
}

const MenuItems: React.FC<MenuItemsProps>=({title,address}) =>{
  return (
    <Link href={address}>
    <h1 className='hover:text-amber-500'>
        {title}
    </h1>
    </Link>
  )
}
export default MenuItems;
