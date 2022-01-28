import { GoodItem } from './GoodsItem'

export function GoodsList(props) {
    const { goods = [], addToBasket } = props
    if (!goods.length) {
        return 'Nothing here'
    }
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodItem key={item.id} addToBasket={addToBasket} {...item} />
            ))}
        </div>
    )
}
