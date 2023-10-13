import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  title: string = 'Usuarios Registrados'
  
  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Usuario de Ejemplo',
      edad: 26,
      activo: true,
      fechaCreacion: new Date('2023-10-12T15:30:00')
    },
    {
      id: 2,
      nombre: 'Usuario 2 de Ejemplo',
      edad: 27,
      activo: false,
      fechaCreacion: new Date('2023-10-12T15:30:00')
    }
  ];

  /*constructor(){}

  ngOnInit() {
      
  }*/

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

}
