import { Routes } from '@angular/router';

export const routes: Routes = [
  // Deals
  {
    path: 'deals/list',
    loadComponent: () =>
      import('./features/deals/list/list.component').then(m => m.DealsListComponent)
  },
  {
    path: 'deals/create',
    loadComponent: () =>
      import('./features/deals/create/create.component').then(m => m.CreateComponent)
  },
  {
    path: 'deals/edit/:id',
    loadComponent: () =>
      import('./features/deals/edit/edit.component').then(m => m.EditComponent)
  },
  {
    path: 'deals/detail/:id',
    loadComponent: () =>
      import('./features/deals/detail/detail.component').then(m => m.DetailComponent)
  },

  // Users
  {
    path: 'users/list',
    loadComponent: () =>
      import('./features/users/list/list.component').then(m => m.ListComponent)
  },
  {
    path: 'users/detail/:id',
    loadComponent: () =>
      import('./features/users/detail/detail.component').then(m => m.DetailComponent)
  },
  {
    path: 'users/edit/:id',
    loadComponent: () =>
      import('./features/users/edit/edit.component').then(m => m.EditComponent)
  },

  // Collaborators
  {
    path: 'collaborators/list',
    loadComponent: () =>
      import('./features/collaborators/list/list.component').then(m => m.ListComponent)
  },

  // Contacts
  {
    path: 'contacts/list',
    loadComponent: () =>
      import('./features/contacts/list/list.component').then(m => m.ListComponent)
  },
  {
    path: 'contacts/detail/:id',
    loadComponent: () =>
      import('./features/contacts/detail/detail.component').then(m => m.DetailComponent)
  },
  {
    path: 'contacts/edit/:id',
    loadComponent: () =>
      import('./features/contacts/edit/edit.component').then(m => m.EditComponent)
  },

  // Rota padrão
  {
    path: '',
    redirectTo: 'deals/list',
    pathMatch: 'full'
  }
];
