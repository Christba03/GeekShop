import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../authentication/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-login-register',
  standalone: false,
  templateUrl: './form-login-register.component.html',
  styleUrl: './form-login-register.component.scss'
})
export class FormLoginRegisterComponent {
  isLoading: boolean = false; // Variable para el loader

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

 constructor(private fb: FormBuilder, 
  private authService: AuthService,
  private router: Router,
  private snackBar: MatSnackBar // Inyecta MatSnackBar
  ) {}

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
        this.isLoading = true; // Muestra el loader
        const { email, password } = this.loginForm.value;
  
        const token = this.authService.login(email, password);
        if (token) {
          
          // Simula un pequeño retraso antes de la redirección
          setTimeout(() => {
            this.router.navigate(['/products']);
            this.isLoading = false; // Oculta el loader
          }, 2000);
        } else {
          this.isLoading = false; // Oculta el loader en caso de error
          this.snackBar.open('Credenciales incorrectas', 'Cerrar', { duration: 3000, panelClass: ['error-snackbar'] });
        }
      } else {
        this.snackBar.open('Por favor, llena todos los campos correctamente', 'Cerrar', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    }
    
    register(): void {
      if (this.registerForm.valid) {
        const { fullName, email, password } = this.registerForm.value;
        const user = { name: fullName, email, password };
    
        // Llamada al servicio de registro
        this.authService.register(user);
        this.accion = 'Iniciar sesión'; // Cambia el valor de acción para cambiar a modo de login
        console.log('Registro exitoso');
        
        this.snackBar.open('Registro exitoso', 'Cerrar', { duration: 3000 }); // Mostrar toast de éxito
        this.registerForm.reset(); // Esto borra los datos ingresados en los inputs
        this.router.navigate(['/login']);  // Redirige a la página de login después de registrarse
      } else {
        console.log('Formulario de registro no válido');
        this.snackBar.open('Por favor, llena todos los campos correctamente', 'Cerrar', { duration: 3000, panelClass: ['error-snackbar'] });
      }
    }
    
}
