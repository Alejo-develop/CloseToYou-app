export interface UserInfoInterface{
    name?: string;
    lastName?: string ;
    secondName?: string;
    phone?: string;
    email?: string;
    secondNumber?: string;
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