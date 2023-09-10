export interface Obras {
    titulo: string;
    plataforma: string;
    urlLogo: string;
    tipo: string;
    temporadas: number;
    episodiosPorTemporada: number;
    idUsuario: number;
    assistido: boolean;
}

export interface CadastroObras {
    titulo: string;
    plataforma: string;
    tipo: string;
    temporadas: number;
    episodiosPorTemporada: number;
    idUsuario: number;
    assistido: boolean;
    usuario: Usuario;
}

interface Usuario {
    id: number;
    name: string;
}

export interface Plataformas {
    id: number;
    name: string;
}

export interface Tipos {
    id: number;
    name: string;
}