import IParseMailTemplateDTO from '@shared/containers/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContact {
  name: string;
  address: string;
}

export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
