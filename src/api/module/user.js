import server from '../index'

export const userApi = {
    login: async () => {
        const data = await server.post('/login')
        return data
    }
}

