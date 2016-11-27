/**
 * Charts
 */

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const echarts = require('echarts');


@Component({
  selector: 'ph-charts-demo',
  templateUrl: './charts-demo.component.html',
  styleUrls: ['./charts-demo.component.scss']
})
export class ChartsDemoComponent implements OnInit {
  @ViewChild('chartHolder') chartHolder: ElementRef;

  chartData: number[] = [5, 20, 36, 10, 10, 20];
  myChart: any;

  constructor() { }

  ngOnInit() {
    this.myChart = echarts.init(this.chartHolder.nativeElement);

    this.myChart.setOption({
      title: { text: 'Sales' },
      tooltip: {},
      xAxis: {
        data: ['Shanghai', 'Beijing', 'Nanjing', 'Suzhou', 'Hangzhou', 'Qingdao']
      },
      yAxis: {},
      series: [{
        name: 'number',
        type: 'bar',
        data:  this.chartData
      }],
      itemStyle: {
        normal: {
          color: 'gray'
        },
        emphasis: {
          color: 'silver'
        }
      }
    });
  }

  updateData() {
    this.myChart.setOption({
      series: [{
        data: this.chartData
      }]
    });
  }
}
