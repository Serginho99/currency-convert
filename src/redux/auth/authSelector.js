export const selectorIsLoggedIn = state => state.auth?.isLoggedIn;

export const selectorUser = state => state.auth?.user;

export const selectorToken = state => state.auth.token;

export const selectorUserName = state => state.auth.user?.name;
