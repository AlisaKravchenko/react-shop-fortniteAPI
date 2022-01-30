import React from 'react'
import { useEffect, useContext } from 'react'
import { API_KEY, API_URL } from '../config'
import { Cart } from './Cart'
import { GoodsList } from './GoodsList'
import { Preloader } from './Preloader'
import { BasketList } from './BasketList.jsx'
import { Alert } from './Alert'
import { ShopContext } from './context'

export function Shop() {
    const { setGoods, loading, isBasketShow, alertName } =
        useContext(ShopContext)

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured)
            })
    }, [])

    return (
        <div className='container content'>
            <Cart />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow ? <BasketList /> : null}
            {alertName && <Alert />}
        </div>
    )
}
