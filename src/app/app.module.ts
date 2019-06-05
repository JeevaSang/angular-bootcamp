import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
//step1
//configuration , map url to a component
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { InterceptorService } from './services/interceptor.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'products',
        loadChildren: './product/product.module#ProductModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    //other module dependencies
    imports: [BrowserModule, SharedModule,
        RouterModule.forRoot(routes), HttpClientModule,
        //ProductModule
    ],

    //components,directivies,pipes
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent,
        LoginComponent
        //Header Component
        //Footer Component
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ]

})

export class AppModule { }