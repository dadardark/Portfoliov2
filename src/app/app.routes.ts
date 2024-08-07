import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SnakeComponent } from './snake/snake.component';
import { HomeComponent } from './home/home.component';
import { BanktellerComponent } from './bankteller/bankteller.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { DietappComponent } from './dietapp/dietapp.component';
import { SscComponent } from './ssc/ssc.component';
import { WebdevComponent } from './webdev/webdev.component';
import { FutureComponent } from './future/future.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: 'aboutPage', component: AboutComponent },
    { path: 'homePage', component: HomeComponent },
    { path: 'snakePage', component: SnakeComponent },
    { path: 'banktellerPage', component: BanktellerComponent},
    { path: 'tictactoePage', component:TictactoeComponent},
    { path: 'dietappPage', component:DietappComponent},
    { path: 'sscPage', component:SscComponent},
    { path: 'webdevPage', component:WebdevComponent},
    { path: 'futurePage', component:FutureComponent},
    { path: 'contactPage', component:ContactComponent},
    { path: '', redirectTo: '/homePage', pathMatch: 'full' },
    { path: '**', redirectTo: '/homePage' }
];