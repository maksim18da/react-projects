import { memo } from "react"
const TotalPrice = (props) =>{
    console.log('TotalPrice')
    const{
        totalPrice,
    } = props
    return(
        <div className="total__price">
            <span className="result">Итого</span>
            <span className="price">{totalPrice} ₽</span>
        </div>
    )
}
export default memo(TotalPrice)