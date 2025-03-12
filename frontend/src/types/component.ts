// import { Data } from "../store/types";

import { Data } from "../store/types";

export type NodeProps = {
    data:Data   
  };

export type NodeType={
  type:string
  label:string
}


export type Workflow= {
  id: number;
  name: string;
  created_at: string;
}