import { forwardRef } from "react";

function ScrollMaker({ref}){
    return <span ref={ref}></span>
}

export default forwardRef(ScrollMaker);