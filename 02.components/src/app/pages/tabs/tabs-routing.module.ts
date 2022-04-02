import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: '',
        redirectTo : '/tabs/account',
        pathMatch: 'full'
      },
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then(m=> m.AvatarPageModule)
      },
      {
        path: 'contact',
        loadChildren: ()=> import('../list/list-routing.module').then( m => m.ListPageRoutingModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../infinite/infinite-routing.module').then( m => m.InfinitePageRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
