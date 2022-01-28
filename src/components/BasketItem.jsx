export function BasketItem(props) {
    const { id, name, price, quantity, removeFromBasket, changeQuantity } =
        props
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
