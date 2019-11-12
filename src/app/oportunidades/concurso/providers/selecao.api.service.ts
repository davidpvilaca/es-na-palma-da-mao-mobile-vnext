import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment, EnvVariables } from '@espm/core';
import { Observable } from 'rxjs/Observable';

import { Classificacao, Concurso } from '../model';
import { share } from 'rxjs/operators';
import { ConcursoFavorito } from '../model/concurso-favorito.mode';

/*
*
*/
@Injectable()
export class SelecaoApiService {
  /**
   *
   */
  constructor(private http: HttpClient, @Inject(EnvVariables) private env: Environment) {

  }

  /**
   *
   */
  getConcurso(id): Observable<Concurso> {
    return this.http.get<Concurso>(`${this.env.api.empregabilidade}/${id}`).pipe(share());
  }

  /**
   *
   */
  getClassificacao(idConcurso, idCargo): Observable<Classificacao[]> {
    return this.http
      .get<Classificacao[]>(`${this.env.api.empregabilidade}/${idConcurso}/cargo/${idCargo}/classificacao`)
      .pipe(share());
  }

  /**
   *
   */
  getAllConcursos = (): Observable<Concurso[]> => {
    return this.http.get<Concurso[]>(this.env.api.empregabilidade).pipe(share());
  };
  /**
   *
   */
  getFavorites = (): Observable<ConcursoFavorito> => {
    return this.http.get<ConcursoFavorito>(`${this.env.api.espm}/publicTender/data/favorite`).pipe(share());
  };
  /**
   * 
   */

   /* getPorcentagem = (cpf: string, orgaos: [string]): Observable<Concurso[]> => {
    let string = `${this.env.api.empregabilidade}/cpf/orgao?cpf=${cpf}`;
         // todo: concatenar os órgãos na string
         for(let i = 0; i < orgaos.length; i ++){
           
         }
    
    return this.http.get<Concurso[]>(string).pipe(share());
    // /cpf/orgao?cpf=<cpf_que _voce_vai_mandar>&orgao=<primeiro_orgao>&orgao=<segundo_orgao>
  }; 

  /**
   * 
   */
  syncFavorites = (favoritos): Observable<ConcursoFavorito> => {
    return this.http.post<ConcursoFavorito>(`${this.env.api.espm}/publicTender/data/favorite`, favoritos).pipe(share());
  };
}
