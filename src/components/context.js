import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext()

export function ContextProvider({children}){
    const initialState = {
        goods: [],
        loading: true,
        order: [],
        isBasketShow: false,
        alertName: ''
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    state.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    state.removeFromBasket = (id) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id}})
    }
    state.changeQuantity = (id, flag) => {
        dispatch({type: 'CHANGE_QUANTITY', payload: {id, flag}})
    }
    state.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: {item}})
    }
    state.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }
    state.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: {data}})
    }

    return <ShopContext.Provider value={state}>
        {children}
    </ShopContext.Provider>
}