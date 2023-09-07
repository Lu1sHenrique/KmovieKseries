export default class CadastroObra {
    titulo: string;
    plataforma: string;
    tipo: string;
    temporadas: number;
    episodiosPorTemporada: number;
    idUsuario: number;
    assistido: boolean;

    constructor(titulo: string, plataforma: string, tipo: string, temporadas: number, episodiosPorTemporada: number, idUsuario: number, assistido: boolean) {
      this.titulo = titulo;
      this.plataforma = plataforma;
      this.tipo = tipo;
      this.temporadas = temporadas;
      this.episodiosPorTemporada = episodiosPorTemporada;
      this.idUsuario = idUsuario;
      this.assistido = assistido;
    }
  }