import { Funcionario } from './exercicio01'

const funcionario2 = new Funcionario('Robertchum', 'robertin@gmal.com', '84977572444', 'Desenvolvedor', '05636', new Date('1974-10-25'), ['Rua do Limoreiro'], '12345678900', 'Masculino' )

funcionario2.mostrarDados()

class Desenvolvedor extends Funcionario{
    habilidades: string[];
    ano_experiencia: number;
    constructor(
        ano_experiencia: number, 
        habilidades: string[],
        endereco: string[],
        cpf: string, 
        nome: string, 
        email:string, 
        telefone: string, 
        cargo: string, 
        data_nascimento:Date,
        matricula: string, 
        genero?:string
        ){
        super(nome, email, telefone, cargo, matricula, data_nascimento, endereco, cpf, genero, )
        this.habilidades = habilidades;
        this.ano_experiencia = ano_experiencia
    }
    mostrarDados() {
        super.mostrarDados()
        console.log(`Experiencia:__________ ${this.ano_experiencia}`)
        console.log(`Habilidades:__________ ${this.habilidades}`)
    }
}

const dev1 = new Desenvolvedor(
    5, // ano_experiencia
    ['JavaScript', 'TypeScript', 'React'], // habilidades
    ['Rua Exemplo, 123', 'Cidade Exemplo', 'Estado Exemplo'], // endereco
    '123.456.789-10', // cpf
    'Fulano de Tal', // nome
    'fulano@example.com', // email
    '123456789', // telefone
    'Desenvolvedor Full Stack', // cargo
    new Date('1990-01-01'), // data_nascimento
    'ABC123', // matricula
    'Masculino' // genero
);

dev1.mostrarDados()

class DevFront extends Desenvolvedor{
    constructor(
        ano_experiencia: number, 
        habilidades: string[],
        endereco: string[],
        cpf: string, 
        nome: string, 
        email:string, 
        telefone: string, 
        cargo: string, 
        data_nascimento:Date,
        matricula: string, 
        genero?:string

    )   
}