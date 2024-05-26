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
    return localStorage.getItem('Tea-Products') || []
}