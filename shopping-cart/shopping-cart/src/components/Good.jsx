import { memo } from "react"
const Good = (props) =>{
    console.log('Good')
    const{
        products,
        UpCount,
        DownCount,
        deleteProduct,
    } = props   
    return(
        <div>
            {products.map((product)=>(
                <div className="good" key={product.id}>
                    <div className="product">
                        <div className="pictures">{product.pictures}</div>
                        <div className="title__price">
                            <span className="product__name">{product.name}</span>
                            <span className="product__price">{product.price}</span>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="product__control">
                            <button className="product__reduce" onClick={()=>DownCount(product.id)}>−</button>
                            <span className="product__count">{product.count}</span>
                            <button className="product__add" onClick={()=>UpCount(product.id)}>+</button>
                        </div>
                        <button className="product__delete" onClick={()=>{deleteProduct(product.id)}}>&times;</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default memo(Good)