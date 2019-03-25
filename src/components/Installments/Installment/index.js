import React from 'react'

// STYLED-COMPONENT
import { InstallmentCard, PaidImg } from './style';

// IMGS
import Paid from '../../../images/paid.png';
import PayNow from '../../../images/pay_now.png';

const Installment = ({ value, formatedValue, payd, dueDate }) => {
  return (
    <InstallmentCard payd={payd}>
      <div>
        <p>{ formatedValue }</p>
        <p>Data: { dueDate }</p>
      </div>
      {payd ? <PaidImg src={Paid} alt="Paid"/> : <PaidImg src={PayNow} alt="Paid"/>}
    </InstallmentCard>
  )
}

export default Installment
