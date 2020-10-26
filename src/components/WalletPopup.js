import React from "react";
import { connect } from 'react-redux'
import * as actionTypes from "store/actions";

// reactstrap components
import {
  Modal, 
  ModalHeader, 
  ModalBody, 
  Row, 
  Col
} from "reactstrap";

class WalletPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  componentWillMount() {
    if (!this.props.wallet) {
      this.togglePopup();
    }
  }
  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  onBrowseWallet = () => {
    this.togglePopup();
  }
  onWalletConnect = () => {
    this.togglePopup();
  }
  render() {
    return (
      <Modal isOpen={this.state.isOpen} toggle={this.togglePopup} size="lg" className="wallet-popup">
        <ModalHeader toggle={this.togglePopup} close={
          <button className="close" onClick={this.togglePopup}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10L10 30" stroke="#798A9E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 10L30 30" stroke="#798A9E" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        }>Choose a wallet</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="6" xs="12">
              <div className="cus-card cursor-pointer active wallet-pan mb-45" onClick={this.onBrowseWallet}>
                <div className="wallet-pan-icon">
                  <svg width="58" height="42" viewBox="0 0 58 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="21" r="21" fill="white"/>
                  <path d="M29.125 32H2.875C1.28975 32 0 30.7103 0 29.125V12.875C0 11.2897 1.28975 10 2.875 10H29.125C30.7103 10 32 11.2897 32 12.875V29.125C32 30.7103 30.7103 32 29.125 32ZM2.875 12C2.3925 12 2 12.3925 2 12.875V29.125C2 29.6075 2.3925 30 2.875 30H29.125C29.6075 30 30 29.6075 30 29.125V12.875C30 12.3925 29.6075 12 29.125 12H2.875Z" fill="#798A9E"/>
                  <path d="M4.57143 15.7857C4.57143 15.1545 5.0831 14.6429 5.71429 14.6429H8C8.63118 14.6429 9.14286 15.1545 9.14286 15.7857V18.0714C9.14286 18.7026 8.63118 19.2143 8 19.2143H5.71429C5.0831 19.2143 4.57143 18.7026 4.57143 18.0714V15.7857Z" fill="#798A9E"/>
                  <path d="M20.5708 23.8569C20.3541 23.8569 20.1358 23.7868 19.9524 23.6423C19.5187 23.3003 19.4442 22.6716 19.7861 22.2378C20.0665 21.8823 20.2146 21.4543 20.2146 21.0001C20.2146 20.5459 20.0665 20.1178 19.7862 19.7623C19.4443 19.3286 19.5188 18.6998 19.9525 18.3578C20.3861 18.016 21.015 18.0903 21.3569 18.5241C21.91 19.2258 22.2146 20.1051 22.2146 21.0001C22.2146 21.895 21.91 22.7743 21.3568 23.476C21.1595 23.7263 20.8666 23.8569 20.5708 23.8569Z" fill="#798A9E"/>
                  <path d="M24.1962 26.3392C23.9582 26.3392 23.7195 26.2548 23.5285 26.0834C23.1175 25.7146 23.0833 25.0823 23.4522 24.6713C24.3582 23.6617 24.8571 22.3578 24.8571 20.9998C24.8571 19.6418 24.3582 18.3379 23.4522 17.3283C23.0833 16.9172 23.1175 16.285 23.5285 15.9162C23.9396 15.5474 24.5718 15.5815 24.9407 15.9925C26.1765 17.3697 26.8571 19.148 26.8571 20.9998C26.8571 22.8516 26.1765 24.6299 24.9407 26.007C24.7433 26.2271 24.4703 26.3392 24.1962 26.3392Z" fill="#798A9E"/>
                  </svg>
                </div>
                <div className="wallet-pan-title">
                  Browse Wallet
                </div>
                <div className="wallet-pan-text">
                  Use MetaMask or imToken to connect to Passport
                </div>
              </div>
            </Col>
            <Col md="6" xs="12">
              <div className="cus-card cursor-pointer active wallet-pan" onClick={this.onWalletConnect}>
                <div className="wallet-pan-icon">
                  <svg width="58" height="42" viewBox="0 0 58 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="21" r="21" fill="white"/>
                  <path d="M29.125 32H2.875C1.28975 32 0 30.7103 0 29.125V12.875C0 11.2897 1.28975 10 2.875 10H29.125C30.7103 10 32 11.2897 32 12.875V29.125C32 30.7103 30.7103 32 29.125 32ZM2.875 12C2.3925 12 2 12.3925 2 12.875V29.125C2 29.6075 2.3925 30 2.875 30H29.125C29.6075 30 30 29.6075 30 29.125V12.875C30 12.3925 29.6075 12 29.125 12H2.875Z" fill="#798A9E"/>
                  <path d="M4.57143 15.7857C4.57143 15.1545 5.0831 14.6429 5.71429 14.6429H8C8.63118 14.6429 9.14286 15.1545 9.14286 15.7857V18.0714C9.14286 18.7026 8.63118 19.2143 8 19.2143H5.71429C5.0831 19.2143 4.57143 18.7026 4.57143 18.0714V15.7857Z" fill="#798A9E"/>
                  <path d="M20.5708 23.8569C20.3541 23.8569 20.1358 23.7868 19.9524 23.6423C19.5187 23.3003 19.4442 22.6716 19.7861 22.2378C20.0665 21.8823 20.2146 21.4543 20.2146 21.0001C20.2146 20.5459 20.0665 20.1178 19.7862 19.7623C19.4443 19.3286 19.5188 18.6998 19.9525 18.3578C20.3861 18.016 21.015 18.0903 21.3569 18.5241C21.91 19.2258 22.2146 20.1051 22.2146 21.0001C22.2146 21.895 21.91 22.7743 21.3568 23.476C21.1595 23.7263 20.8666 23.8569 20.5708 23.8569Z" fill="#798A9E"/>
                  <path d="M24.1962 26.3392C23.9582 26.3392 23.7195 26.2548 23.5285 26.0834C23.1175 25.7146 23.0833 25.0823 23.4522 24.6713C24.3582 23.6617 24.8571 22.3578 24.8571 20.9998C24.8571 19.6418 24.3582 18.3379 23.4522 17.3283C23.0833 16.9172 23.1175 16.285 23.5285 15.9162C23.9396 15.5474 24.5718 15.5815 24.9407 15.9925C26.1765 17.3697 26.8571 19.148 26.8571 20.9998C26.8571 22.8516 26.1765 24.6299 24.9407 26.007C24.7433 26.2271 24.4703 26.3392 24.1962 26.3392Z" fill="#798A9E"/>
                  </svg>
                </div>
                <div className="wallet-pan-title">
                  Wallet Connect
                </div>
                <div className="wallet-pan-text">
                  Use MetaMask or imToken to connect to Passport
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wallet: state.wallet
  }
}

const mapDispatchToProps = dispatch => {
  return {
      togglePopup: () => dispatch({ type: actionTypes.WALLET })
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletPopup)