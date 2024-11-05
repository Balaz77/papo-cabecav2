import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
    {
        path: '',
        component:TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/conversas',
                pathMatch: 'full',
            },
            {
                path: 'conversas',
                loadComponent: () => import('./conversas/conversas.page').then( m => m.ConversasPage)
              },
              {
                path: 'configuracao',
                loadComponent: () => import('./configuracao/configuracao.page').then( m => m.ConfiguracaoPage)
              },
            
            
        ],
    },
    
    {
        path: '',
        redirectTo: '/tabs/conversas',
        pathMatch: 'full',
    },
  
 
];