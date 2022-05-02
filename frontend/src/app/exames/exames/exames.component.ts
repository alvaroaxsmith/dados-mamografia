import { FaixaetariaService } from './../service/faixaetaria.service';
import { IncidenciaService } from '../service/incidencia.service';
import { RegiaoService } from '../service/regiao.service';
import { Component, OnInit } from '@angular/core';
import { Regiao } from '../model/regiao';
import { Incidencia } from '../model/incidencia';
import { Faixaetaria } from '../model/faixaetaria';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  incidencia_exame: Incidencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];

  constructor(
    private incidenciaService:IncidenciaService,
    private regioesService: RegiaoService,
    private faixaEtariaService: FaixaetariaService
    ) { }

  ngOnInit(): void {
    this.regioesService.listRegioes() .subscribe(regioes => {this.regioes = regioes});
    this.incidenciaService.listaIncidencias() .subscribe(incidencia_exame => {this.incidencia_exame = incidencia_exame});
    this.faixaEtariaService.listFaixaEtaria() .subscribe(faixaetarias => {this.faixaetarias = faixaetarias});
  }

}
