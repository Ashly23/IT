import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'InventarioIT',
  connector: 'mssql',
  url: 'mssql://sa:1234@IT/InventarioIT',
  host: 'IT',
  port: 1433,
  user: 'sa',
  password: '1234',
  database: 'InventarioIT'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class InventarioDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'InventarioIT';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.InventarioIT', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
