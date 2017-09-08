import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
@NgModule({
	declarations: [LoginFormComponent,
    RegisterFormComponent],
	imports: [],
	exports: [LoginFormComponent,
    RegisterFormComponent]
})
export class ComponentsModule {}
