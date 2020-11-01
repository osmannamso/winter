export interface Employee {
  born_date: string;
  comment: string;
  company: number;
  document_type: string;
  email: string;
  id: number;
  image: string;
  issue_country: string;
  last_name: string;
  name: string;
  number: string;
  patronymic: string;
  phone: string;
  position: string;
  sex: string;
  user: number;

  expanded?: boolean;
}
