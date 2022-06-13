import { Fragment } from "react"
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Modal = props => {
    console.log('Modal LOADED')
    const ModalBackdrop = () => <div className={classes.modal__backdrop} onClick={props.onHide}>Backdrop</div>
    const ModalOverlay = props => <div className={classes.modal__overlay}>{props.children}</div>
    const backdropElement = document.getElementById('ModalBackdrop')
    const overlayElement = document.getElementById('ModalOverlay')
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalBackdrop />, backdropElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.content}</ModalOverlay>, overlayElement)}
        </Fragment>
    )
}
export default Modal