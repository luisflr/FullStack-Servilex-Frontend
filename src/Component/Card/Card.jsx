import { typeCards } from '../constants';
import Loader from '../Loader/Loader';
import InputSelect from '../InputSelect/InputSelect';
import useCards from './hooks/useCards';
import DeleteIcon from '../../assets/icons/DeleteIcon';

const Card = ({cardInfo, newCard}) => {
  const  regex = /^(\d{2})|\d?\d?(\d{7}$)|(\d)/g
  let encriptedNumber = cardInfo.number.toString();
  encriptedNumber = encriptedNumber.replace(regex,"$1*$2");

  const {
    cardInfoUpdate, isLoading, blanksFieldsError,
    setCardInfoUpdate, setisLoading,
    handleCardInfo, deleteOneCard
  } = useCards({cardInfo, newCard})

  return (
    <div 
      className="md:flex-row md:max-w-xl relative
      flex flex-col items-center border rounded-lg shadow 
      cursor-pointer border-gray-700 bg-gray-800 py-6
      px-8 max-h-[380px] max-w-[500px]
      ">
      <button onClick={deleteOneCard} className='absolute top-5 right-5 hover:scale-90'>
        <DeleteIcon wrapperClassName='fill-white w-8 h-8 hover:scale-90'/>
      </button>
      <div className='h-full flex items-start mr-4 pt-8'>
        <img src={typeCards[cardInfoUpdate.type_of_card]} className='w-12'/>
      </div>
      <div className="flex flex-col justify-between pl-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{newCard ? cardInfo.number : encriptedNumber}</h5>
        <div className="mb-1 font-normal flex">
          <span className=' text-gray-200 font-semibold mr-4'>
            Owner's name:
          </span>
          <input 
            className="max-h-[25px] w-fit text-white bg-transparent hover:bg-gray-700" 
            type='text' 
            value={cardInfoUpdate.name_of_owner || ''} 
            onChange={ev => handleCardInfo(ev, 'name_of_owner')}
          />
        </div>
        <div className="mb-3 font-normal flex">
          <span className=' text-gray-200 font-semibold mr-4'>
            Owner's email:
          </span>
          <input 
            className="max-h-[25px] w-fit text-white bg-transparent hover:bg-gray-700" 
            type="email" pattern=".+@example\.com" size="20" required
            value={cardInfoUpdate.email_of_owner || ''} 
            onChange={ev => handleCardInfo(ev, 'email_of_owner')}
          />
        </div>
        <div className="mb-3 font-normal flex">
          <span className=' text-gray-200 font-semibold mr-4'>
            Owner's phone:
          </span>
          <input 
            className="max-h-[25px] w-fit text-white bg-transparent hover:bg-gray-700" 
            type='number' 
            value={cardInfoUpdate.phone || ''} 
            onChange={ev => handleCardInfo(ev, 'phone')}
          />
        </div>
        <div className="mb-3 font-normal flex">
          <span className=' text-gray-200 font-semibold mr-4'>
            Credit:
          </span>
          <p className="max-h-[25px] w-fit text-gray-400 bg-transparent">
            {cardInfoUpdate.credit || ''}
          </p>
        </div>

        {blanksFieldsError && <span className='text-red-400 text-md'> Asegúrate que todos los campos estén correctamente llenos</span>}
        {newCard &&
          <InputSelect
            cardInfo={cardInfoUpdate}
            setCardInfo={setCardInfoUpdate}
          />
        }
        <div className='w-full flex justify-end'>
          {isLoading
            ? <Loader />
            : <button 
               onClick={() => {setisLoading(true)}} 
               className='text-white w-fit'> 
               {newCard ? 'Create card' : 'Update info'}
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default Card