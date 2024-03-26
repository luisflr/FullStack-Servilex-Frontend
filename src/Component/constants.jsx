import logoMastercard from '../assets/Imagenes/Mastercard-53px/mc_symbol_opt_53_3x.png'
import logoAmex from '../assets/Imagenes/amexlogo.png'
import logoVisa from '../assets/Imagenes/visaLogo.png'

export const typeCards = {
  'VISA': logoVisa,
  'AMEX': logoAmex,
  'MASTERCARD': logoMastercard
}

export const blankCard = {

  number: Math.round(Math.random() * (99999999 - 11111111 ) + 11111111),
  name_of_owner: '',
  email_of_owner: '',
  phone: '',
  credit: '500.00',
  type_of_card: 'VISA'
}
export const cardOptions = ['VISA', 'MASTERCARD', 'AMEX']
