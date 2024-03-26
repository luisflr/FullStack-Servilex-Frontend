import List from './Component/Lists/List'

import './App.css'
import Card from './Component/Card/Card';
import Loader from './Component/Loader/Loader';

import useApp from './hooks/useApp';

function App() {

  const {
    cards, cardInfo, isNewCard,
    createNewCard, showCardInfo} = useApp()

  return (
    <div className='flex w-full h-screen bg-black justify-center items-center'>
      <div>
        {cards 
          ? cardInfo
            ? <div>
              <button
                className='text-white mb-4'
                onClick={() => {
                  window.location.href='/'
                }}>Back</button>
                <Card cardInfo={cardInfo} newCard={isNewCard}/>
              </div>
            : <>
              <List creditCardsInfo={cards} showCardInfo={showCardInfo}/>
              <button onClick={createNewCard} className='text-white'> Create new card </button>
            </>
          : <Loader />
        }
        
      </div>
    </div>
  )
}

export default App
