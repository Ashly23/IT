import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventarioDataSource} from '../datasources';
import {EstadoProducto, EstadoProductoRelations} from '../models';

export class EstadoProductoRepository extends DefaultCrudRepository<
  EstadoProducto,
  typeof EstadoProducto.prototype.id,
  EstadoProductoRelations
> {
  constructor(
    @inject('datasources.Inventario') dataSource: InventarioDataSource,
  ) {
    super(EstadoProducto, dataSource);
  }
}
