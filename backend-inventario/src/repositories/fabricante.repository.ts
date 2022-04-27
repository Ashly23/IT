import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventarioDataSource} from '../datasources';
import {Fabricante, FabricanteRelations} from '../models';

export class FabricanteRepository extends DefaultCrudRepository<
  Fabricante,
  typeof Fabricante.prototype.id,
  FabricanteRelations
> {
  constructor(
    @inject('datasources.Inventario') dataSource: InventarioDataSource,
  ) {
    super(Fabricante, dataSource);
  }
}
