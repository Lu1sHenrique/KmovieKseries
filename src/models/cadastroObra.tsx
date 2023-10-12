export default class CadastroObra {
    titulo: string;
    streaming: number;
    tipo: number;
    temporadas: number;
    episodiosPorTemporada: number;
    idUsuario: number;
    assistido: boolean;

    constructor(titulo: string, streaming: number, tipo: number, temporadas: number, episodiosPorTemporada: number, idUsuario: number, assistido: boolean) {
      this.titulo = titulo;
      this.streaming = streaming;
      this.tipo = tipo;
      this.temporadas = temporadas;
      this.episodiosPorTemporada = episodiosPorTemporada;
      this.idUsuario = idUsuario;
      this.assistido = assistido;
    }
  }