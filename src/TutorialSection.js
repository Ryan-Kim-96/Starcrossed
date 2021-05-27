import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Logo from './Starcrossed Logo.png'
import Stepper from './Stepper.js'

class TutorialSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    
    handleClose (){
        this.setState({ show: false });
    };
    
    handleShow (){
        this.setState({ show: true });
    };
    
    render() {
        return (
            <div>
            <Modal 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.state.show} 
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                    <Image style={{width: "200px"}} src={Logo}></Image>
                    
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <text style={{paddingLeft: "5px", fontSize: "28px"}}>Tutorial</text>
                    <Stepper></Stepper>              
                </Modal.Body>

            </Modal>
        </div>
        );
    }
}

export default TutorialSection