const ROOT = 'http://localhost:8080';

export const GLOBALS = {
    API: {
        ROOT            : ROOT,
        LOGIN           : `${ROOT}/login`,
        REGISTER        : `${ROOT}/register`,
    },
    LOCAL_TOKEN_KEY     : 'STORED_TOKEN',
    LOCAL_CART_KEY      : 'STORED_SHOPPING_CART_TOKEN'
};
