import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Button,
  Card,
  CardBody,
  Input,
  Row,
  Col,
} from "reactstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchange: "pass_usdt",
      verticalTabs: "profile",
      verticalTabsIcons: "home",
      pageTabs: "home",
      openedCollapses: ["collapseOne"]
    };
  }
  componentDidMount() {
    document.body.classList.toggle("home-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("home-page");
  }
  // with this function we change the active tab for all the tabs in this page
  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Container>
            <Row>
              <Col xs="auto">
                <Card className="card-exchange">
                  <CardBody className="d-flex">
                    <div className={"cus-card cursor-pointer" + (this.state.exchange === "pass_usdt" ? " active": "")}
                      onClick={e => this.changeActiveTab(e, "exchange", "pass_usdt") }
                    >
                      PASS / USDT
                    </div>
                    <div className={"cus-card cursor-pointer" + (this.state.exchange === "pass_eth" ? " active": "")}
                      onClick={e => this.changeActiveTab(e, "exchange", "pass_eth") }
                    >
                      PASS / ETH
                    </div>
                    <div className={"cus-card cursor-pointer" + (this.state.exchange === "pazzi_pass" ? " active": "")}
                      onClick={e => this.changeActiveTab(e, "exchange", "pazzi_pass") }
                    >
                      PAZZI / PASS
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12">
                <Card className="card-stats">
                  <CardBody>
                    <div className="d-none d-md-block d-md-flex justify-content-between mb-45">
                      <Col md="auto">
                        <div className={"cus-card active"}>
                          <h1 className="cus-card-title">0.00%</h1>
                          <p className="cus-card-info">Annual Reward</p>
                        </div>
                      </Col>
                      <Col md="auto">
                        <div className={"cus-card active"}>
                          <h1 className="cus-card-title">0.00%</h1>
                          <p className="cus-card-info">Reward Multiplier</p>
                        </div>
                      </Col>
                      <Col md="auto">
                        <div className={"cus-card active"}>
                          <h1 className="cus-card-title">0.00000 Pass</h1>
                          <p className="cus-card-info">Annual Rewards</p>
                        </div>
                      </Col>
                    </div>
                    <div className="d-block d-md-none justify-content-between mb-4">
                      <div className={"cus-card active"}>
                        <Row>
                          <Col xs="12" className="mb-2"></Col>
                          <Col xs="6" className="mb-2">
                            <p className="cus-card-info">Annual Reward</p>
                          </Col>
                          <Col xs="6" className="mb-2">
                            <h1 className="cus-card-title">0.00%</h1>
                          </Col>
                          <Col xs="6" className="mb-2">
                            <p className="cus-card-info">Reward Multiplier</p>
                          </Col>
                          <Col xs="6" className="mb-2">
                            <h1 className="cus-card-title">0.00%</h1>
                          </Col>
                          <Col xs="6">
                            <p className="cus-card-info">Annual Rewards</p>
                          </Col>
                          <Col xs="6">
                            <h1 className="cus-card-title">0.00000 Pass</h1>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="d-md-flex justify-content-between mb-45">
                      <Col md="auto" xs="12">
                        <div className={"cus-card cus-btn active"}>
                          <svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                          <circle cx="36" cy="20" r="16" fill="#F1F3FF"/>
                          <path d="M23.3334 3.33334H10C9.11597 3.33334 8.26812 3.68453 7.643 4.30965C7.01788 4.93478 6.66669 5.78262 6.66669 6.66668V33.3333C6.66669 34.2174 7.01788 35.0652 7.643 35.6904C8.26812 36.3155 9.11597 36.6667 10 36.6667H30C30.8841 36.6667 31.7319 36.3155 32.357 35.6904C32.9822 35.0652 33.3334 34.2174 33.3334 33.3333V13.3333L23.3334 3.33334Z" stroke="#3C50E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M23.3333 3.33334V13.3333H33.3333" stroke="#3C50E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M26.6666 21.6667H13.3333" stroke="#3C50E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M26.6666 28.3333H13.3333" stroke="#3C50E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M16.6666 15H15H13.3333" stroke="#3C50E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg> 
                          Uniswap Bell / USDT
                        </div>
                      </Col>
                      <Col md="auto" xs="12">
                        <div className={"cus-card cus-btn active"}>
                          <svg width="55" height="40" viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                          <circle cx="38.8281" cy="20" r="16" fill="#F1F3FF"/>
                          <path d="M35 6.66666H4.99999C3.15904 6.66666 1.66666 8.15904 1.66666 9.99999V30C1.66666 31.8409 3.15904 33.3333 4.99999 33.3333H35C36.8409 33.3333 38.3333 31.8409 38.3333 30V9.99999C38.3333 8.15904 36.8409 6.66666 35 6.66666Z" stroke="#3C50E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M1.66666 16.6667H38.3333" stroke="#3C50E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          Enter Amount
                        </div>
                      </Col>
                      <Col md="auto" xs="12">
                        <div className={"cus-card cus-btn active"}>
                          <svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                          <circle cx="36" cy="20" r="16" fill="#F1F3FF"/>
                          <path d="M35 25C35 25.8841 34.6488 26.7319 34.0237 27.357C33.3986 27.9821 32.5507 28.3333 31.6667 28.3333H11.6667L5 35V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H31.6667C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V25Z" stroke="#3C50E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          Staking Complete
                        </div>
                      </Col>
                    </div>
                    <div className="card-info">
                      <Col xs="12">
                        PASS Contract: 0xxx0xxx0xxx0x0xx0x0x0x0x0x0x0x0x
                      </Col>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" md="12" lg="9">
                <Card className="card-deposit">
                  <CardBody>
                    <div className="mb-45">
                      <span className="dep-text mr-md-5 mr-2">Deposit Amount</span>
                      <Link to="/">Check tutorial</Link>
                    </div>
                    <div className="staking-amount-inputgroup mb-45">
                      <Input placeholder="Staking amount" />
                      <Button color="primary" block>Max</Button>
                    </div>
                    <Row className="card-info">
                      <Col md="6" lg="12" xs="12" className="mb-3">
                        Balance: 0.0000 (PASS / USDT Uni LP)
                      </Col>
                      <Col md="6" lg="12" xs="12">
                        Staked: 0.0000 (PASS / USDT Uni LP)
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" md="12" lg="3" className="pl-lg-0">
                <Card className="card-advertise" color="primary">
                  <CardBody>
                    <div className="advertising">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="ad-point red">
                      <circle cx="4" cy="4" r="4" fill="#FF4A4A"/>
                      </svg>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="ad-point yellow">
                      <circle cx="4" cy="4" r="4" fill="#FFB756"/>
                      </svg>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="ad-point pink">
                      <circle cx="4" cy="4" r="4" fill="#FFD0D0"/>
                      </svg>
                      250 Pass per Week
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12">
                <Row className="d-flex justify-content-center card-actions">
                  <Col xs="12" md="4" lg="3" className="mb-3">
                    <Button color="primary" size="lg" block>Approve</Button>{' '}
                  </Col>
                  <Col xs="12" md="4" lg="3" className="mb-3">
                    <Button outline color="primary" size="lg" block>Claim</Button>{' '}
                  </Col>
                  <Col xs="12" md="4" lg="3" className="mb-3">
                    <Button outline color="primary" size="lg" block>Withdraw + Claim</Button>{' '}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Home;
