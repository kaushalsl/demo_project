import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-regular-expression',
  templateUrl: './regular-expression.component.html',
  styleUrls: ['./regular-expression.component.scss']
})
export class RegularExpressionComponent implements OnInit {
  string = 'this is demos100 text. ml 200 total price 100. 12.5 100ml (1*10) 10% 100/100';
  addSpaceAlphanumeric: any;
  episodes = [
    {title: 'Winter Is Coming', director: 'Tim Van Patten'},
    {title: 'The Kingsroad', director: 'Tim Van Patten'},
    {title: 'Lord Snow', director: 'Brian Kirk'},
    {title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk'},
    {title: 'The Wolf and the Lion', director: 'Brian Kirk'},
    {title: 'A Golden Crown', director: 'Daniel Minahan'},
    {title: 'You Win or You Die', director: 'Daniel Minahan'},
    {title: 'The Pointy End', director: 'Daniel Minahan'}
  ];

  tab = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }

  ngOnInit(): void {
    const separators = ['+', '-', '(', ')', '*', '/', ':', '?'];
    this.addSpaceAlphanumeric = this.string
      .replace(/[\d./]+|^[\D/]+|[^a-zA-Z ]/g, '$& ') // add space between alphanumeric string
      // .replace(/(\d+)([/*+-]+)(\d*)+/g, '$1 $2 $3') // add space find separators character find or
      .replace(/\s*([\/*+-]+)\s*/g, ' $1 '); // add space find separators character find or
    // .replace(/(\d)(\+-|[\/*+-])(?=\d)/g, '$1 $2 '); // add space find separators character find or
    // .replace(new RegExp('\\' + separators.join('|\\'), 'g'), ' $& '); // add space find above separators variable character find
    // .replace(/\(.*?\)/g, ''); // remove string inside parenthesis ex:(1*10)
    // const animal = this.addSpaceAlphanumeric.match(/\b\d+ (ml)?\b | \b(ml)? \d+\b/g); // get the number of after ML and before ML
    // const animal = this.addSpaceAlphanumeric.match(/\b[\d.]+ (ml)|(ml) [\d.]+\b/g); // get the number of after ML and before ML
    const animal = this.addSpaceAlphanumeric.match(/\w+ \d+|\d+ \w+/g); // get the number and string number before string and number after string
    console.log(animal);
    if (animal !== null) {
      console.log(
        animal
          .join(' ') // convert array to string
          .replace(/(\b\S.+\b)(?=.*\1)/g, '') // remove duplicate string
          .replace(/\s+/g, ' ') // remove double space in string
          .trim() // remove left and right space in string
          .match(/[\d.]+/g) // return only number and float number with array format
      );
    }

    let text = 'Give tablet s 100%!';
    let result = text.replace(/(tablet).*/, '$1'); // remove match word after string output give tablet
    console.log(result);

    this.loadStyle('client-a.css');
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }
}
