export class Artista{
    constructor(
        public id:number,
        public nombre: string,
        public biografia:string,
        public tipo: string,
        public pais: string,
        public generoMusical: string[],
        public oyentesMensuales: number
    ){}
}