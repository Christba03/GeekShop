import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user: { name: string; email: string; password: string; }) {
    // Guardamos los datos en localStorage simulando un registro    
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('userPassword', user.password);
    localStorage.setItem('Username', user.name);
  }

  login(email: string, password: string, name: string): boolean {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');   
    console.log(localStorage.getItem('userName'));   
    console.log(localStorage.getItem('userPassword'));   
   
    if (email === storedEmail && password === storedPassword ) {
      const token = this.generateToken(name);  // Generar el token
      this.storeToken(token);  // Almacenar el token en localStorage        
  
      return true; // Inicio de sesión exitoso
    }
    return false; // Credenciales incorrectas
  }

  generateToken(name: string): string {
    return btoa(name + ':' + new Date().getTime()); // Genera un token básico con el nombre y el timestamp
  }

  storeToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  logout() {
    localStorage.removeItem('userToken');
  }

}
