export function reducer(state, {type, payload}){
    switch(type){
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload.data || [],
                loading: false
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertNAme: ''
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state, 
                order: state.order.filter((el) => el.id !== payload.id)
            }
        case 'CHANGE_QUANTITY':
            const newOrder = state.order.map((orderItem) => {
                if (orderItem.id === payload.id && (orderItem.quantity > 1 || payload.flag > 0)) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1 * payload.flag,
                    }
                } else {
                    return orderItem
                }
            })
            return {
                ...state,
                order: newOrder
            }
        case 'ADD_TO_BASKET':
            const itemIndex = state.order.findIndex((el) => el.id === payload.item.id)
            if (itemIndex !== -1) {
                const newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        }
                    } else {
                        return orderItem
                    }
                })
                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.item.name
                }
            } else {
                const newItem = {
                    ...payload.item,
                    quantity: 1,
                }
                return {
                    ...state,
                    order: [...state.order, newItem],
                    alertName: payload.item.name
                }
            }
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        default: return state
    }
}