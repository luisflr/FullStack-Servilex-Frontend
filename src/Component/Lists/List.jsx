import React from 'react'
import { typeCards } from '../constants'
const List = ({ creditCardsInfo, showCardInfo }) => {
  return (
    <>
    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Credit Cards</h2>
    <ul className="max-w-md space-y-4 text-gray-500 list-inside dark:text-gray-400">
        {creditCardsInfo.map((cardInfo, index) => 
          <div key={`container-${index}`}>
            <li>
              <button
                className='border-none flex pl-6 py-4 items-center h-[120px] w-[300px] rounded-xl hover:bg-[#091631a4]'
                onClick={() =>showCardInfo(cardInfo.id)}
              >
                <div className='h-full flex items-start mr-4'>
                  <img src={typeCards[cardInfo.type_of_card]} className='w-12'/>
                </div>
                <div className='flex flex-col text-start'>
                  <p>{cardInfo.name_of_owner}</p>
                  <p>{cardInfo.email_of_owner}</p>
                  <p>{cardInfo.type_of_card}</p>
                  <p>{cardInfo.phone}</p>
                </div>
              </button>
            </li>
            <hr className='border border-[#97969680] mt-6'/>
          </div>
        )}
    </ul>
    </>
  )
}

export default List