import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  public stringText = ['ciplox 250mg. tab\'s. 10\'s 20.5 (1*10)', 'COFSILS AX 50 / 1.5 / 15 MG 100 ML SYRUP', 'ciplox 250mg. strip of 50', 'ciplox 250mg. susp. 10s', 'renodapt 180 mg capsule', 'XYLISTIN 4.5 MIU INJECTION 10 ML'];
  public inUnits = 0;
  public units = ['1', '2', '3', '4', '5', '6', '7', '10', '12', '14', '15', '18', '20', '21', '25', '28', '30', '40', '45', '48', '50', '60', '75', '90', '100', '120', '200', '250', '270', '300', '500', '1000'];
  public productName: any = 'TESTOSPRAY 12.5 MG SPRAY 120 MDI';
  public seqNameString: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.convertString();
    const testString = 'TESTOSPRAY 123 12.50 MG SP12RAY 120 MDI';
    console.log(testString);
    let convertStringTest = testString
      .replace(/[+-]?\d+(\.\d+)?/g, ' $& ') // this is get all number and flot value in string and add space before and after
      .replace(/\s+/g, ' ').trim() // remove some extra space in string
      .split(' ') // split string with space
      .sort((a: string, b: string) => a.localeCompare(b, undefined, {numeric: true})) // sort number first and after string
      .join(' '); // join array after complete sort method
    console.log(convertStringTest);
  }

  convertString() {
    this.inUnits = 0;
    /*const arrayString = this.stringText[1].toLowerCase();
    console.log(arrayString);*/
    let preType = '';
    const separators = ['+', '-', '(', ')', '*', '/', ':', '?', '%']; // this array special character find string match and add space between string

    let newNameString: any = this.productName.toLowerCase()
      .replace(/ *\([^)]*\) */g, ' ') //use to remove inside () parenthesis string
      .replace(new RegExp('\\' + separators.join('|\\'), 'gi'), ' $& '); //find string match and add space between string

    // match for units ex: 10s
    for (let unit of this.units) {
      const unitText = `${unit}'s`;
      if (newNameString.match(unitText)) {
        newNameString = newNameString.replace(new RegExp(`\\b(?:${unitText})\\b`, 'gi'), '');
        this.inUnits = +unit;
      }
    }

    // powder for injection match
    if (newNameString.match(/powder for injection/gi)) {
      newNameString = newNameString.replace(/\b(powder for injection)\b/gi, '');
      preType = 'powder for injection';
    }

    // tablet
    if (newNameString.match(/tab/gi)) {
      newNameString = newNameString.replace(/\b(?:tab|tabs|tablet|tablets)\b [0-9]+/gi, '').replace(/\b(?:tab|tabs|tablet|tablets)\b/gi, '');
      preType = 'tablet';
    }

    // capsule
    if (newNameString.match(/rota/gi)) {
      preType = '';
    } else {
      if (newNameString.match(/cap/gi)) {
        newNameString = newNameString.replace(/\b(?:cap|caps|capsule|capsules)\b [0-9]+/gi, '').replace(/\b(?:cap|caps|capsule|capsules)\b/gi, '');
        preType = 'capsule';
      }
    }

    // injection
    if (newNameString.match(/inj/gi)) {
      newNameString = newNameString.replace(/\b(?:inj|inj.|injection)\b [0-9]+/gi, '').replace(/\b(?:inj|inj.|injection)\b/gi, '');
      preType = 'injection';
    }

    //syrup or syp
    if (newNameString.match(/syp|syru/gi)) {
      newNameString = newNameString.replace(/\b(?:syp|syrup)\b/gi, '');
      preType = 'syrup';
    }

    // suspension
    if (newNameString.match(/susp|sysp/gi)) {
      newNameString = newNameString.replace(/\b(?:sysp|susp|sus.|suspension)\b/gi, '');
      preType = 'suspension';
    }

    // ointment
    if (newNameString.match(/oint/gi)) {
      newNameString = newNameString.replace(/\b(?:oint|ointment)\b/gi, '');
      preType = 'ointment';
    }

    // infusion
    if (newNameString.match(/inf|gel/gi)) {
      newNameString = newNameString.replace(/\b(?:inf|infusion|gel)\b/gi, '');
      preType = 'infusion';
    }

    // drop
    if (newNameString.match(/drop/gi)) {
      newNameString = newNameString.replace(/\b(?:drop|drops)\b/gi, '');
      preType = 'drops';
    }

    // cream
    if (newNameString.match(/cream/gi)) {
      newNameString = newNameString.replace(/\b(cream)\b/gi, '');
      preType = 'cream';
    }

    // powder
    if (newNameString.match(/powder/gi)) {
      newNameString = newNameString.replace(/\b(powder)\b/gi, '');
      preType = 'powder';
    }

    // solution
    if (newNameString.match(/solu/gi)) {
      newNameString = newNameString.replace(/\b(?:solu|solution)\b/gi, '');
      preType = 'solution';
    }

    // spray
    if (newNameString.match(/spray/g)) {
      newNameString = newNameString.replace(/\b(spray)\b/gi, '').replaceAll('spray', '');
      preType = 'spray';
    }

    // lotion
    if (newNameString.match(/lotion/gi)) {
      newNameString = newNameString.replace(/\b(lotion)\b/gi, '');
      preType = 'lotion';
    }

    // liquid
    if (newNameString.match(/liquid/gi)) {
      newNameString = newNameString.replace(/\b(liquid)\b/gi, '');
      preType = 'liquid';
    }

    // shampoo
    if (newNameString.match(/shampoo/gi)) {
      newNameString = newNameString.replace(/\b(shampoo)\b/gi, '');
      preType = 'shampoo';
    }

    // oil
    if (newNameString.match(/oil/gi)) {
      newNameString = newNameString.replace(/\b(oil)\b/gi, '');
      preType = 'oil';
    }

    // soap
    if (newNameString.match(/soap/gi)) {
      newNameString = newNameString.replace(/\b(soap)\b/gi, '');
      preType = 'soap';
    }

    // inhaler
    if (newNameString.match(/inha/gi)) {
      newNameString = newNameString.replace(/\b(inhaler)\b/gi, '');
      preType = 'inhaler';
    }

    // match strip of total word match ex. strip of 1 to 50
    if (newNameString.match(/strip/gi)) {
      const details = this.replaceOfString(newNameString, 50, 'strip');
      newNameString = details.name;
      this.inUnits = details.units;
      newNameString = newNameString.replace(/\b(?:strip|strips|of|strip of)\b [0-9]/gi, '');
    }

    // match bottle of total word match ex. bottle of 1 to 300
    if (newNameString.match(/bottle/gi)) {
      const details = this.replaceOfString(newNameString, 300, 'bottle');
      newNameString = details.name;
      this.inUnits = details.units;
    }

    // match packet of total word match ex. packet of 1 to 300
    /* if (newNameString.match(/packet/gi)) {
       const details = this.replaceOfString(newNameString, 300, 'packet');
       newNameString = details.name;
       this.inUnits = details.units;
       preType = details.type;
     }*/

    console.log(newNameString);
    newNameString = newNameString.replace(/[&\/\\#,+$~%'":?<>{}]]/g, '') // remove special character add after ,
      .replace(/[a-z](?=\d)|\d(?=[a-z])/gi, '$& ') // add space between alphanumeric string
      .replace(/^mg/gi, ' mg') // replace mg to mg
      .replace(/ml/gi, ' ml') // replace ml
      .replace(/gm/gi, ' gm'); // replace gm

    let splitNumberString: any;
    if (newNameString.match(/\d+/g)) {
      splitNumberString = newNameString.match(/[\d.]+/g);
      console.log(splitNumberString);
      newNameString = splitNumberString.join(' ') + ' ' + newNameString.replace(`/${splitNumberString.join('|')}/gi`, ' ').replace(/[0-9]/g, '').replace(/\s+/g, ' ').trim()/*.split(' ').sort((a: any, b: any) => {
      return a.localeCompare(b);
    }).join(' ')*/;
    } else {
      newNameString = newNameString.replace(/[0-9]/g, '').replace(/\s+/g, ' ').trim();
    }

    this.seqNameString = (newNameString
      .replace(/(\b \w+\b)(?=.*\1)/ig, '') // string inside float numeric word does not remove dot ex: 12.5
      .split(' ').sort((a: any, b: any) => {
        return a.localeCompare(b, undefined, {
          numeric: false,
          sensitivity: 'base'
        }); // soring string
      }).join(' ').trim() + ' ' + preType).replace(/\.[^0-9-]/gi, ' ').toUpperCase().replace('-', '');


    /*   console.log(splitNumberString);
       console.log('split number string: ' + splitNumberString.join('|'));*/

    console.log('newName string: ' + this.seqNameString);
    console.log('preType: ' + preType);
    console.log('Units: ' + this.inUnits);
  }

  replaceOfString(productName: string, value: number, matchValue: string) {
    let units = 0;
    let type = '';
    for (let i = 1; i <= value; i++) {
      const stripText = `${matchValue} of ${i}`;
      if (productName.match(stripText)) {
        productName = productName.replace(new RegExp(`\\b(?:${stripText}|${stripText} g )\\b`, 'gi'), '');
        units = i;
        type = stripText;
      }
    }

    return {
      name: productName,
      units: units,
      type: type
    };
  }

  openModal() {
    const hash = window.location.hash;
    $(hash).modal('toggle');
  }
}
