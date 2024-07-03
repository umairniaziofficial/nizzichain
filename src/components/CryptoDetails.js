import React from 'react'
import SearchBar from '../components/SearchBar'
import CryptoCoins from '../components/CryptoCoins'
export default function CryptoDetails() {
  return (
    <div className='w-[70%] pb-8 mx-auto '>
        <SearchBar/>
        <CryptoCoins/>
    </div>
  )
}
