import React from 'react';
import { 
  Container,
  Row,
  Col,
  Card, 
  CardImg, 
  CardText, 
  CardTitle, 
  CardSubtitle,
  Jumbotron,
  Media,
  Button
} from 'reactstrap';

import filler from '../assets/filler.jpg';


export default class Home extends React.Component {
	render() {

    var workProcess = [
      {"src":filler, "title": "YOU INVEST IN US", "subtitle": "Buy Qubes to help us fund great residential and commercial real estate deals around the U.S."},
      {"src":filler, "title": "WE INVEST IN YOU", "subtitle": "We will secure your investments in value producing properties and mange them on your behalf."},
      {"src":filler, "title": "PROFIT", "subtitle": "Sit back and earn rental/appreciation income (6% - 10%)"},
        
    ]

    var howItWorks = workProcess.map(function(item) {
      return <Col xs="8" sm="4" md="4" lg="3" xl="3" key={item.title} className="align-items-stretch">
                <Card className="text-center border-0">
                  <CardImg top src={item.src} alt={item.title}/>
                  <CardTitle >{item.title}</CardTitle>
                  <CardSubtitle>{item.subtitle}</CardSubtitle>  
                </Card>
              </Col>
    })

		return (
      <div>
        
        <Jumbotron fluid>
          <Container className="text-center">
            <h1 className="display-3">Buy Investment Properties from Around the Globe</h1>
            <p className="lead">Crowd-sale & Trading of Property-backed Tokens</p>
            <Button color="primary" size="lg">Qube Token Sale</Button>
          </Container>
        </Jumbotron>

        <Container className="spaced">
  				<Row>
            <Col className="d-flex align-items-stretch">
              <Card body>
                  <CardTitle> A simple way to invest in real estate on the blockchain! </CardTitle>
                  <CardText> Invest in Qubes for as little as $20 and gain access to residential and commercial properties.  </CardText>
                  <CardText className="text-center"> See how it works! </CardText>
              </Card>
            </Col>
            <Col className="d-flex align-items-stretch">
              <Card body>
                  <img height="50em" width="50em"src={filler} alt="video"></img>
              </Card>
            </Col>
          </Row> 
          
          <Row >
            <Col >
              <h1 className="display-4 text-center">How does QubeHive work?</h1>
            </Col>
          </Row>
          <Row>
            {howItWorks}
          </Row> 
          
          <Row>
            <Col >
              <h1 className="display-4 text-center">Why QubeHive?</h1>
            </Col>
          </Row>
          
          <Row className="d-flex justify-content-center">
            <Col className="col-auto">
              <img src={filler} className="rounded img-responsive" alt="benefit1"/>
            </Col>
            <Col className="col-6">
              <h2 className="text-center">Benefit 1</h2>
              <p>Invest in Qubes for as little as $20 and gain access to residential and commercial properties.</p>
            </Col>
          </Row> 

          <Row className="d-flex justify-content-center flex-wrap-reverse">
            <Col className="col-6">
              <h2 className="text-center">Benefit 2</h2>
              <p>Invest in Qubes for as little as $20 and gain access to residential and commercial properties.</p>
            </Col>
            <Col className="col-auto">
              <img src={filler} className="rounded float-right img-responsive" alt="benefit1"/>
            </Col>
          </Row> 
          
          <Row className="d-flex justify-content-center">
            <Col className="col-auto">
              <img src={filler} className="rounded float-left img-responsive" alt="benefit1"/>
            </Col>
            <Col className="col-6">
              <h2 className="text-center">Benefit 3</h2>
              <p>Invest in Qubes for as little as $20 and gain access to residential and commercial properties.</p>
            </Col>
          </Row> 
          
          <Row className="d-flex justify-content-center flex-wrap-reverse">
            <Col className="col-6">
              <h2 className="text-center">Benefit 4</h2>
              <p>Invest in Qubes for as little as $20 and gain access to residential and commercial properties.</p>
            </Col>
            <Col className="col-auto">
              <img src={filler} className="rounded float-right img-responsive" alt="benefit1"/>
            </Col>
          </Row> 
  			
        </Container>
      </div>
		);
	}
}