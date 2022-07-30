import React, { Component } from 'react';  
import { Button, Card,CardBody,  Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
  
class Reg extends Component {  
  
  constructor() {  
    super();  
  
    this.state = { 
      FirstName:'', 
      LastName: '',  
      EmailAddress: '',  
      PasswordHash: '',  
      UserRole: ''  ,
      IsEditor:'',
      IsBanned:''
    }  
  
     
    this.EmailAddress = this.EmailAddress.bind(this);  
    this.PasswordHash = this.PasswordHash.bind(this);  
    this.FirstName = this.FirstName.bind(this);  
    this.LastName = this.LastName.bind(this);  
    this.PasswordHash = this.PasswordHash.bind(this);  
    this.UserRole = this.UserRole.bind(this);  
    this.IsEditor = this.IsEditor.bind(this);  
    this.IsBanned = this.IsBanned.bind(this);
    this.register = this.register.bind(this);  
  }  
  
  
  
  EmailAddress(event) {  
    this.setState({ EmailAddress: event.target.value })  
  }  
  
  FirstName(event) {  
    this.setState({ FirstName: event.target.value })  
  }  
  
  PasswordHash(event) {  
    this.setState({ PasswordHash: event.target.value })  
  }  
  LastName(event) {  
    this.setState({ LastName: event.target.value })  
  }  
  UserRole(event) {  
    this.setState({ UserRole: event.target.value })  
  }  
  IsEditor(event) {  
    this.setState({ IsEditor: event.target.value })  
  } 
  IsBanned(event) {  
    this.setState({ IsBanned: event.target.value })  
  } 
  
  register(event) {  
  
    fetch('http://localhost:51291/Api/login/InsertUser', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
  
        FirstName: this.state.FirstName, 
        LastName: this.state.LastName, 
        PasswordHash: this.state.PasswordHash,  
        EmailAddress: this.state.EmailAddress,  
        UserRole: this.state.UserRole  
      })  
    }).then((Response) => Response.json())  
      .then((Result) => {  
        if (Result.Status === 'Success')  
          window.open("/home");  
        else  
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
  }  
  
  
  render() {  

    return (  
      <div className="app flex-row align-items-center">  
        <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                  <Form>  
                    <div class="row" className="mb-2 pageheading">  
                      <div class="col-sm-12 btn btn-primary">  
                        Sign Up  
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.FirstName} placeholder="Enter First Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.LastName} placeholder="Enter Last Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.EmailAddress} placeholder="Enter Email" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.PasswordHash} placeholder="Enter Password" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <input placeholder="User Role" list="opts" onChange={this.UserRole}/>
                      <datalist id="opts">
                        <option>U</option>
                        <option>M</option>
                      </datalist>
                    </InputGroup>  
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>  
                  </Form>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
      </div>  
    );  
  }  
}  
  
export default Reg; 