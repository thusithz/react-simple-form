import React from 'react';
import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/panel';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import EmailValidation from './email-validation'

let defultEmail = 'test@gmail.com';

export default class LoginForm extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            defultEmail
        };
    }

    render() {
        return (
            <Container fluid={false}>
              <Row>
                <Col xs="8" md="12" className="cus-row">
                  <Panel>
                    <EmailValidation defultEmail={this.state.defultEmail}/>
                  </Panel>
                </Col>
                </Row>
            </Container>
        );
    }
}
