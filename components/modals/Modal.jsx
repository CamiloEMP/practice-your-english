import ReactDOM from 'react-dom'
import { ContainerModal } from 'components/modals/Container'

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-[#0000007f]" role="dialog">
      <ContainerModal>{children}</ContainerModal>
    </div>,
    document.getElementById('modal'),
  )
}
