import { useDispatch } from "react-redux"
import { NodeProps } from "../../../types/component"
import { AppDispatch } from "../../../store/store"
import { removeNode } from "../../../store/nodesSlice"


const Node:React.FC<NodeProps> = ({data}) => {
  const dispatch=useDispatch<AppDispatch>()
    const handleDelete=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.stopPropagation(); //  Prevents bubbling
      dispatch(removeNode(data.id))
      }
  return (
    <button onClick={handleDelete}>
      ❌
     </button>
  )
}

export default Node