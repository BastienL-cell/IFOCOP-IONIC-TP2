import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then(m => m.AccueilPageModule)
  },
  {
    path: 'espace-client',
    loadChildren: () => import('./pages/espace-client/espace-client.module').then(m => m.EspaceClientPageModule)
  },
  {
    path: 'ajout-plats',
    loadChildren: () => import('./pages/ajout-plats/ajout-plats.module').then( m => m.AjoutPlatsPageModule)
  },
  {
    path: "**",
    redirectTo: "/accueil",
    pathMatch: 'full'
  }


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
