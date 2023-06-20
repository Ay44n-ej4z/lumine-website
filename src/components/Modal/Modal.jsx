import React from "react";
import "./Modal.css"
const Modal = ({set, open}) => {

const closeModal = () => {
  set(false)
}
  return (
    <div>
      {open && (
        <div className="modal">
          <div className="tick"></div>
          <div className="text">Mail Delivered</div>
          <button  className="close-button" onClick={closeModal}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
