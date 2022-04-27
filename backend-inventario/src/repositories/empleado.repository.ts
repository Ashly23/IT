import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventarioDataSource} from '../datasources';
import {Empleado, EmpleadoRelations} from '../models';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.id,
  EmpleadoRelations
> {
  constructor(
    @inject('datasources.Inventario') dataSource: InventarioDataSource,
  ) {
    super(Empleado, dataSource);
  }
}
