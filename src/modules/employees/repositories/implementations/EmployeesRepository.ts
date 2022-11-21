import { prisma } from "../../../../../prisma";
import { CreateEmployeeDTO } from "../../dtos/CreateEmployeeDTO";
import { CommissionedEntity } from "../../entities/CommissionedEntity";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { FindEmployeeByNameDTO, FindEmployeeDTO, IEmployeesRepository, UpdateEmployeeDTO } from "../interfaces/IEmployeesRepository";

export class EmployeesRepository implements IEmployeesRepository {
  async createEmployee({
    name,
    departmentId,
    salary
  }: CreateEmployeeDTO): Promise<EmployeeEntity> {
    const employee = await prisma.employee.create({
      data: {
        name,
        departmentId,
        salary,
      },
      include: {
        Department: true,
        commissionedBy: {
          include: {
            expertArea: true
          }
        }
      }
    })

    const commissionByFmt = employee.commissionedBy.map((commissioned): CommissionedEntity => {
      return {
        id: commissioned.id,
        active: commissioned.active,
        commissionPercent: commissioned.commissionPercent,
        expertArea: {
          id: commissioned.expertArea.id,
          name: commissioned.expertArea.name,
          description: commissioned.expertArea.description,
          createdAt: commissioned.expertArea.createdAt,
          updatedAt: commissioned.expertArea.updatedAt,
        },
        createdAt: commissioned.createdAt,
        updatedAt: commissioned.updatedAt,
      }
    })
   
    return {
      id: employee.id,
      name: employee.name,
      salary: employee.salary,
      department: employee.Department,
      commissionedBy: commissionByFmt,
      active: employee.active,
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt,
    };
  }

  async updateEmployee({
    id,
    name,
    active,
    departmentId,
    salary
  }: UpdateEmployeeDTO): Promise<EmployeeEntity> {
    const employee = await prisma.employee.update({
      where: {
        id
      },
      data: {
        name,
        active,
        departmentId,
        salary,
      },
      include: {
        Department: true,
        commissionedBy: {
          include: {
            expertArea: true
          }
        }
      }
    })

    return {
      id: employee.id,
      name: employee.name,
      salary: employee.salary,
      department: employee.Department,
      commissionedBy: employee.commissionedBy,
      active: employee.active,
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt,
    };
  }

  async findEmployeeById({
    id
  }: FindEmployeeDTO): Promise<EmployeeEntity | null> {
    const employee = await prisma.employee.findFirst({
      where: {
        id
      },
      include: {
        Department: true,
        commissionedBy: {
          include: {
            expertArea: true
          }
        }
      }
    })

     if (employee) {
      const commissionByFmt = employee.commissionedBy.map((commissioned): CommissionedEntity => {
        return {
          id: commissioned.id,
          active: commissioned.active,
          commissionPercent: commissioned.commissionPercent,
          expertArea: {
            id: commissioned.expertArea.id,
            name: commissioned.expertArea.name,
            description: commissioned.expertArea.description,
            createdAt: commissioned.expertArea.createdAt,
            updatedAt: commissioned.expertArea.updatedAt,
          },
          createdAt: commissioned.createdAt,
          updatedAt: commissioned.updatedAt,
        }
      })

      return {
        id: employee.id,
        name: employee.name,
        salary: employee.salary,
        department: employee.Department,
        commissionedBy: commissionByFmt,
        active: employee.active,
        createdAt: employee.createdAt,
        updatedAt: employee.updatedAt,
      }
    }

    return null
  }

  async findAllEmployees(): Promise<EmployeeEntity[]> {
    const employees = await prisma.employee.findMany({
      include: {
        Department: true,
        commissionedBy: {
          include: {
            expertArea: true
          }
        }
      }
    })

    const employeesArray = employees.map(employee => {

      const commissionByFmt = employee.commissionedBy.map((commissioned): CommissionedEntity => {
        return {
          id: commissioned.id,
          active: commissioned.active,
          commissionPercent: commissioned.commissionPercent,
          expertArea: {
            id: commissioned.expertArea.id,
            name: commissioned.expertArea.name,
            description: commissioned.expertArea.description,
            createdAt: commissioned.expertArea.createdAt,
            updatedAt: commissioned.expertArea.updatedAt,
          },
          createdAt: commissioned.createdAt,
          updatedAt: commissioned.updatedAt,
        }
      })

      return {
        id: employee.id,
        name: employee.name,
        salary: employee.salary,
        department: employee.Department,
        commissionedBy: commissionByFmt,
        active: employee.active,
        createdAt: employee.createdAt,
        updatedAt: employee.updatedAt,
      }
    })

    return employeesArray;
  }

  async findEmployeeByName({
    name
  }: FindEmployeeByNameDTO): Promise<EmployeeEntity | null> {
    const employee = await prisma.employee.findUnique({
      where: {
        name
      },
      include: {
        Department: true,
        commissionedBy: {
          include: {
            expertArea: true
          }
        }
      }
    })

    if (employee) {
      const commissionByFmt = employee.commissionedBy.map((commissioned): CommissionedEntity => {
        return {
          id: commissioned.id,
          active: commissioned.active,
          commissionPercent: commissioned.commissionPercent,
          expertArea: {
            id: commissioned.expertArea.id,
            name: commissioned.expertArea.name,
            description: commissioned.expertArea.description,
            createdAt: commissioned.expertArea.createdAt,
            updatedAt: commissioned.expertArea.updatedAt,
          },
          createdAt: commissioned.createdAt,
          updatedAt: commissioned.updatedAt,
        }
      })
      
      return {
        id: employee.id,
        name: employee.name,
        salary: employee.salary,
        department: employee.Department,
        commissionedBy: commissionByFmt,
        active: employee.active,
        createdAt: employee.createdAt,
        updatedAt: employee.updatedAt,
      }
    }

    return null;

  }

}