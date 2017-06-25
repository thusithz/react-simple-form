import _ from 'lodash';
import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import EmailList from '../../mock/email.json';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default class EmailValidation extends React.Component {

    constructor(props) {
        super(props); 
        this.userEmail = this.props.defultEmail;
    }

    handleChange(ev) {
        //TODO this.refs. does n't work because that material plugin
        this.userEmail = ev.target.value;
    }

    render() {
        return (
          <div>
            <Form onSubmit={this.handleEmails.bind(this)} >
                <legend>Email Validation</legend>
                <Input  label="Email" type="email"  defaultValue={this.props.defultEmail}  onChange={this.handleChange.bind(this)}  floatingLabel={true} required={true} />
                <Button type="submit" variant="raised" color="primary" >Submit</Button>
            </Form>  
            <NotificationContainer/>
           </div>
        );
    }

    handleEmails(event) {
        event.preventDefault();
        //TODO Here need to call API    
        if ( _.findIndex(EmailList, email => {return (email === this.userEmail)}) > -1 ) {
           NotificationManager.success('Email is exist', 'Success');
        } else {
           NotificationManager.error('Email does not exist', 'Error');
        }
    }
}
