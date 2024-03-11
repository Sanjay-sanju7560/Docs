import React, { useState } from 'react'
import { Button, Modal, } from 'react-bootstrap'

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddDoc = () => {
        
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }} >

                <div style={{ justifyContent: 'center' }}>
                    <h1>DOCS APP</h1>
                    <button className='ms-5' style={{ border: '2px', padding: '3px', margin: '5px' }} onClick={handleShow} i>
                        <i class="fa-solid fa-plus"></i> Add A Document
                    </button>
                </div>

                <Modal className='align-item-cente' style={{ backgroundColor: 'whitesmoke', width: '300px',height:'70px',  margin:'10px' ,border:'1px'}}
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body >
                      <input  style={{ width: '270px',height:'20px',margin:'10px' }} type="text" placeholder='Add Title'/>
                    </Modal.Body>
                    <Modal.Footer>
                      
                        <Button  style={{ marginLeft:'40%'}} className='btn' variant="primary">Add</Button> 
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}

export default Home