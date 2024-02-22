// Cadastro de Funcionários:
// • Detalhes pessoais e profissionais dos colaboradores.
class Pessoa {
    nome: string;
    email: string;
    telefone: string;
    data_nascimento: Date;
    endereco: string[];
    cpf: string;
    genero?: string;
    constructor(nome: string, email: string, telefone: string, data_nascimento: Date, endereco: string[], cpf: string, genero?: string){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.cpf = cpf;
        this.genero = genero

    }
    mostrarDados(){
        console.log('-----Dados Pessoa-----')
        console.log(`Nome: ${this.nome}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Data de Nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`)
        console.log(`Endereço: ${this.endereco}`)
        console.log(`CPF: ${this.cpf}`)
        if (this.genero) {
            console.log(`Gênero: ${this.genero}`)
        }
    }
}

class Funcionario extends Pessoa {
    cargo: string;
    matricula: string;

    constructor(nome: string, email: string, telefone: string, cargo: string, matricula: string, data_nascimento: Date, endereco: string[], cpf: string, genero?: string) {
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero)
        this.cargo = cargo
        this.matricula = matricula;
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matrícula: ${this.matricula}`)
        console.log('-----------------------------------------')
        
        }
    
}
const funcionario1 = new Funcionario('Valtemir', 'val@gmail.com', "1234567890", 'medico', 'matricula01', new Date('2023-2-23'), ['Rua','Tchudubangos','Tchudubagos'] ,'12345678900')
funcionario1.mostrarDados()

class Paciente extends Pessoa {
    rg: string;
    obs_alergias?: string;
    constructor(nome: string, cpf: string, rg: string, telefone: string, email: string, endereco: string[], data_nascimento: Date, obs_alergias?: string, genero?: string) {
        super(nome, email, telefone, data_nascimento, endereco, cpf, genero)
        this.rg = rg;
        this.obs_alergias = obs_alergias;
    }
    mostrarDados(){
        super.mostrarDados()
        console.log(`RG: ${this.rg}`)
        if(this.obs_alergias) {
            console.log(`Alergias: ${this.obs_alergias}`)
        }
    }
}

const paciente1 = new Paciente('Valtemir', '1234567890', '0987654321', '84 9 9999-999', 'val@gmail', ['Rua','tal','de','tal'], new Date('10-6-2003'), "true" )


// Cadastro de Consultas:
//• Dados específicos sobre cada consulta, incluindo informações importantes.
class Consulta {
    local: string;
    data: Date;
    convenio: boolean;
    medico: Funcionario;
    paciente: Paciente
    constructor(localizacao: string, data: Date, convenio: boolean, medico: Funcionario, paciente: Paciente) {
        this.data = data;
        this.local = localizacao;
        this.medico = medico;
        this.convenio = convenio;
        this.paciente = paciente;
    }
}

const consulta1 = new Consulta('Mosquito', new Date('2024-9-23'), true, funcionario1, paciente1)

//console.log(consulta1)
//console.log(Pessoa)
