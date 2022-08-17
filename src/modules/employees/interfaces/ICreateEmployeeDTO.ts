import ExpertArea from "../entities/ExpertArea";

export default interface ICreateEmployeeDTO {
  name: string;
  salary?: number;
	commissionedBy?: Array<ExpertArea>;
}