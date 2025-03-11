import { useDispatch } from "react-redux"
import { NodeProps } from "../../../types/component"
import { AppDispatch } from "../../../store/store"
import { removeNode } from "../../../store/nodesSlice"
import { CircleX } from "lucide-react"


const Node:React.FC<NodeProps> = ({data}) => {
  const dispatch=useDispatch<AppDispatch>()
    const handleDelete=(e:  React.MouseEvent<SVGSVGElement, MouseEvent> )=>{
      e.stopPropagation(); //  Prevents bubbling
      dispatch(removeNode(data.id ))
      }
  return (
    <>

  <CircleX className="absolute top-0 right-0 cursor-pointer hover:scale-110" onClick={handleDelete} size={12}/>
<div className="max-w-[200px] text-center">

<h2 className="mx-4 ">{ data.label} </h2>
<hr />
<p className=" text-sm  min-h-6 p-1">{data.description}</p>
</div>


    </>
  )
}

export default Node