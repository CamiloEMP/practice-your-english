import ReactDOM from 'react-dom'

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-[#0000007f]">{children}</div>,
    document.getElementById('modal-success'),
  )
}
