export const increment = (n) => {
    return {
        type: 'INCREMENT',
        payload: n
    }
}

export const decrement = (n) => {
    return {
        type: 'DECREMENT',
        payload: n
    }
}

export const login = () => {
    return {
        type: 'LOGIN'
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}