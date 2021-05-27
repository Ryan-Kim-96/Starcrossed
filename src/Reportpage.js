import React from 'react';
import './PrinceDocument.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Report from './PrinceReport.png'
import imposter from './Imposter.gif'
function Reportpage(props) {

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="example-custom-modal-styling-title"
            dialogClassName="modal-60w"
            style={{ zIndex: '3000' }}
            centered
        >
            
            <Modal.Body style={{backgroundColor:"transparent", border:'1px solid white'}}>
            <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <Image style={{width:'700px', heigh:'600px'}} src={imposter}></Image>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default Reportpage