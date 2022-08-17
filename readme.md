![control](./src/assets/control.svg)

# Introduction

O sistema deve ser capaz de importar e fazer os cálculos de comissões antigas e permitir fazer lançamento das novas comissões.

O sistema deve ser capaz de gerar relatório da comissão separada por funcionário, a estrutura deve seguir a seguinte estrutura: 

--| Orcamento | Cliente

----| Item| Descrição | Quantidade | Valor Item | Porcentagem comissão | Valor da comissão




# Entities Map

```ts
class Department {
  id: string;
  description: string;
  employee: Employee[];
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
  name: string;
  salary?: number;
  commissionedBy?: Commissioned[];
  updatedAt: Date;
  createdAt: Date;
}

class Production {
  id: string;
  serviceType: ExpertArea; // qual serviço foi executado Corte, Montagem, Instalação 
  employee: Employee; // colaborador que executou o serviço
  productionAt: Date; // data que o foi produzido
  commissionPercent: number;
  amount: number; // valor total da comissão
  updatedAt: Date;
  createdAt: Date;
}

class Stage {
  id: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
}

class Budget {
  commissionStatus: 'open'|'closed';
  stage?: Stage;
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
  production: Production[];
  updatedAt: Date;
  createdAt: Date;

  color: string;
  grade: string;
}
```