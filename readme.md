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

enum CommissionType {
  individual = "individual",
  group, = "group"
}

class Still extends Department {
  commissonType: CommissionType;
  super();
}

class Glass extends Department {
  commissonType: CommissionType;
  super();
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
  department: Department;
  updatedAt: Date;
  createdAt: Date;
}

class Production {
  id: string;
  expertArea: ExpertArea; // qual serviço foi executado Corte, Montagem, Instalação 
  employee: Employee; // colaborador que executou o serviço
  productionAt: Date; // data que o foi produzido
  commissionPercent: number;
  amount: number; // valor total da comissão
  divisionBy: number;
  amountByEmployees: number;
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
  productions: Production[];
  updatedAt: Date;
  createdAt: Date;

  color: string; //Cor
  grade: string; //
}
```


```json

{
  "budget": {
    "id": "63166c64f54f0c0dddb5a730",
    "shortId": 2914,
    "customer": "Niedja Marrizze Alves Leal",
    "saller": null,
    "discont": 3732.69,
    "discontPercent": 20.47,
    "subTotal": 14500,
    "total": 18232.69,
    "itemsCount": null,
    "updatedAt": "2022-09-05T21:38:44.211Z",
    "createdAt": "2022-09-05T21:38:44.208Z",
    "budgetItems": [
      {
        "budgetId": "63166c64f54f0c0dddb5a730",
        "id": "63166c64f54f0c0dddb5a731",
        "itemOrd": 1,
        "description": "PERGOLADO",
        "measure": "2400 X 2200",
        "width": 2400,
        "height": 2200,
        "quantity": 1,
        "amount_unit": 18232.69,
        "discont": 3732.23,
        "subTotal": 18232.69,
        "total": 18232.69,
        "department": "Still",
        "productions": [
          {
            "id":"9908b8ba-3865-4b12-afba-573eecc00dd5,
            "budgetItemId": "63166c64f54f0c0dddb5a731",
            "serviceType": "Corte",
            "employee": "Ademir Jorge",
            "commissionPercent": 10,
            "amount": 100.00
            "productionAt": "2022-09-05T21:38:44.212Z",
            "updatedAt": "2022-09-05T21:38:44.212Z",
            "createdAt": "2022-09-05T21:38:44.208Z"   
          },
          {
            "id":"9908b8ba-3865-4b12-afba-573eecc00dd5,
            "budgetItemId": "63166c64f54f0c0dddb5a731",
            "serviceType": "Manutenção",
            "employee": "Ademir Jorge",
            "commissionPercent": 10,
            "amount": 100.00
            "productionAt": "2022-09-05T21:38:44.212Z",
            "updatedAt": "2022-09-05T21:38:44.212Z",
            "createdAt": "2022-09-05T21:38:44.208Z"    
          },
          {
            "id":"9908b8ba-3865-4b12-afba-573eecc00dd5,
            "budgetItemId": "63166c64f54f0c0dddb5a731",
            "serviceType": "Instalação",
            "employee": "Ademir Jorge",
            "commissionPercent": 10,
            "amount": 100.00
            "productionAt": "2022-09-05T21:38:44.212Z",
            "updatedAt": "2022-09-05T21:38:44.212Z",
            "createdAt": "2022-09-05T21:38:44.208Z"  
          },
          {
            "id": "9908b8ba-3865-4b12-afba-573eecc0dd5", "budgetItemId": "63166c64f54f0c0dddb5a731",
            "serviceType": "Manutenção",
            "employee": "Ademir Jorge",
            "commissionPercent": 10,
            "amount": 100.00
            "productionAt": "2022-09-05T21:38:44.212Z",
            "updatedAt": "2022-09-05T21:38:44.212Z",
            "createdAt": "2022-09-05T21:38:44.208Z"  
          }
        ]
        "updatedAt": "2022-09-05T21:38:44.212Z",
        "createdAt": "2022-09-05T21:38:44.208Z"
      },
      {
        "budgetId": "63166c64f54f0c0dddb5a730",
        "id": "63166c64f54f0c0dddb5a731",
        "itemOrd": 1,
        "description": "PERGOLADO",
        "measure": "2400 X 2200",
        "width": 2400,
        "height": 2200,
        "quantity": 1,
        "amount_unit": 18232.69,
        "discont": 3732.23,
        "subTotal": 18232.69,
        "total": 18232.69,
        "department": "Glass",
        "productions": [
          {
            "id": "9908b8ba-3865-4b12-afba-573eecc0dd5",          "budgetItemId": "63166c64f54f0c0dddb5a731",
            "expertArea": "Instalação",
            "employees": [
              {
                "Luiz Carlos"
              },
              {
                "Jhonisson"
              },
              {
                "Aldiney"
              }
            ],
            "commissionPercent": 5,
            "amount": 100.00
            "divisionBy": 3,
            "amountByEmployees": 15.00            
            "productionAt": "2022-09-05T21:38:44.212Z",
            "updatedAt": "2022-09-05T21:38:44.212Z",
            "createdAt": "2022-09-05T21:38:44.208Z"   
          },          
        ]
        "updatedAt": "2022-09-05T21:38:44.212Z",
        "createdAt": "2022-09-05T21:38:44.208Z"
      }
    ]
  }
}
```