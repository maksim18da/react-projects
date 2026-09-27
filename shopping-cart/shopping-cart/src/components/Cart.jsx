import Good from "./Good"
import "../styles/cart.css"
import "../styles/good.css"
import "../styles/totalPrice.css"
import "../styles/placingOrder.css"
import { useCallback, useMemo, useState } from "react"
import TotalPrice from "./TotalPrice"
import PlacingOrder from "./PlacingOrder"
const Cart = () =>{
    console.log('Cart')
    const [products, setProducts] = useState([
        {id:1, name: 'Наушники беспроводные', price: 2990, pictures:'🎧', count: 1},
        {id:2,name: 'Мышь беспроводная', price: 1490, pictures:'🖱️', count: 1},
        {id:3,name: 'Чехол для ноутбука', price: 1200, pictures:'💼', count: 1},]
    )
    const totalPrice = useMemo(()=>products.reduce((sum, elem)=>{
        return sum + (elem.count * elem.price)
    },0), [products])
    const UpCount = useCallback((id)=>{
        setProducts(prev=>{
            return prev.map(elem=>{
                if (elem.id == id){
                    return {...elem, count: elem.count + 1}
                }
                return elem
            })
        })
    }, [])
    const DownCount = useCallback((id)=>{
        setProducts(prev=>{
            return prev.map(elem=>{
                if (elem.id == id){
                    return {...elem, count: elem.count > 1 ? elem.count - 1 : 1}
                }
                return elem
            })
        })
    }, [])
    const deleteProduct = useCallback((id)=>{
        setProducts(prev=>{
            return prev.filter(elem=> elem.id !== id)
        })
    }, [])
    const [errors, setErrors] = useState({name: '', email: '', phone: '' })
    const [errorMassage, setErrorMassage] = useState({name: '', email: '', phone: '' })
    const checkInputValue = useCallback((name, value) =>{
        if (value.trim().length === 0){
            setErrors((prev) =>({...prev, [name]:'error'}))
        }
        else{
            setErrors((prev)=>({...prev, [name]:''}))
            setErrorMassage((prev)=>({...prev,[name]:''}))
        }
    }, [])
    const [isReady, setIsReady] = useState(false)
    const handleSubmit = useCallback((e) =>{
        const newErrors = []
        e.preventDefault()
        const fromData = new FormData(e.target)
        const values = Object.fromEntries(fromData)
        Object.keys(values).forEach((field)=>{
            if (values[field] === ''){
                setErrors((prev) =>({...prev, [field]:'error'}))
                setErrorMassage((prev)=>({...prev,[field]:'active'}))
                newErrors.push('error')
            }
        })
        if (newErrors.length === 0){
            setIsReady(true)
            console.log("Данные отправлены", values)
            e.target.reset()
        }
    }, [])
    return(
        <div className="shopping__cart">
            <span className="title">Ваша корзина</span>
            <div className="products__list">
                <Good
                    products = {products}
                    UpCount = {UpCount}
                    DownCount = {DownCount}
                    deleteProduct = {deleteProduct}
                ></Good>
            </div>
            <TotalPrice totalPrice = {totalPrice}></TotalPrice>
            <PlacingOrder 
                errors = {errors}
                errorMassage = {errorMassage}
                isReady = {isReady}
                checkInputValue= {checkInputValue}
                handleSubmit = {handleSubmit}
                >
            </PlacingOrder>
        </div>
    )
}
export default Cart