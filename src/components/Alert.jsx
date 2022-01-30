import { useEffect, useContext } from 'react'
import { ShopContext } from './context'

export function Alert() {
    const { closeAlert, alertName } = useContext(ShopContext)
    useEffect(() => {
        const timer = setTimeout(closeAlert, 2000)
        return () => {
            clearInterval(timer)
        }
        //eslint-disable-next-line
    }, [alertName])

    return (
        <div id='toast-container'>
            <div className='toast'>{alertName} добавлен в корзину</div>
        </div>
    )
}
