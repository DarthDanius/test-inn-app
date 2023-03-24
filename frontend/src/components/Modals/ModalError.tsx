
import { Modal } from 'react-bootstrap'
import React from 'react'

export interface ModalErrorProps {
    id?: string,
    title?: string,
    className? : string,
    error: any,
    close: ()=>void,
}

const ModalError = (props: ModalErrorProps) => {
    const {close, title='Ошибка', error=null} = props
    const message = error?.message

    return (
        <Modal
            show={!!error}
            onHide={close}
            dialogClassName="modal-90w"
            aria-labelledby="error"
        >
            <Modal.Header closeButton>
                <Modal.Title id="error">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
        </Modal>
    )
}

export default ModalError