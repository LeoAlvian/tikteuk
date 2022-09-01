import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { topics } from '../utils/constants'

const Discover = () => {

  const router = useRouter()
  const { topic } = router.query

  const activeTopicStyle = 'xl:border-2 hover:bg-primary xl:border-accent px-4 py-1 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-accent'

  const topicStyle = 'xl:border-2 hover:bg-primary xl:border-grey-300 px-4 py-1 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black'

  return (
    <div className='xl:border-b-2 xl:border-grey-200 pb-6'>
      <p className="text-gray-500 font-semibold m-3 mt-3 hidden xl:block">
        Popular Topics
      </p>
      <div className="flex gap-3 flex-wrap">
        {topics.map((item) =>(
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topic === item.name ? activeTopicStyle : topicStyle}>
              <span className='font-bold text-xl xl:text-sm'>
                {item.icon}
              </span>
              <span className='text-sm hidden xl:block capitalize'>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover