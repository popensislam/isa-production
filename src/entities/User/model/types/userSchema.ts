export interface UserSchema {
    userData?: User,
    _inited: boolean
}

export interface User {
    id: string,
    username: string,
    avatar?: string
}
