![control](./src/assets/control.svg)

```ts
class Team {
  name: string
}

class Aluminum extends Team {
  employee: Employee[];
  commissionPercent: number;
  createdAt: Date;
  updatedAt: Date;
}

class Responsibility {
  uuid: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
}

class ServicesType {
  uuid: string;
  description: string; //Corte,Montagem, Instalação
  commissionPercent: number;
  updatedAt: Date;
  createdAt: Date;
}

class Employee {
  uuid: string;
  name: string;
  salary?: number;
  responsibility: Responsibility;
  commissionedBy?: Array<ServicesType>;
  updatedAt: Date;
  createdAt: Date;
}

class Production {
  uuid: string;
  serviceType: ServicesType; // qual serviço foi executado Corte, Montagem, Instalação 
  employee: Employee; // colaborador que executou o serviço
  productionAt: Date; // data que o foi produzido
  amount: number; // valor total da comissão
  updatedAt: Date;
  createdAt: Date;
}
class Stage {
  uuid: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
}

class Budget {
  commissionStatus: boolean;
  stage: Stage;
  status: 'conclused' | 'doing'
  uuid: string;
  shortId: number;
  customer: string;
  saller: Employee;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itensAcount: number
  updatedAt: Date;
  createdAt: Date;
}

class BudgetItens {
  uuid: string;
  itemOrd: number;
  description: string;
  width: number;
  height: number;
  quantity: number;
  amount_unit: number;
  discount: number;
  total: number;
  production: Production;
  updatedAt: Date;
  createdAt: Date;
}

```