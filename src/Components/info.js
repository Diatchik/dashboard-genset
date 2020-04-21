import CanvasJSReact from '../canvasjs.react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Specification from 'bootstrap-icons/icons/card-checklist.svg';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var React = require('react');
var Component = React.Component;







export default class Info extends Component {
    render() {
        const options = {
            animationEnabled: true,
            title: {
                text: "Fuel Consumption"
            },
            axisY: {
                title: "Liters per Day",
                includeZero: false
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "2020",
                showInLegend: true,
                dataPoints: [
                    { y: 155, label: "Apr 1" },
                    { y: 150, label: "Apr 2" },
                    { y: 152, label: "Apr 3" },
                    { y: 148, label: "Apr 4" },
                    { y: 142, label: "Apr 5" },
                    { y: 150, label: "Apr 6" },
                    { y: 146, label: "Apr 7" },
                    { y: 149, label: "Apr 8" },
                    { y: 153, label: "Apr 9" },
                    { y: 158, label: "Apr 10" },
                    { y: 154, label: "Apr 11" },
                    { y: 150, label: "Apr 12" }
                ]
            }
            ]
        }

        return (
            <>

                <Container>

                    <Row >
                        <Col md="9" >
                            <Card className=" card  bg-light border border-info ">
                                <CanvasJSChart options={options} />
                            </Card>
                        </Col>
                        <Col md="3">

                            <Card className="border border-info bg-light">
                                <Card.Header className="d-flex text-center text-dark h4 ">
                                    
                                <Card.Img
                                    variant=" mt-2 "
                                    src={Specification}
                                    width="50"
                                    height="50"
                                />
                                Generator Specification
                                </Card.Header>
                                <Table responsive striped  hover className="text-dark h6 ">
                                    
                                    <tbody>
                                        <tr>
                                            <td>Make</td>
                                            <td>Genset</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>System Voltage</td>
                                            <td>24 VDC</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Battery Alternator</td>
                                            <td>80 Amps</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Cylinder #</td>
                                            <td>(2) 6</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td>In-Line</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Intake Air Method</td>
                                            <td>Air-cooled</td>
                                            
                                        </tr>
                                    </tbody>
                                </Table>


                            </Card>

                        </Col>

                    </Row>

                </Container>


            </>
        );
    }
}

