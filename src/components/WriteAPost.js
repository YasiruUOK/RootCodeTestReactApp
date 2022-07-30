import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Row, textarea } from 'reactstrap';  
import NavbarPage from "./NavBarPage";

class WriteAPost extends Component{

    constructor() {  
        super();  
  
        this.state = {  
            postText: ''  
        }  
  
        this.writePost = this.writePost.bind(this);   
        this.postText = this.postText.bind(this); 
    }  
    
    postText(event) {  
        this.setState({ postText: event.target.value }) ;
    }  

    writePost(event) {  
        
        fetch('http://localhost:51291/Api/post/WriteAPost', {  
            method: 'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                userID: localStorage.getItem('userID'),  
                PostText: this.state.postText  
            })  
        }).then((Response) => Response.json())  
        .then((result) => {  
            console.log(result); 
            console.log(result.Status); 
            if (result.Status === 'Invalid')  
                alert('Invalid Post');  
            else {
                //window.open("/home"); 
            }    
        })    
    } 

    render(){
        
        return(
            <><NavbarPage></NavbarPage><div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">

                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div class="row" className="mb-2 pageheading">
                                                <div class="col-sm-12 btn btn-primary">

                                                </div>
                                                <h1>Write A Post</h1>
                                                {/* value: {this.state.value} */}
                                                <br />
                                                <textarea placeholder="What is on your min write here" onChange={this.postText} maxLength={500} style={{ width: 500, height: 100, backgroundColor: 'skyblue' }}></textarea>
                                                <Button onClick={this.writePost} color="success" block>Post</Button>
                                            </div>

                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div></>  
        );
    }
}
export default WriteAPost; 