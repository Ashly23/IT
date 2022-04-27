import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventarioDataSource} from '../datasources';
import {Partes, PartesRelations} from '../models';

export class PartesRepository extends DefaultCrudRepository<
  Partes,
  typeof Partes.prototype.id,
  PartesRelations
> {
  constructor(
    @inject('datasources.Inventario') dataSource: InventarioDataSource,
  ) {
    super(Partes, dataSource);
  }
}
