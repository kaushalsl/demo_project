import {Component} from '@angular/core';

@Component({
  selector: 'app-image-optimization',
  templateUrl: './image-optimization.component.html',
  styleUrls: ['./image-optimization.component.scss'],
})
export class ImageOptimizationComponent {

  images: any = [
    {name: '/hermes2.jpeg', width: 3584, height: 2016},
    {name: '/hermes3.jpeg', width: 2776, height: 2082},
    {name: '/hermes4.jpeg', width: 2776, height: 2082},
    {name: '/hermes5.jpeg', width: 1476, height: 1968},
    {name: '/hermes_hero.jpeg', width: 2624, height: 1968},
    {name: '/hermes7.jpeg', width: 3584, height: 2016},
  ];

  actionClick(e: any) {
    console.log(e);
  }
}
