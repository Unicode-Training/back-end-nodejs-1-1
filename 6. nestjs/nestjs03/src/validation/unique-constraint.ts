import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { EntityManager } from 'typeorm';

@ValidatorConstraint({ name: 'unique', async: true })
export class Unique implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}
  async validate(value: string, args: ValidationArguments) {
    if (!value) {
      return true;
    }

    const [table, column, ignoreColumn] = args.constraints;

    //Query builder
    const query = this.entityManager
      .getRepository(table)
      .createQueryBuilder(table)
      .where(`${table}.${column} = :value`, {
        value,
      });
    if (ignoreColumn && args.object[ignoreColumn]) {
      query.andWhere(`${table}.${ignoreColumn} != :ignoreValue`, {
        ignoreValue: args.object[ignoreColumn],
      });
    }
    const count = await query.getCount();
    if (count > 0) {
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Value ($value) is exist!';
  }
}
