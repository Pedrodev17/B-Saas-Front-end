export interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  createdAt: Date;
  updatedAt?: Date;
}
