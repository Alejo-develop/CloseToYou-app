export interface UserInfoInterface{
    id?: string
    name?: string;
    lastName?: string ;
    secondName?: string;
    phone?: string;
    email?: string;
    secondPhone?: string;
    address?: string;
    img?: string | null;
}

export interface SignUpInterface{
    name: string;
    email: string;
    password: string;
    repeatPassword?: string;
}

export interface LoginInterface{
    email: string; 
    password: string;
}