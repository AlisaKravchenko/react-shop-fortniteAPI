import { useContext } from 'react'
import { ShopContext } from './context'

export function Cart() {
    const { handleBasketShow, order } = useContext(ShopContext)
    const quantity = order.length
    return (
        <div
            className='cart blue darken-4 white-text'
            onClick={handleBasketShow}
        >
            <i className='material-icons white-text'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    )
}
