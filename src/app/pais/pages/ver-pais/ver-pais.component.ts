import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    // METODO USANDO SWITCHMAP DE RXJS ( TRANSFORMA UN OBSERVABLE EN OTRO OBSERVABLE )
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorCodigo(id))
      )
      .subscribe( resp => {
        console.log(resp);
      })

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
