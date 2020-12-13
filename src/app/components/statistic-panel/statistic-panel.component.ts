import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-panel',
  templateUrl: './statistic-panel.component.html',
  styleUrls: ['./statistic-panel.component.scss']
})
export class StatisticPanelComponent implements OnInit {

  @Input('icon') public icon: string;
  @Input('name') public name: string;
  @Input('value') public value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
