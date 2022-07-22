
export default interface ICreateEmployeeDTO {
  name: string;
  salary?: number;
	responsabilityId?: string;
	commissionedBy?: string[];
}