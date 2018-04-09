import React from 'react';
import { 
  Container,
  Row,
  Col,
  Card, 
  CardImg, 
  CardText, 
  CardTitle, 
  CardSubtitle
} from 'reactstrap';



export default class Home extends React.Component {
	render() {

    var workProcess = [
      {"src":"https://www.occupationalenglishtest.org/resources/uploads/2015/05/icon-quality-test.png?x59645", "title": "YOU INVEST IN US", "subtitle": "Buy Qubes to help us fund great residential and commercial real estate deals around the U.S."},
      {"src":"https://www.occupationalenglishtest.org/resources/uploads/2015/05/icon-quality-test.png?x59645", "title": "WE INVEST IN YOU", "subtitle": "We will secure your investments in value producing properties and mange them on your behalf."},
      {"src":"https://www.occupationalenglishtest.org/resources/uploads/2015/05/icon-quality-test.png?x59645", "title": "PROFIT", "subtitle": "Sit back and earn rental/appreciation income (6% - 10%)"},
        
    ]

    var howItWorks = workProcess.map(function(item) {
      return <Col key={item.title} className="d-flex align-items-stretch ">
                <Card className="text-center border-0">
                  <CardImg top height="100%" width="100%" src={item.src} alt={item.title}/>
                  <CardTitle >{item.title}</CardTitle>
                  <CardSubtitle>{item.subtitle}</CardSubtitle>  
                </Card>
              </Col>
    })

		return (
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
                <img height="50em" width="50em"src="https://www.occupationalenglishtest.org/resources/uploads/2015/05/icon-quality-test.png?x59645" alt="video"></img>
            </Card>
          </Col>
        </Row> 
        <Row >
          <Col >
            <h1 className="display-3 text-center">How does QubeHive work?</h1>
          </Col>
        </Row>
        <Row>
          {howItWorks}
        </Row> 
        <Row>
          <Col >
            <h1 className="display-3 text-center">Why QubeHive?</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col  className="col-8">
            <img src="https://www.iconsdb.com/icons/preview/orange/test-tube-4-xxl.png" className="rounded float-left" alt="benefit1"/>
            <h2 className="text-center">Benefit 1</h2>
            <p>Invest in Qubes for as little as $20 and gain access to residential and commercial properties.</p>
          </Col>
        </Row> 
        <Row className="justify-content-center">
          <Col  className="col-8">
            <img src="https://www.iconsdb.com/icons/preview/orange/test-tube-4-xxl.png" className="rounded float-right" alt="benefit1"/>
            <h2 className="text-center">Benefit 2</h2>
            <p >Invest in Qubes for as little as $20 and gain access to residential and commercial properties.</p>
            
          </Col>
        </Row> 
        <Row className="justify-content-center">
          <Col  className="col-8">
            <img src="https://www.iconsdb.com/icons/preview/orange/test-tube-4-xxl.png" className="rounded float-left" alt="benefit1"/>
            <h2 className="text-center">Benefit 3</h2>
            <p>Invest in Qubes for as little as $20 and gain access to residential and commercial properties.</p>
          </Col>
        </Row> 
			</Container>
		);
	}
}