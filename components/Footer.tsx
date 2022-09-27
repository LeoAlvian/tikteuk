import Link from 'next/link'
import React from 'react'

import { footerList1, footerList2, footerList3 } from '../utils/constants'

const Footer = () => {

  const List = ({items, mt} : {items: string[], mt: boolean}) => (
    <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
        {items.map((item) => (
          <p key={item} className="text-gray-400 text-sm hover:underline cursor-pointer">
            {item}
          </p>
        ))}
      </div>
  )

  return (
    <div className='mt-6 hidden xl:block'>
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />
      <a target="_blank" rel="noreferrer" href='https://www.instagram.com/l__alvian'>
        <p className='text-gray-500 text-sm mt-5 hover:underline cursor-pointer'>&copy; 2022 L.A TikTeuk</p>
      </a>
    </div>
  )
}

export default Footer