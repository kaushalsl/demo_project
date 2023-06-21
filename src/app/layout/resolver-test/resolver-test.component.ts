import {Component, OnInit} from '@angular/core';
import {UserService} from '@servicesuser.service';


@Component({
  selector: 'app-resolver-test',
  templateUrl: './resolver-test.component.html',
  styleUrls: ['./resolver-test.component.scss']
})
export class ResolverTestComponent implements OnInit {
  countries: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.countries = this.userService.getCountries();
  }

}
