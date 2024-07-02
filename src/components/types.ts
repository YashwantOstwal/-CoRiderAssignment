interface SenderJson{
    image:string,
    is_kyc_verified:boolean,
    self:boolean,
    user_id:string
}
export interface Chat{
    id:string,
    message:string,
    sender:SenderJson,
    time:string
}
export interface Data{
    chats:Chat[],
    from:string,
    message:string,
    name:string,
    status:string,
    to:string
}
