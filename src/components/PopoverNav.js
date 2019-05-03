import React, { useState } from 'react'
import { Popover, Button, Modal, ModalBody, Form, FormGroup, Input } from 'reactstrap'
import avatar from '../img/avatar.png'

const PopoverNav = (props) => {
  const [modalIsOpen, setModalOpen] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const[imgFile, setImgfile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.uploadImage(imgFile)
  }

  return(
    <div className='popover-nav' >
      <img id='avatar' src={avatar} alt='avatar' />
      <span id='popoverNav' > {localStorage.getItem('user')}</span>

      <Popover placement='bottom' isOpen={tooltipOpen} toggle={() => setTooltipOpen(!tooltipOpen)} target='popoverNav' >
        <div><Button onClick={() => setModalOpen(!modalIsOpen)} color='white'>Change image</Button></div>
        <Button  color='white' onClick={props.userLogout} ><span className='fa fa-sign-out fa-lg' ></span> Logout</Button>
      </Popover>
      <Modal isOpen={modalIsOpen} >
        <ModalBody>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <FormGroup>
              <Input type='file' onChange={(e) => setImgfile(e.target.files[0])} accept='image/*' name='myFile' />
            </FormGroup>
            <Button type='submit' >Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default PopoverNav