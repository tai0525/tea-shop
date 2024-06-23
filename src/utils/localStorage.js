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

export const setOrder = (tableData, formData) => {
    localStorage.setItem('order', JSON.stringify({ product: tableData.value, ...formData }));
}

export const getOrder = () => {
    return JSON.parse(localStorage.getItem('order')) || []
}

export const removeOrder = () => {
    localStorage.removeItem('order')
}