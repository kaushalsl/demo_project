import {AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  combineLatest,
  debounceTime,
  delay,
  distinctUntilChanged,
  exhaustMap,
  filter,
  from,
  fromEvent,
  interval,
  map,
  mapTo,
  mergeMap,
  of,
  scan,
  startWith,
  Subject,
  Subscription
} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ChildComponent} from './child/child.component';
import {Store} from '@ngrx/store';
import {selectBooks} from './books.selector';
import {invokeBooksAPI} from './book.action';
import {Router} from '@angular/router';
import {AppService} from '@servicesapp.service';
// import {Store, select} from '@ngrx/store';
/*import * as UserActions from './user.actions';
import * as fromUser from './user.selectors';*/

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, AfterContentChecked, AfterViewInit {
  public subscription!: Subscription;
  @ViewChild('searchForm') searchForm!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;
  @ViewChild(ChildComponent) child!: ChildComponent; // access fun from child component import this child component
  /*child1:any = ChildComponent;*/
  public incrementId = 0;
  public childCmpValue: number = 0;
  public btnGetCall: Subject<any> = new Subject();
  public btn1: Subject<any> = new Subject();
  public bowlerOne: Subject<any> = new Subject();
  public bowlerTwo: Subject<any> = new Subject();
  public bowlerThree: Subject<any> = new Subject();
  name: any = 'Kaushal';
  userInfo = {
    profile: {},
    data: {}
  };
  nameArray: any = ['apples', 'oranges', 'mango', 'carrots', 'onions', 'brocoli'];
  title = '';
  booksList = this.store.select(selectBooks);

  constructor(
    private http: HttpClient,
    private store: Store,
    private appService: AppService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.title = this.nameArray[this.childCmpValue];
    this.store.dispatch(invokeBooksAPI());
    const dataStream = interval(1000);
    // using subscription method
    /*this.subscription = dataStream.pipe()
      .subscribe((res: any) => {
        if (res >= 5) {
          this.subscription.unsubscribe();
        }
        console.log(res);
      });*/

    // use take after 5 item emmit then show console(use code unCommit code)
    /*this.subscription = dataStream.pipe(
      take(5), // how to many item add pass number of function
      toArray()
    ).subscribe((res: any) => {
      console.log(res);
    });*/

    // use retryWhen when API not call successfully (use code unCommit code)
    /*this.http.get('http://dummy.restapiexample.com/api/v1/employees')
      .pipe(
        retryWhen(err => err.pipe(
          delay(3000), // define second after retry attempt
          scan((retryCount: any) => {
            if (retryCount >= 3) {
              throw  err;
            } else {
              retryCount = retryCount + 1;
              console.log('Retrying attemps ' + retryCount);
              return retryCount;
            }
          }, 0)
        ))
      ).subscribe((res: any) => {
      console.log(res.data);
    });*/

    // user mergeMap
    const source = from(['Video 1', 'Video 2', 'Video 3']);
    source.pipe(
      // use mep + merge all return observable
      /* map(res => this.getData(res)),
       mergeAll()*/

      // use mergeMap all return observable
      mergeMap(res => this.getData(res))
    ).subscribe((res: any) => {
      // console.log(res);
    });

    /* this.store.dispatch(new UserActions.LoadUsers()); // action dispatch
     this.store.pipe(select(fromUser.getUser))
       .subscribe(res => {
         console.log(res);
       });*/

    // below function use direct call http method in exhaustMap (call 1 time when use click btn multiple time)
    this.btnGetCall.pipe(
      exhaustMap(() => this.getAjaxMethod())
    ).subscribe(res => {
      console.log(res);
    });
  }

  getData(data: any) {
    return of(data);
  }

  addData() {
    this.router.navigate(['/rxjs/add']).then();
  }

  getAjaxMethod() {
    // return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees');
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').pipe(delay(1000));
  }

  ngAfterViewInit() {
    const formData = fromEvent(this.searchForm.nativeElement, 'keyup')
      .pipe(
        filter((e: any) => !!e.target.value), // use filter not pass data when text box value is blank
        debounceTime(1000), // setTime after send request to type value in text box
        distinctUntilChanged(), // use this text previous and current text box value same not pass the data
        map((e: any) => e.target.value)
      );
    formData.subscribe((res: any) => {
      console.log(res);
    });

    // use exhaustMap example
    const btnClick = fromEvent(this.btn.nativeElement, 'click');
    btnClick
      .pipe(
        exhaustMap(data => this.sendData())
      )
      .subscribe((res: any) => {
        console.log(res);
      });

    // user click on save button if previous form value and current value is same then do not pass the value
    // use below save function is use this method
    this.btn1.pipe(
      distinctUntilChanged(
        (pre, curr) => JSON.stringify(pre) === JSON.stringify(curr)
      )
    ).subscribe({
      next: (res) => console.log(res),
      error: () => {
        console.log('error');
      }
    });

    //use combine latest
    addEventListener('keydown', (ev: any) => {
      if (ev.keyCode === 65) this.bowlerOne.next(undefined);
      if (ev.keyCode === 66) this.bowlerTwo.next(undefined);
      if (ev.keyCode === 67) this.bowlerThree.next(undefined);
    });

    combineLatest(
      this.getScore(this.bowlerOne),
      this.getScore(this.bowlerTwo),
      this.getScore(this.bowlerThree)
    ).subscribe(
      ([one, two, three]) => {
        /* console.log('bowler one score is ' + one);
         console.log('bowler two score is ' + two);
         console.log('bowler three score is ' + three);*/
      }
    );
  }

  ngAfterContentChecked() {
    // console.log('Call Success after content checked');
  }

  getScore(sub: Subject<number>) {
    return sub.pipe(
      mapTo(1),
      scan((acc, curr) => acc + curr, 0),
      startWith(0)
    );
  }

  sendData() {
    this.incrementId++;
    const obj = {
      title: 'foo',
      body: 'bar',
      userId: this.incrementId,
    };

    return this.http.post('https://jsonplaceholder.typicode.com/posts', obj);
  }

  // this below 2 function access the data from child component

  // use this function getting data from child component
  countChangedHandler(count: number) {
    this.childCmpValue = count;
    console.log(count);
  }

  /*Start*/
  updateVal() {
    this.title = 'Hello';
  }

  increment() {
    this.child.increment();
    this.title = this.nameArray[this.childCmpValue];
  }

  decrement() {
    this.child.decrement();
  }

  /*End*/

  saveData() {
    // this below function is user data in same as previous data then do not pass the override value
    this.userInfo.profile = {name: this.name};
    this.userInfo.data = {age: 26};
    this.btn1.next(JSON.parse(JSON.stringify(this.userInfo)));
  }

  ngModelChangeFun(val: any) {
    // console.log(val);
  }
}
