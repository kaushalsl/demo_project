export const validation = {
  emailRequired: {
    required: true,
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  },
  emailNotRequired: {
    required: false,
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  },
  defaultRequired: {
    required: true,
    pattern: /^[a-zA-Z][a-zA-Z\\\\s]+$/
  }
};


export const patternValidate = {
  'email': '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
  'mobile': '^[0-9]+$'
};

export const validationMessage = {
  'name': [
    {type: 'required', message: 'Name is required.'}
  ],
  'mobile': [
    {type: 'required', message: 'Mobile is required.'},
    {type: 'minlength', message: 'Enter 10 Digit Mobile Number.'},
    {type: 'maxlength', message: 'Mobile cannot be more than 10 characters long.'},
    {type: 'pattern', message: 'Your Mobile must contain only numbers.'},
    {type: 'validMobile', message: 'Your Mobile has already been taken.'}
  ],
  'number': [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Digit Only.'},
    {type: 'min', message: 'Minimun Value is 0'},
    {type: 'max', message: 'Maximum Value is 9'},
  ],
  pinCode: [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Digit Only.'},
    {type: 'minlength', message: 'Enter 6 Digit Pin code Number.'},
    {type: 'maxlength', message: 'Pin code cannot be more than 6 digit long.'},
  ],
  'number1': [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Digit Only.'},
    {type: 'min', message: 'Minimun Value is 0'},
    {type: 'max', message: 'Maximum Value is 9'},
  ],
  'email': [
    {type: 'required', message: 'Email is required.'},
    {type: 'pattern', message: 'Enter Email is invalid.'}
  ],
  'selection': [
    {type: 'required', message: 'Select any one.'},
  ],
  'default': [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Alphabet Only.'},
    {type: 'min', message: 'Minimun Value is 0'},
    {type: 'max', message: 'Maximum Value is 9'},
  ],
  'url': [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Url is invalid.'}
  ],
  'date': [
    {type: 'required', message: 'Date Is required.'}
  ],
  'username': [
    {type: 'required', message: 'Username is required.'},
    {type: 'minlength', message: 'Enter Minimum 5 Character.'},
  ],
  'password': [
    {type: 'required', message: 'password is required.'},
    {type: 'minlength', message: 'password length.'},
    {type: 'maxlength', message: 'password length.'}
  ],
  'confirmPassword': [
    {type: 'required', message: 'Confirm password is required.'},
    {type: 'minlength', message: 'Confirm password length.'},
    {type: 'maxlength', message: 'Confirm password length.'},
    {type: 'matching', message: 'password and Confirm Password does not Match.'},
    {type: 'passwordMismatch', message: 'password and Confirm Password does not Match.'}
  ],
  'address': [
    {type: 'required', message: 'Address is required.'}
  ]
};
