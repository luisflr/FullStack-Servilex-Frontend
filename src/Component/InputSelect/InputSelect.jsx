import React from 'react'
import { cardOptions } from '../constants'

const InputSelect = ({ cardInfo, setCardInfo }) => {
  return (
    <div className="max-w-sm mb-2">
      <label htmlFor="cardTypes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a type of card</label>
      <select
        id="cardTypes" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={cardInfo.type_of_card}
        onChange={ev => setCardInfo({
          ...cardInfo, 
          type_of_card: ev.target.value
        })}
      >
        {cardOptions.map((typeCard, index) => 
        <option key={`option-${index}`} value={typeCard} >{typeCard.toLowerCase()}</option>)}
      </select>
    </div>
  )
}

export default InputSelect