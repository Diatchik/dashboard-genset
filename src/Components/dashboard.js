import React, { Component } from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap';
import Load from 'bootstrap-icons/icons/bar-chart.svg';
import ReactSpeedometer from "react-d3-speedometer";
import Temperature from '../assets/temperature.svg';
import FuelLevel from '../assets/fuel-level.svg';
import OilLevel from '../assets/oil-level.svg';

import Gear from 'bootstrap-icons/icons/gear.svg';



export default class dashboard extends Component {
    render() {
        return (
            <>
                <Container >

                    <h4 className="text-left text-info mt-2 mb-4 shadow border-1">DASHBOARD GENERATOR LNM 2000 </h4>

                    <CardDeck className="mb-4">
                        <Card className="border border-info" >
                            <Card.Header className="text-center h5 text-info bg-light mb-1 ">BATTERY VOLTAGE</Card.Header>

                            <ReactSpeedometer
                                width="250"
                                height="20px"
                                maxValue={100}
                                value={87}
                                needleColor="red"
                                startColor="green"
                                segments={5}
                                endColor="blue"
                                textColor="grey"

                            />

                        </Card>
                        <Card className="border border-info">

                            <Card.Header className="text-center h5 text-info bg-light mb-1">CURRENT</Card.Header>
                            <ReactSpeedometer
                                width="250"
                                height="20px"
                                maxValue={2000}
                                value={873}
                                needleColor="red"
                                startColor="green"
                                segments={5}
                                endColor="blue"
                                textColor="grey"
                            />

                        </Card>
                        <Card className="border border-info">

                            <Card.Header className="text-center h5 text-info bg-light mb-1">ACTUAL POWER</Card.Header>
                            <ReactSpeedometer
                                width="250"
                                height="20px"
                                maxValue={2000}
                                value={1230}
                                needleColor="red"
                                startColor="green"
                                segments={5}
                                endColor="blue"
                                textColor="grey"
                            />

                        </Card>
                        <Card className="border border-info">
                            <Card.Header className="text-center h5 text-info bg-light mb-1">FRECUENCY</Card.Header>
                            <ReactSpeedometer
                                width="250"
                                height="20px"
                                maxValue={1000}
                                value={856}
                                needleColor="red"
                                startColor="green"
                                segments={5}
                                endColor="blue"
                                textColor="grey"
                            />

                        </Card>
                    </CardDeck>



                    <CardDeck className="mb-4">

                        <Card className="card  bg-light" >
                            <Card.Header className="d-flex text-center text-white h6 bg-info">
                            Engine Hours
                            <Card.Img
                                    variant=" mt-2 ml-4  "
                                    src={Gear}
                                    width="30"
                                    height="30"
                                />
                            </Card.Header>
                            <Card.Header className=" border border-info text-center text-dark h5 bg-light">
                            Hours: 15 846
                            </Card.Header>
                        </Card>
                        <Card className="card  bg-light" >
                            <Card.Header className="d-flex text-center text-white h5 bg-success">
                            Temperature
                            <Card.Img
                                    variant=" mt-2 ml-2 "
                                    src={Temperature}
                                    width="30"
                                    height="30"
                                />
                            </Card.Header>
                            <Card.Header className=" border border-success text-center text-dark h5 bg-light">
                            65 °C
                            </Card.Header>
                        </Card>
                        <Card className="card  bg-light" >
                            <Card.Header className="d-flex text-center text-white h6 bg-danger">
                                Engine Load
                            <Card.Img
                                    variant=" mt-2 ml-4  "
                                    src={Load}
                                    width="30"
                                    height="30"
                                />
                            </Card.Header>
                            <Card.Header className=" border border-danger text-center text-dark h5 bg-light">
                                72 %
                            </Card.Header>
                        </Card>
                        <Card className="card  bg-light" >
                            <Card.Header className="d-flex text-center text-white h5 bg-warning">
                            Fuel Level 
                            <Card.Img
                                    variant=" mt-2 ml-4  "
                                    src={FuelLevel }
                                    width="30"
                                    height="30"
                                />
                            </Card.Header>
                            <Card.Header className=" border border-warning text-center text-dark h5 bg-light">
                            Litres: 562
                            </Card.Header>
                        </Card>
                        <Card className="card  bg-light" >
                            <Card.Header className="d-flex text-center text-white h4 bg-secondary">
                            Oil Level 
                            <Card.Img
                                    variant=" mt-2 ml-4"
                                    src={OilLevel}
                                    width="30"
                                    height="30"
                                />
                            </Card.Header>
                            <Card.Header className=" border border-secondary text-center text-dark h5 bg-light">
                            Litres: 262
                            </Card.Header>
                        </Card>

                    </CardDeck>

                </Container>
            </>
        );
    }
}