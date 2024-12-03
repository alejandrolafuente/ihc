export class Reserva {
    constructor(
        public nome?: string,
        public email?: string,
        public telefone?: string,
        public departamento?: string,
        public numero?: string,
        public data?: string,
        public inicio?: string,
        public fim?: string,
        public participantes?: string,
        public evento?: string,
        public equipamentos?: string[],
        public configuracao?: string,
        public suporte?: string,
        public libras?: string,
        public infoAdicional?: string,
    ) { }
}
