
export enum Role {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    USER = "USER",
    GUEST = "GUEST",
}

export interface User {
    id: string;
    name : string;
    email : string;
    rome : Role;
    teamId : string;
    team? : Team;
    createdAt : Date;
    UpdatedAt : Date;
}

export interface Team {
    id : string;
    name : string;
    description?: string;
    code : string;
    members :User[];
    createdAt : Date;
    UpdatedAt : Date;
}