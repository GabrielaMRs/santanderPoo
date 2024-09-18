class Usuario {
  id: number;
  nome: string;
  email: string;
  nascimento: Date;
  telefone: string;

  constructor(id: number, nome: string, email: string, nascimento: Date, telefone: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.telefone = telefone;
  }

  cadastrar(): void {
      console.log(`${this.nome} cadastrado com sucesso!`);
  }

  login(): void {
      console.log(`${this.nome} logado com sucesso!`);
  }
}

class Cliente extends Usuario {
  comprarProdutos(): void {
    console.log(`${this.nome} comprou produtos.`);
  }

  adotarPet(): void {
    console.log(`${this.nome} adotou um pet.`);
  }

  agendarServicos(): void {
    console.log(`${this.nome} agendou um serviço.`);
  }
}

class Admin extends Usuario {
  gerenciarProdutos(): void {
    console.log(`${this.nome} está gerenciando produtos.`);
  }

  gerenciarPets(): void {
    console.log(`${this.nome} está gerenciando pets.`);
  }

  gerenciarServicos(): void {
    console.log(`${this.nome} está gerenciando serviços.`);
  }
}

const cliente1 = new Cliente(1, "Maria", "maria@example.com", new Date("1990-05-15"), "1234-5678");
const admin1 = new Admin(2, "João", "joao@example.com", new Date("1985-10-20"), "8765-4321");

cliente1.cadastrar();
cliente1.login();
cliente1.comprarProdutos();
cliente1.adotarPet();
cliente1.agendarServicos();

admin1.cadastrar();
admin1.login();
admin1.gerenciarProdutos();
admin1.gerenciarPets();
admin1.gerenciarServicos();
