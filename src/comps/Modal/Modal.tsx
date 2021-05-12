import { useEffect } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalDiv = document.getElementById('modal');
  const element = document.createElement('div');

  useEffect(() => {
    modalDiv?.appendChild(element);

    return () => {
      modalDiv?.removeChild(element);
    }
  }, [])


  return ReactDOM.createPortal(
    children,
    element
  )
};

export default Modal;
