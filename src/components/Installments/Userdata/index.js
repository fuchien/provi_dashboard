import React from 'react'

// STYLED-COMPONENTS
import { UserDatas, UserDatasTitle } from './style';

const Userdata = ({ amountPayd, amountTaken, totalAmountInTaxes, monthlyInterest }) => {
  return (
    <div style={{
      minWidth: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#00bae8',
      padding: '5px',
      border: '2.5px solid #00bae8'
    }}>
      <UserDatas>
        <UserDatasTitle>Valor total emprestado: </UserDatasTitle>{amountTaken}
        <UserDatasTitle>Valor total pago: </UserDatasTitle>{amountPayd}
      </UserDatas>
      <UserDatas>
        <UserDatasTitle>Taxa de juros mensal: </UserDatasTitle>{monthlyInterest}
        <UserDatasTitle>Valor total de juros no empréstimo: </UserDatasTitle>{totalAmountInTaxes}
      </UserDatas>
    </div>
  )
}

export default Userdata
