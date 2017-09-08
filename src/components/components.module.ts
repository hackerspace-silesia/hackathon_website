import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { IonicModule } from "ionic-angular";

@NgModule({
	declarations: [LoginFormComponent,
    RegisterFormComponent],
	imports: [IonicModule],
	exports: [LoginFormComponent,
    RegisterFormComponent]
})
export class ComponentsModule {}
