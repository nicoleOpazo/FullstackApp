import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Usuario } from "./usuario";

@Injectable()
export class UsuarioService {
    private urlEndPoint: string = 'http://localhost:8080/usuarios/todos';

    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<Usuario[]> {
        return this.http.get(this.urlEndPoint).pipe(map(response => response as Usuario[]));
    }
}