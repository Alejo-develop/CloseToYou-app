export interface ContactInterface{
    id?: string;
    name: string;
    userId?: string;
    secondName?: string;
    role?: string;
    lastName?: string;
    phone?: string;
    secondPhone?: string;
    email?: string;
    address?: string;
    img?: string;
    latitude?: number | null,
    longitude?: number | null,
}

export interface CreateContactInterface{
    name: string;
    userId?: string;
    secondName?: string;
    lastName?: string;
    phone?: string;
    role?: string;
    secondPhone?: string;
    email?: string;
    address?: string;
    img?: string;
    latitude?: number | null,
    longitude?: number | null,
}