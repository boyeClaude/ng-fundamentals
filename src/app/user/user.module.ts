import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes), FormsModule],
  exports: [ProfileComponent, LoginComponent],
  declarations: [ProfileComponent, LoginComponent],
  providers: [],
})
export class ProfileModule {}
