import Node from "./Node";
import { Data } from "../../../store/types";

/**
 * **Higher-Order Component (HOC): withStyle**
 * - Enhances a given component (`WrappedComp`) by adding styles and additional properties.
 * - Wraps the component inside a styled `<div>` container.
 * - Includes an additional `Node` component within the wrapper.
 */
const withStyle = (WrappedComp: React.ComponentType<{ data: Data }>,className?:string) => {
  return function (props: { data: Data }) {
    return (
      <div
        style={{ background: `${props.data.bgColor}`,color:`${props.data.textColor}` }}
        className={`relative  rounded-md shadow-md min-w-28 ${className}`}
      >
        {/* Render the wrapped component with the given props */}
        <WrappedComp {...props} />

        {/* Render additional Node component */}
        <Node data={props.data} />
      </div>
    );
  };
};

export default withStyle;
