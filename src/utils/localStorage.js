export const setToken = (token) => {
    localStorage.setItem('Tea-Token', token)
}
export const getToken = () => {
    return localStorage.getItem('Tea-Token')
}
export const removeToken = () => {
    localStorage.removeItem('Tea-Token')
}

export const setProducts = (products) => {
    localStorage.setItem('Tea-Products', JSON.stringify(products))
}

export const getProducts = () => {
    return JSON.parse(localStorage.getItem('Tea-Products')) || []
}

export const setCart = (products) => {
    localStorage.setItem('Tea-Cart', JSON.stringify(products))
}
export const getCart = () => {
    return JSON.parse(localStorage.getItem('Tea-Cart')) || []
}
export const removeCart = () => {
    localStorage.removeItem('Tea-Cart')
}
export const setOrder = (data) => {
    localStorage.setItem('order', JSON.stringify(data));
}
export const getOrder = () => {
    return JSON.parse(localStorage.getItem('order')) || []
}
export const removeOrder = () => {
    localStorage.removeItem('order')
}
export const setIsAdmin = (isAdmin) => {
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
}
export const getIsAdmin = () => {
    return JSON.parse(localStorage.getItem('isAdmin'));
}
export const removeIsAdmin = () => {
    localStorage.removeItem('isAdmin');
}
export const setLang = (lang) => {
    localStorage.setItem('language', lang)
}
export const getLang = () => {
    return localStorage.getItem('language')
}