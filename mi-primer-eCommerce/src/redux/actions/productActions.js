import { ActionTypes } from '../constants/action-types';

/*Importante: Aqui es donde se van a generar los 3 ciclos de vida de nuestros componentes */

export const setProducts = (products) => {//componentDidMount
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products, 
    }
}

export const selectedProduct = (product) => {//componentDidUpdate
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product, 
    }
}

export const removeSelectedProduct = () => {//componentWillUnmount
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT, 
    }
}

