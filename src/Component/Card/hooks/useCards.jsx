import { useEffect, useState } from 'react'

import { createCard, deleteCard, updateCard } from '../../../Services/CardServices';

const useCards = ({ cardInfo, newCard }) => {
  const [cardInfoUpdate, setCardInfoUpdate] = useState(cardInfo)
  const [isLoading, setisLoading] = useState(false)
  const [blanksFieldsError, setBlanksFieldsError] = useState(false)

  const handleCardInfo = (ev, typeInput) => {
    switch (typeInput) {
      case 'name_of_owner':
        setCardInfoUpdate({
          ...cardInfoUpdate, 
          name_of_owner: ev.target.value
        })
        break;
      case 'email_of_owner':
        setCardInfoUpdate({
          ...cardInfoUpdate, 
          email_of_owner: ev.target.value
        })
        break;
      case 'phone':
        setCardInfoUpdate({
          ...cardInfoUpdate, 
          phone: ev.target.value
        })
        break;
      default:
        break;
    }
  }

  const updateInfo = async () => {
    try {
      await updateCard(cardInfoUpdate, cardInfoUpdate.id)
      setisLoading(false)
      window.location.href='/'
    } catch (error) {
      console.error(error)
      setisLoading(false)
    }
  }

  useEffect(() => {
    if (isLoading == true) {
      newCard ? createNewCard() : updateInfo()
    }
  }, [isLoading])

  const createNewCard = async () => {
    const validEmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const validInfo = cardInfoUpdate.name_of_owner !== '' && cardInfoUpdate.email_of_owner && cardInfoUpdate.phone !== '' && validEmailRegex.test(cardInfoUpdate.email_of_owner)

    if (!validInfo ) {
      setisLoading(false)
      setBlanksFieldsError(true)
  }
    else {
      setBlanksFieldsError(false)
      try {
        await createCard(cardInfoUpdate)
        setisLoading(false)
        window.location.href='/'
      } catch (error) {
        console.error(error)
        setisLoading(false)
      }
    }
  }

  const deleteOneCard = async () => {
    try {
      await deleteCard(cardInfoUpdate.id)
      setisLoading(false)
      window.location.href='/'
    } catch (error) {
      console.error(error)
      setisLoading(false)
    }
  }

  return {
    /** States */
    cardInfoUpdate,
    blanksFieldsError,

    /** State Functions */
    setCardInfoUpdate,
    setisLoading,

    /** Functions */
    handleCardInfo,
    deleteOneCard
  }
}

export default useCards