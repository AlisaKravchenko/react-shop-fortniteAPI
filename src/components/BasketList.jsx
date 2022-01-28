import { BasketItem } from './BasketItem'

export function BasketList(props) {
    const { order, handleBasketShow, removeFromBasket, changeQuantity } = props
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        changeQuantity={changeQuantity}
                        {...item}
                    />
                ))
            ) : (
                <p>Корзина пустая</p>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice}
            </li>
            <i
                className='material-icons basket-close white-text'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    )
}
