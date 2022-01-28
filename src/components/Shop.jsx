import React from 'react'
import { useState, useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import { Cart } from './Cart'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'
import { BasketList } from './BasketList.jsx'
import { Alert } from './Alert'

export function Shop() {
    const [loading, setLoading] = useState(true)
    const [goods, setGoods] = useState([])
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured)
                setLoading(false)
            })
    }, [])

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((el) => el.id === item.id)
        if (itemIndex !== -1) {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        } else {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        }
        setAlertName(item.name)
    }

    const removeFromBasket = (id) => {
        setOrder(order.filter((el) => el.id !== id))
    }
    const changeQuantity = (id, flag) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === id && (orderItem.quantity > 1 || flag > 0)) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1 * flag,
                }
            } else {
                return orderItem
            }
        })
        setOrder(newOrder)
    }
    const closeAlert = () => {
        setAlertName('')
    }
    return (
        <div className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow ? (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    changeQuantity={changeQuantity}
                />
            ) : null}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </div>
    )
}
