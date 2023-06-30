import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import {from, take, toArray} from 'rxjs';
import {validationMessage} from '@shared/validation/validation-message';

declare var $: any;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [ConfirmationService]
})
export class TodoListComponent implements OnInit {
  public todoForm!: FormGroup;
  public todoList: any = [];
  public printTodolist: any = [];
  public btnEditIndex = 0;
  public loadCount: number = 0;
  public searchText = this.initSearchFilter();
  public categoryList = [
    {id: 1, value: 'Low', class: 'text-info'},
    {id: 2, value: 'Medium', class: 'text-warning'},
    {id: 3, value: 'High', class: 'text-danger'}
  ];
  public statusList = [
    {id: 1, value: 'Pending', class: 'text-danger'},
    {id: 2, value: 'Complete', class: 'text-success'}
  ];
  validationMessage = validationMessage;

  constructor(
    private confirmationService: ConfirmationService
  ) {
    this.todoFormControl();
    if (JSON.parse(<any>localStorage.getItem('todo-list')) !== null) {
      this.todoList = JSON.parse(<any>localStorage.getItem('todo-list'));
      this.loadCount = 5;
      const printArr = from(this.todoList).pipe(take(this.loadCount), toArray());
      printArr.subscribe((res) => {
        this.printTodolist = res;
      });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.todoForm.controls;
  }

  ngOnInit() {
  }

  todoFormControl() {
    this.todoForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      status: new FormControl(1)
    });
  }

  statusFilter(id: any) {
    return this.statusList.filter(x => x.id === id)[0];
  }

  categoryFilter(id: any) {
    return this.categoryList.filter(x => x.id === +id)[0];
  }

  initSearchFilter() {
    return {
      name: '',
      category: 0
    };
  }

  editTodo(data: any, indexId: any) {
    $('#todoModal').modal('show');
    this.todoForm.patchValue(data);
    this.btnEditIndex = indexId;
  }

  addTodo(forValue: any) {
    const data = {...forValue};
    if (data.id === 0) {
      data.id = this.todoList.length + 1;
      this.todoList.push(data);
    } else {
      this.todoList.splice(this.btnEditIndex, 1, data);
      this.btnEditIndex = 0;
    }

    if (this.todoList.length <= 5) {
      this.printTodolist = [...this.todoList];
    }
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
    $('#todoModal').modal('hide');
  }

  deleteTodo(index: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.todoList.splice(index, 1);
        this.printTodolist.splice(index, 1);
        localStorage.setItem('todo-list', JSON.stringify(this.todoList));
        this.loadMoreData1();
      }
    });
  }

  completeTodo(data: any, index: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to complete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        data.status = 2;
        this.todoList.splice(index, 1, data);
        this.printTodolist.splice(index, 1, data);
        localStorage.setItem('todo-list', JSON.stringify(this.todoList));
        this.loadMoreData1();
      }
    });
  }

  filterSearch(event: any, attr: any) {
    this.loadCount = 5;
    if (attr === 'name') {
      this.searchText = {
        name: event.target.value,
        category: this.searchText.category
      };
    } else {
      this.searchText = {
        name: this.searchText.name,
        category: event.target.value
      };
    }

    this.loadMoreData1();
  }

  loadMoreData() {
    this.searchText = {
      name: this.searchText.name,
      category: this.searchText.category
    };
    let iData = this.printTodolist.length;
    this.printTodolist.push(...this.todoList.slice(iData, iData + this.loadCount));
  }

  loadMoreData1() {
    this.printTodolist = [];
    let iData = this.printTodolist.length;
    this.printTodolist.push(...this.todoList.slice(iData, this.loadCount));
  }
}
