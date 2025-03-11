import { Data } from "../../../store/types";
import Node from "./Node";

// HOC Function: Adds a Node component and some properties
const withStyle = (WrappedComp: React.ComponentType<{ data: Data }>,className?:string) => {
  return function (props: { data: Data }) {
    return (
      <div
        style={{ background: `${props.data.bgColor}`,color:`${props.data.textColor}` }}
        className={`relative  rounded-md shadow-md min-w-28 ${className}`}
      >
        <WrappedComp {...props} />
        <Node data={props.data} />
      </div>
    );
  };
};

export default withStyle;
