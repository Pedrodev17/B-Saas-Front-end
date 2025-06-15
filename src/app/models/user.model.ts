export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'collaborator';
  createdAt: Date;
  updatedAt?: Date;
  // Adicione outros campos conforme necessário
}
