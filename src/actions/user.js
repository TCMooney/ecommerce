import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from './types';

export function signIn({email, password}) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'Max Nelson',
                address: '1234 Fake St.',
                cartProducts: []
            }
        }
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function setPurchaseDetail(_id) {
    console.log(_id);
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id:0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'PULP [pulp] n. 1. A soft, moist, shapeless mass or matter. 2. A magazine or book containing lurid subject matter and being characteristically printed on rough, unfinished paper.',
                    price: '1.99',
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'American Heritage Dictionary: New College Edition',
                    price: '1.99',
                    belongsTo: [0, 6],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0078778234',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '123 Fake St.',
                }
            },
            {
                _id: 1,
                total: 1.30,
                orderNumber: 'B23623456',
                orderDate: new Date().toDateString(),
                creditCard: '-1111',
                user: {
                    name: 'Stink Finker',
                    shippingAddress: '123 Real St.',
                }
            },
            {
                _id: 2,
                total: 20.00,
                orderNumber: 'C8937678923',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Shawnda Shim',
                    shippingAddress: '123 Dirt St.',
                }
            },
            {
                _id: 3,
                total: 3.50,
                orderNumber: 'G235623622666',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'JoHudgensrdan ',
                    shippingAddress: '123 Lamp St.',
                }
            },
            {
                _id: 4,
                total: 6.66,
                orderNumber: 'F2345234666',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jorgin Huggins',
                    shippingAddress: '123 Phone St.',
                }
            },
            {
                _id: 5,
                total: 2.50,
                orderNumber: 'R2345232323',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jiggins Horgun',
                    shippingAddress: '123 Cup St.',
                }
            },
            {
                _id: 6,
                total: 8.09,
                orderNumber: 'C8675309666',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '123 Head St.',
                }
            },
            {
                _id: 7,
                total: 22.22,
                orderNumber: 'T342534562323',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Judgen Hriggins',
                    shippingAddress: '123 Fake St.',
                }
            }
        ]
    })
}