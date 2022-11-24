![control](./src/assets/control.svg)

# Introduction

O sistema deve ser capaz de importar e fazer os cálculos de comissões antigas e permitir fazer lançamento das novas comissões.

O sistema deve ser capaz de gerar relatório da comissão separada por funcionário, a estrutura deve seguir a seguinte estrutura: 

--| Orcamento | Cliente

----| Item| Descrição | Quantidade | Valor Item | Porcentagem comissão | Valor da comissão




# Entities Map

```ts
enum CommissionType {
  individual = "individual",
  group = "group"
}

class PersonalDepartment {
  id: string;
  description: string;
  employee: PeopleEntity[];
  commissionType: CommissionType;
  createdAt: Date;
  updatedAt: Date;
}

class ExpertArea {
  id: string;
  description: string; //Corte,Montagem, Instalação
  updatedAt: Date;
  createdAt: Date;
}

class Commissioned{
  id: string;
  expertArea: ExpertArea;
  commissionPercent?: number;
  updatedAt: Date;
  createdAt: Date;
}

class Employee {
  id: string;
  salary?: number;
  commissionedBy?: Commissioned[];
  department: PersonalDepartment;
}

class Address {
  id: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  updatedAt: Date;
  createdAt: Date;
}

class PeopleEntityAbstract {
  id: string;
  email: string;
  phone: string;
  note: string; // Observações
  address: Address;
  updatedAt: Date;
  createdAt: Date;
}

class Permission {
  id: string;
  name: string;
  isMaterAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

class User extends PeopleEntityAbstract{ 
  id: string;
  name: string;
  password: string;
  avatar?: string;
  permissions: Permission[];
  userData: PeopleEntity; // Persistir como type UserData = PeopleEntity
}

class Company extends PeopleEntityAbstract {
  employees: PeopleEntity[];
  customers: PeopleEntity[];
  suppliers: PeopleEntity[];
  users: User[];
  buggets: Bugget[];
}

enum TypePerson {
  NATURAL = "natural",
  JURIDICAL = "juridical"
}

// Clientes, Forncedores, Funcionários

class PeopleEntity extends PeopleEntityAbstract { 
  typePerson: TypePerson | string; //Pessoa Fisica ou Juridica
  
  fistName: string;
  lastName: string;
  fullName: string;
  individualTaxIdentification: string; //CPF(ITIN)

  tradingName: string; //Nome Fantasia
  comapanyName: string; //Razão Social
  stateRegistration: string; //Inscrição Estadual
  employerIdentificationNumber: string; //CNPJ (EIN)

  isCustomer: boolean;
  isSupplier: boolean;
  isEmployee: boolean;

  employee: Employee;
}

class Production {
  id: string;
  expertArea: ExpertArea; // qual serviço foi executado Corte, Montagem, Instalação 
  employee: Employee; // colaborador que executou o serviço
  productionAt: Date; // data que o foi produzido
  commissionPercent: number;
  
  /* 
  Caso comissão seja individual, informado em commissionType contido em Department, o valor da comissão é calculado pelo valor especificado no campo "commissionPercent" dentro de Commissioned
  */
  

  amount: number; // valor total da comissão
  
  /* 
  Caso for comissão em grupo, informado em commissionType contido em Department, o valor da comissao é calculado pelo valor especificado no campo "commissionPercent" dentro de Department
  */

  divisionBy: number; // quantidade de pessoas que dividiram a comissão
  amountByEmployees: number; // valor da comissão por pessoa
  
  updatedAt: Date;
  createdAt: Date;
}

class Stage {
  id: string;
  name: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
}

class WorkSpace {
  id: string;
  name: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
}

class Budget {
  commissionStatus: 'open'|'closed';
  status: 'finished' | 'doing'
  id: string;
  shortId: number;
  customer: string;
  seller: Employee;
  discount: number;
  discountPercent: number;
  subTotal: number;
  total: number;
  itensAccount: number
  updatedAt: Date;
  createdAt: Date;
}

class BudgetItens {
  id: string;
  itemOrd: number;
  description: string;
  width: number;
  height: number;
  quantity: number;
  amount_unit: number;
  discount: number;
  total: number;
  productions: Production[];
  updatedAt: Date;
  createdAt: Date;
  color: string; //Cor
  grade: string; //
}


/*
Controle de Acesso

|->Owner(Christian Cesar)
  |-> Company 01 (YoungWolf)
    |-> 
  |-> Company 02 (CopyRights)
  |-> Company 03 (ForeCast)

 - Cliente    -
               |- Podem ser pessoas fisicas ou juridicas
 - Fornecedor -

- Usuarios -> Nada tem haver com o controle de Clientes e Fornecedores
*/


```


