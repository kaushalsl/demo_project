import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {validation} from '@shared/validation/validation-message';
import {InputComponent} from '@shared/components/input/input.component';
import {AppService} from '@servicesapp.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {
  form: FormGroup = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  // @ts-ignore
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'row row-cols-1 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 g-2',
    fieldGroup: [{
      className: 'col',
      key: 'srno',
      type: 'input',
      // use expression hide key for not showing input in form
      expressions: {
        hide: 'true',
      }
    }, {
      className: 'col myClass',
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        // type: 'email',
        ...validation.emailRequired
      },
      validation: {
        messages: {
          // required: 'Email is required',
          // pattern: 'Enter email is invalid'
        }
      }
    }, {
      key: 'address',
      type: InputComponent,
      props: {
        required: true,
        type: 'text',
        label: 'Address',
        inputClass: 'form-control-sm'
      },
    }, {
      className: 'col myClass',
      key: 'password',
      type: 'input',
      props: {
        label: 'Password',
        placeholder: 'Enter Password',
        type: 'password',
        required: true
      },
      validation: {
        show: true,
        messages: {
          required: 'password is required',
        }
      },
      expressions: {
        'validation.show': 'true',
      },
    }, {
      className: 'col myClass',
      key: 'date1',
      type: 'input',
      props: {
        label: 'Select Date',
        type: 'date',
        required: true
      },
      validation: {
        messages: {
          required: 'Date is required',
        }
      }
    }, {
      className: 'col-12 col-sm-12 col-md-12 m-0 mt-lg-3',
      type: 'button',
      props: {
        label: ' ',
        text: 'Submit',
        onClick: () => {
          this.onSubmit(this.form.value);
        },
      },
    }]
  }];

  constructor(public _appService: AppService) {
  }

  onSubmit(formValue: any) {
    console.log(formValue);
  }
}
