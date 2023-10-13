export interface Obras {
    titulo: string;
    plataforma: number;
    nomePlataforma: string;
    idTipo: number
    tipo: string;
    temporadas: number;
    episodiosPorTemporada: number;
    idUsuario: number;
    assistido: boolean;
    urlLogo: string;
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
    urlLogo: string
}

export interface Tipos {
    id: number;
    name: string;
}