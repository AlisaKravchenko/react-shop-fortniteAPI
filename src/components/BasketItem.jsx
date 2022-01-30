import { useContext } from 'react'
import { ShopContext } from './context'

export function BasketItem(props) {
    const { id, name, price, quantity } = props

    const { changeQuantity, removeFromBasket } = useContext(ShopContext)
    return (
        <li className='collection-item'>
            {name}
            <i
                className='material-icons count-item'
                onClick={() => changeQuantity(id, 1)}
            >
                add
            </i>
            x{quantity}
            <i
                className='material-icons count-item'
                onClick={() => changeQuantity(id, -1)}
            >
                remove
            </i>
            = {price * quantity}руб
            <i
                className='material-icons item-close'
                onClick={() => {
                    removeFromBasket(id)
                }}
            >
                close
            </i>
        </li>
    )
}
