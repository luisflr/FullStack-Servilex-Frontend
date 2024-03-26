import {useEffect, useState} from 'react'

import { blankCard } from '../Component/constants';
import { getCardById, getListCards } from '../Services/CardServices';

function useApp() {
  const [cards, setCards] = useState();
  const [cardInfo, setCardInfo] = useState(null);
  const [isNewCard, setIsNewCard] = useState(false);
  
  const getAllCards = async () => {
    try {
      const data = await getListCards()
      setCards(data)
    } catch (error) {
      console.error(error)
    }
  }

  const showCardInfo = async (id) => {
    try {
      const data = await getCardById(id)
      setCardInfo(data)
    } catch (error) {
      console.error(error)
    }
  }

  const createNewCard = () => {
    setCardInfo(blankCard)
    setIsNewCard(true)
  }

  useEffect(() => {
    getAllCards()
  },[])
  return {
    /**States */
    cards,
    cardInfo,
    isNewCard,
    /**State Functions */
    
    /**Functions */
    createNewCard,
    showCardInfo
  }
}

export default useApp