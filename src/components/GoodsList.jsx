import { useContext } from 'react/cjs/react.development'
import { ShopContext } from './context'
import { GoodItem } from './GoodsItem'

export function GoodsList() {
    const { goods = [] } = useContext(ShopContext)
    if (!goods.length) {
        return 'Nothing here'
    }
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodItem key={item.id} {...item} />
            ))}
        </div>
    )
}
