import React from 'react';
import './modal.css';

const Modal = ({ children, loading = false, title, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          {loading ? (
            <div className="modal-loading">
              <div className="loading-spinner"></div>
              <p>Loading...</p>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
