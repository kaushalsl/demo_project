import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {UserService} from '@servicesuser.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  countryDetails: any;

  constructor(private route: ActivatedRoute, private countryService: UserService) {
    /*this.route.paramMap.subscribe(async data => {
      console.log(data);
      this.countryDetails = await this.countryService.getCountryById(data.get('country-id'));
    });*/

    this.route.data.subscribe((data: any) => {
      console.log(data);
      this.countryDetails = data.countryDetails;
    });
  }

  ngOnInit() {
  }

}
