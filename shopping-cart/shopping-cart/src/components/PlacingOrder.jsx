import { memo } from "react"
const PlacingOrder = (props) =>{
    console.log('PlacingOrder')
    const{
        errors,
        errorMassage,
        checkInputValue,
        handleSubmit,
        isReady,
    } = props
    return(
        <form className="placing__order" onSubmit={handleSubmit}>
            <span className="order__title">Оформление заказа</span>
            <div className="information">
                <div className="input__field">
                    <span className="name">Имя</span>
                    <input type="text" placeholder="Имя" name="name" className={errors.name ? 'error' : ''} onChange={(event) => checkInputValue('name',event.target.value)}/>
                    <span className={`error__massage ${errorMassage.name ? 'active' : ''}`}>Введите Имя</span>
                </div>
                <div className="input__field">
                    <span>Email</span>
                    <input type="text" placeholder="Email" name="email" className={errors.email ? 'error' : ''} onChange={(event) => checkInputValue('email',event.target.value)}/>
                    <span className={`error__massage ${errorMassage.email ? 'active' : ''}`}>Введите корректный email </span>
                </div>
                <div className="input__field">
                    <span>Телефон</span>
                    <input type="text" placeholder="Телефон" name = "phone" className={errors.phone ? 'error' : ''} onChange={(event) => checkInputValue('phone',event.target.value)}/>
                    <span className={`error__massage ${errorMassage.phone ? 'active' : ''}`}>Введите телефон в формате +7 900 000-00-00</span>
                </div>
                <button type="submit">Оформить заказ</button>
                {isReady && <span className="confirm__form">Заказ оформлен. Мы отправили подтверждение на email.</span>}
            </div>
        </form>
    )
}
export default memo(PlacingOrder)