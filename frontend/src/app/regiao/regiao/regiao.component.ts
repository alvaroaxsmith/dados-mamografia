import { RegiaoService } from '../service/regiao.service';
import { Component, OnInit } from '@angular/core';
import { Regiao } from '../model/regiao';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.css']
})
export class RegiaoComponent implements OnInit {

  regioes: Regiao[] = [];

  constructor(private regiaoService:RegiaoService) { }

  ngOnInit(): void {
    this.regioes = this.regiaoService.listRegioes();
  }

}
