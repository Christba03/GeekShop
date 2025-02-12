import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Registrar usuario en localStorage
  register(user: { name: string; email: string; password: string; }) {
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('userPassword', user.password);
    localStorage.setItem('Username', user.name);  // Asegúrate de usar 'Username'
  }

  // Iniciar sesión y verificar las credenciales
  login(email: string, password: string): string | null {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Verificar si las credenciales coinciden
    if (email === storedEmail && password === storedPassword) {
      const token = this.generateToken(storedPassword);  // Generar un token basado en el nombre
      this.storeToken(token);  // Almacenar el token en localStorage
      return token;  // Devolver el token al componente para usarlo si es necesario
    }
    return null;  // Si las credenciales no coinciden, retornamos null
  }

  // Generar un token (puedes hacerlo más complejo si es necesario)
  generateToken(name: string): string {
    return btoa(name + ':' + new Date().getTime());  // Token básico con nombre y timestamp
  }

  // Almacenar el token en localStorage
  storeToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  // Cerrar sesión eliminando el token
  logout() {
    localStorage.removeItem('userToken');
  }
}
