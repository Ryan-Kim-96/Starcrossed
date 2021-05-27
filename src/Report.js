import React from 'react';
import './PrinceDocument.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Report from './PrinceReport.png'

function PrinceArticle(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="example-custom-modal-styling-title"
            dialogClassName="modal-90w"
            centered
        >
            <Modal.Header style={{backgroundColor:'#c5c5c5'}}closeButton>
                <div>
                    <Image src={Report} style={{width:'100%'}} rounded></Image>
                </div>
            </Modal.Header>
        </Modal>
    );
}
export default PrinceArticle