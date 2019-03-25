import React, { Component } from 'react';

// STYLED-COMPONENTS
import { Container, Title } from './style';

// COMPONENTS
import Installments from '../../components/Installments'
import Header from '../../components/Header'

// REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as InstallmentsActions } from "../../store/ducks/installments";

class Dashboard extends Component {

  componentDidMount () {
    this.props.addInstallmentsRequest()
  }

  render() {
    return (
      <Container>
        <Header />
        <Title>Empréstimos</Title>
        <Installments {...this.props.installments.data} />
        {/* {this.props.installments.data.installments.map(installment => <p>{installment.formatedValue}</p>)} */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  installments: state.installments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(InstallmentsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);