export const selectorIsLoggedIn = state => state.auth?.isLoggedIn;

export const selectorUser = state => state.auth?.user;

export const selectorUserName = state => state.auth.user?.name;
