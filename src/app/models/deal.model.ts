export interface Deal {
  id: number;
  name: string;
  description?: string;
  value: number;
  status: 'open' | 'won' | 'lost';
  createdAt: Date;
  updatedAt?: Date;
  // Adicione outros campos que precisar
}
