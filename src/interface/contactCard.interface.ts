export interface ContactCardProps{
    index: string;
    name: string;
    seconName?: string;
    lastName?: string;
    role?: string;
    number?: string;
    secondPhone?: string;
    email?: string;
    address?: string;
    img?: string;
    latitude?: number | null,
    longitude?: number | null,
}