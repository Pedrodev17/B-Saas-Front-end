export interface Collaborator {
  id: number;
  name: string;
  email: string;
  position?: string;
  createdAt: Date;
  updatedAt?: Date;
}
