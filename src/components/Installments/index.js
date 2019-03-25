import React from 'react'

// STYLED-COMPONENTS
import { Container, InstallmentsList } from './style';

// IMAGES
import User from '../../images/user.png';

// COMPONENTS
import Installment from './Installment'
import Userdata from './Userdata'

const Installments = props => {
  return (
    <Container>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <img style={{
          maxHeight: '25px',
          marginRight: '5px'
        }} src={User} alt="User" /><h2>ID do usuário: {props.UserId}</h2>
      </div>
      <Userdata {...props} />
      <InstallmentsList>
        {props.installments.length ? props.installments.map((installment, index) => (
          <Installment key={`${installment.dueDate}${index}`} {...installment} />
        )) : null}
      </InstallmentsList>
    </Container>
  )
}

export default Installments
