import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/accueil',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'espace-client',
    loadChildren: () => import('./espace-client/espace-client.module').then( m => m.EspaceClientPageModule)
  },
  {
    path: 'ajout-plats',
    loadChildren: () => import('./ajout-plats/ajout-plats.module').then( m => m.AjoutPlatsPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
