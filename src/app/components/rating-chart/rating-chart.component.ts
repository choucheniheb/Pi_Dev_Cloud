import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { RatingService } from '../../rating.service';

@Component({
  selector: 'app-rating-chart',
  templateUrl: './rating-chart.component.html',
  styleUrls: ['./rating-chart.component.css']
})
export class RatingChartComponent implements OnInit {

  public barChart: Chart | undefined;

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.ratingService.getServicesByRating().subscribe(data => {
      this.createChart(data);
    });
  }

  createChart(data: any): void {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    if (!ctx) return; // Exit if canvas element is not found
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
        datasets: [{
          label: 'Number of Services',
          data: [
            data['1.0'] || 0,
            data['2.0'] || 0,
            data['3.0'] || 0,
            data['4.0'] || 0,
            data['5.0'] || 0
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
