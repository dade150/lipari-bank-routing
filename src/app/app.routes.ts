import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { maintenanceGuard } from './core/guards/maintenance.guard';
import { unsavedChangesGuard } from './core/guards/unsaved-changes.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/account/account.routes').then(
        (m) => m.ACCOUNT_ROUTES
      ),
    canActivate: [authGuard, maintenanceGuard],
    data: { preload: true },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
    canActivate: [authGuard, roleGuard('admin')],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/user-profile/user-profile.component').then(
        (m) => m.UserProfileComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'maintenance',
    loadComponent: () =>
      import('./features/maintenance/maintenance.component').then(
        (m) => m.MaintenanceComponent
      ),
  },
  {
  path: 'polizze',
  loadComponent: () =>
    import('./features/polizze/polizze-wizard/polizze-wizard.component').then(
      (m) => m.PolizzeWizardComponent
    ),
  canActivate: [authGuard],
  canDeactivate: [unsavedChangesGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
