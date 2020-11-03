export interface User {
  username: string;
  employees: Array<{image: string, name: string, last_name: string, position: string}>;
}
