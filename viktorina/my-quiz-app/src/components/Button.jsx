import { memo } from "react"
const Button = (props)=>{
    console.log('Button')
    const{
        text,
        upCount,
    } = props
    return(
        <button className="btn-next" onClick={upCount}>{text}</button>
    )
}
export default memo(Button)