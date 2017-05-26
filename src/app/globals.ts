const ROOT = 'http://localhost:80/api';
// const ROOT = 'https://bookworms-booky.herokuapp.com/api';


export const GLOBALS = {
    API: {
        ROOT            : ROOT,
        LOGIN           : `${ROOT}/login`,
        REGISTER        : `${ROOT}/register`,
    },
    LOCAL_TOKEN_KEY     : 'STORED_TOKEN',
    LOCAL_CART_KEY      : 'STORED_SHOPPING_CART_TOKEN'
};
