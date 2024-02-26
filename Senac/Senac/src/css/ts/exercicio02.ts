//Cadastramento de Livros, apontando detalhes como quantidade em estoque, sinopse, categoria, etc.

class Livro {
    titulo: string;
    autor: string;
    editora: string;
    categoria: string;
    estoque: number;
    constructor(titulo: string, autor: string, editora: string, categoria: string, estoque: number) {
        this.titulo=titulo;
        this.autor=autor;
        this.editora=editora;
        this.categoria=categoria;
        this.estoque=estoque;
    }
}
const novoLivro = new Livro ('O Pequeno Principe', 'Antoine de Saint-Exupéry', 'Nova Fronteira', 'Ficção Especulativa, Fábula', (30))
//console.log(novoLivro)

class Usuario {
    nome: string;
    endereco: string;
    telefone: string;
    pendencia: boolean;
    constructor(nome: string, endereco: string, telefone: string, pendencia: boolean){
        this.nome=nome;
        this.endereco=endereco;
        this.telefone=telefone;
        this.pendencia=pendencia;
    }
}
const novoUsuario = new Usuario ('Pedro Henrique','Rua Tchudusbango Tchudusbago','84996061580', false)

class Emprestimo{
    dataRetirada: Date;
    dataRetorno: Date;
    livro:Livro;
    usuario:Usuario;
    constructor(dataRetirada: Date, dataRetorno: Date, livro:Livro, usuario:Usuario) {
        this.dataRetirada=dataRetirada;
        this.dataRetorno=dataRetorno;
        this.livro=livro;
        this.usuario=usuario;

    }
    mostrarDados(){
        console.log('----------Dados do Emprestimo----------')
        console.log(`Nome do Usuario: ${novoUsuario.nome}`)
        console.log(`Livro: ${novoLivro.titulo}`)
        console.log(`Data de Retirada: ${this.dataRetirada.toLocaleDateString('pt-BR')}`)
        console.log(`Data de Retorno: ${this.dataRetorno.toLocaleDateString('pt-BR')}`)
    }
}
const novoEmprestimo = new Emprestimo (new Date("2024-2-21"),new Date ("2024-3-18"),novoLivro,novoUsuario)
console.log(novoEmprestimo.mostrarDados())

//console.log(novoEmprestimo)