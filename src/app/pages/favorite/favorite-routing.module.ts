import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritePage } from './favorite.page';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        component: FavoritePage
      },
      {
        path: 'articleDetail',
        loadChildren: () => import('../article-detail/article-detail.module').then(m => m.ArticleDetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritePageRoutingModule { }
