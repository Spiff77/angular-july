import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MainParentComponent } from './main-parent/main-parent.component';
import { SecondaryParentComponent } from './secondary-parent/secondary-parent.component';
import { ChildComponent } from './child/child.component';
import { CountTotalComponent } from './count-total/count-total.component';
import { CountElemComponent } from './count-elem/count-elem.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'main', component: MainParentComponent},
  {path: 'secondary', component: SecondaryParentComponent},
  {path: 'plusone', component: CountTotalComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainParentComponent,
    SecondaryParentComponent,
    ChildComponent,
    CountTotalComponent,
    CountElemComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
