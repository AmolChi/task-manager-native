export type User = {
    id:String,
    email:String,
    password:String,
    tasks: Task[]
}

export type Task = {
    id:String,
    title:String,
    description: String,
    dueDate: Date,
    status: boolean
}

export type UserState = {
    users:User[],
    activeUser: User|null
}