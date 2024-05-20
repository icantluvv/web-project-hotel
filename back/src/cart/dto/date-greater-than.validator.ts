import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'dateGreaterThan', async: false })
export class DateGreaterThan implements ValidatorConstraintInterface {
  validate(endDate: Date, args: ValidationArguments) {
    const startDate = args.object[args.constraints[0]];
    return endDate > startDate;
  }

  defaultMessage(args: ValidationArguments) {
    return 'End date must be greater than start date';
  }
}
