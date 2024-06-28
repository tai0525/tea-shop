import server from '../index'

export const userApi = {
    login: async (username) => {
        const data = await server.post('/login', { username })
        return data
    }
}

