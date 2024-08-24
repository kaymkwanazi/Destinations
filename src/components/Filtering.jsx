import React from 'react'
import { SearchBar } from './SearchBar'

export const Filtering = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-semibold mt-3'>Filter</h3>
        </div>
        <div>
            <SearchBar/>
        </div>
    </div>
  )
}
