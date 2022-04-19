import { AiFillCloseCircle } from 'react-icons/ai'

export const BtnCloseModal = ({ handleVisible }) => {
  return (
    <div className="flex justify-end">
      <button className="text-4xl" onClick={handleVisible}>
        <AiFillCloseCircle />
      </button>
    </div>
  )
}
