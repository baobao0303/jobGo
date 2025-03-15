interface UserPayload {
  name: string
  email: string
  role: string
  id: number
}

declare namespace Express {
  export interface Request {
    currentUser: UserPayload
  }
  export interface Response {
    currentUser: UserPayload
  }
}
