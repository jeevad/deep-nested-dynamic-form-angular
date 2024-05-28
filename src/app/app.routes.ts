import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: 'form',
        loadComponent: () =>
            import('./form/form.component').then((x) => x.FormComponent),
    },
    {
        path: 'form1',
        component: FormComponent,
    },
    
]
