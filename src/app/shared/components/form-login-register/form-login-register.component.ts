import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-form-login-register',
  standalone: false,
  templateUrl: './form-login-register.component.html',
  styleUrl: './form-login-register.component.scss'
})
export class FormLoginRegisterComponent {
 // FormGroup para el login
 loginForm!: FormGroup;
  
 // FormGroup para el registro
 registerForm!: FormGroup;

 // Variable para controlar la acción (Login o Registro)
 accion: string = 'Iniciar sesión'; // Inicia en 'Iniciar sesión'

 // Función para alternar entre Login y Registro
 toggleAction() {
  this.accion = this.accion === 'Iniciar sesión' ? 'Registrarse' : 'Iniciar sesión';
 
  console.log(this.accion);
}

 constructor(private fb: FormBuilder, private authService: AuthService) {}

 ngOnInit(): void {
   // Definir los controles y validaciones para el formulario de Login
   this.loginForm = this.fb.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(6)]],
   });



   // Definir los controles y validaciones para el formulario de Registro
   this.registerForm = this.fb.group({
     fullName: ['', [Validators.required, Validators.minLength(3)]],
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(6)]],
   });
 }

    // Lógica para manejar el envío del formulario de Login
    login(): void {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
  
        // Llamada al servicio de autenticación
        const token = this.authService.login(email, password);
        if (token) {
          console.log('Login exitoso, token:', token);
          // Aquí puedes redirigir a la página de inicio o hacer cualquier otra acción
        } else {
          console.log('Credenciales incorrectas');
          // Mostrar mensaje de error al usuario
        }
      } else {
        console.log('Formulario de login no válido');
      }
    }
  
    // Lógica para manejar el envío del formulario de Registro
    register(): void {
      if (this.registerForm.valid) {
        const { fullName, email, password } = this.registerForm.value;
        const user = { name: fullName, email, password };
  
        // Llamada al servicio de registro
        this.authService.register(user);
        this.accion = 'Iniciar sesión'; // Cambia el valor de accion
        console.log('Registro exitoso');
        // Aquí puedes redirigir al login o a una página de bienvenida
      } else {
        console.log('Formulario de registro no válido');
      }
    }

}
