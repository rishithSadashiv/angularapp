import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { UserService } from "./services/user.service";
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './components/post-form/post-form.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
