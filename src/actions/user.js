import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0078778234',
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Judgen Hriggins',
                    shippingAddress: '123 Fake St.',
                }
            }
        ]
    })
}