import { useContext } from 'react'
import { BasketItem } from './BasketItem'
import { ShopContext } from './context'

export function BasketList() {
    const { handleBasketShow, order } = useContext(ShopContext)
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} />)
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
