import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  
  pais!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    // METODO USANDO SWITCHMAP DE RXJS ( TRANSFORMA UN OBSERVABLE EN OTRO OBSERVABLE )
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe( pais => this.pais = pais );
        

    // METODO TRADICIONAL DE OBTENER EL ID DEL PAIS ( USANDO 2 SUBSCRIBES )
    // this.activatedRoute.params
    // .subscribe( params =>{
    //   console.log(params.id);

    //   this.paisService.getPaisPorCodigo(params.id)
    //   .subscribe( pais =>{
    //     console.log(pais);
    //   })

    // })

  }

}
