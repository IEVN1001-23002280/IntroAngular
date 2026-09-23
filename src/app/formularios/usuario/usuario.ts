import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html',
})
export class Usuario {  
  usuario: string = '';
  contra: string = '';
  mensaje: string = '';

  usuarioBien: string = 'admin';
  contraBien: string = '12345';

  validar(): void {
    if (this.usuario === this.usuarioBien) {
      if (this.contra === this.contraBien) {
        this.mensaje = 'Bienvenido al sistema, ' + this.usuario;
      } else {
        this.mensaje = 'La contraseña no es valida.';
      }
    } else {
      this.mensaje = 'El nombre de usuario no es valido.';
    }
  }
}