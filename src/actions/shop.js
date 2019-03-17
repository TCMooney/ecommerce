import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from "./types";

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields    
    })
}

export function filterProductsWithCategoryId(_id) {
    console.log(_id, 'jello');
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'Javascript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'PULP [pulp] n. 1. A soft, moist, shapeless mass or matter. 2. A magazine or book containing lurid subject matter and being characteristically printed on rough, unfinished paper.',
                price: '1.99',
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'American Heritage Dictionary: New College Edition',
                price: '1.99',
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'INT. COFFEE SHOP – MORNING',
                price: '1.99',
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'Javascript Design',
                description: "A normal Denny's, Spires-like coffee shop in Los Angeles. It's about 9:00 in the morning. While the place isn't jammed, there's a healthy number of people drinking coffee, munching on bacon and eating eggs.",
                price: '1.99',
                belongsTo: [0, 1]
            },
            {
                _id: 4,
                title: 'User Interface Design',
                description: "Two of these people are a YOUNG MAN and a YOUNG WOMAN. The Young Man has a slight working-class English accent and, like his fellow countryman, smokes cigarettes like they're going out of style.",
                price: '1.99',
                belongsTo: [0, 2]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'It is impossible to tell where the Young Woman is from or how old she is; everything she does contradicts something she did. The boy and girl sit in a booth. Their dialogue is to be said in a rapid pace "HIS GIRL FRIDAY" fashion.',
                price: '1.99',
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'Advanced Object Oriented Programming',
                description: "No, forget it, it's too risky. I'm through doin' that shit.",
                price: '1.99',
                belongsTo: [0, 6]
            }
        ]
    })
}