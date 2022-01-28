import { useEffect } from 'react'

export function Alert(props) {
    const { name, closeAlert } = props

    useEffect(() => {
        const timer = setTimeout(closeAlert, 2000)
        return () => {
            clearInterval(timer)
        }
        //eslint-disable-next-line
    }, [name])

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    )
}
