const initialState = {
    data: {
        "0800": 8,
        "0830": 8, 
        "0900": 8,
        "0930": 8, 
        "1000": 8,
        "1030": 8, 
        "1100": 8,
        "1130": 8, 
        "1200": 8,
        "1230": 8, 
        "1300": 8,
        "1330": 8, 
        "1400": 8,
        "1430": 8, 
        "1500": 8,
        "1530": 8, 
        "1600": 8,
        "1630": 8, 
        "1700": 8,
        "1730": 8, 
        "1800": 8,
        "1830": 8, 
        "1900": 8,
        "1930": 8, 
    },
}

function rootReducer (state= initialState, action) {
    
    switch(action.type) {
        case "SUMA":
            return{
                data: action.payload
            }
        default: return state
    }
}

export default rootReducer;