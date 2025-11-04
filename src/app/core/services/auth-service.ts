import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { map, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  currentUser = signal<User | null>(null);
  isLoggedIn = signal(false);
  
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadUserFromStorage();
    }
  }

  login(rut: string, password: string): Observable<AuthResponse> {
    return this.http.get<User[]>('/assets/data/users.json').pipe(
      map(users => {
        const user = users.find(u => u.rut === rut && u.password === password);
        
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser.set(user);
          this.isLoggedIn.set(true);
          
          return {
            success: true,
            message: 'Login exitoso',
            user
          };
        } else {
          return {
            success: false,
            message: 'RUT o contraseña incorrectos'
          };
        }
      })
    );
  }

  register(rut: string, nombre: string, password: string, email: string): Observable<AuthResponse> {
    return this.http.get<User[]>('/assets/data/users.json').pipe(
      map(users => {
        // Verificar si el RUT ya existe
        const userExists = users.find(u => u.rut === rut);
        
        if (userExists) {
          return {
            success: false,
            message: 'El RUT ya está registrado'
          };
        }

        // Crear nuevo usuario
        const newUser: User = {
          id: (users.length + 1).toString(),
          rut,
          nombre,
          password,
          email,
          fechaRegistro: new Date().toISOString().split('T')[0],
          activo: true
        };

        // Guardar en localStorage (en producción, esto lo haría el backend)
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        this.currentUser.set(newUser);
        this.isLoggedIn.set(true);

        return {
          success: true,
          message: 'Registro exitoso',
          user: newUser
        };
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
  }

  private loadUserFromStorage(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      try {
        const userData = JSON.parse(user);
        this.currentUser.set(userData);
        this.isLoggedIn.set(true);
      } catch (error) {
        console.error('Error al cargar usuario:', error);
        localStorage.removeItem('currentUser');
      }
    }
  } 
}
