import React from "react";

function Modal({ isOpen, onClose, author, description }) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <h2>{author}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
