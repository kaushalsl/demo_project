import {Component, OnInit} from '@angular/core';
import {Books} from '../books';
import {Store} from '@ngrx/store';
import {invokeSaveBooksAPI} from '../book.action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  bookForm: Books = {
    userId: 102,
    id: 102,
    title: '',
    body: ''
  };

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveData() {
    this.store.dispatch(invokeSaveBooksAPI({payload: {...this.bookForm}}));
    alert('add data');
    // this.router.navigate(['/rxjs']).then();
  }
}
