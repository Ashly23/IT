import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Garantia} from '../models';
import {GarantiaRepository} from '../repositories';

export class GarantiaController {
  constructor(
    @repository(GarantiaRepository)
    public garantiaRepository : GarantiaRepository,
  ) {}

  @post('/garantias')
  @response(200, {
    description: 'Garantia model instance',
    content: {'application/json': {schema: getModelSchemaRef(Garantia)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Garantia, {
            title: 'NewGarantia',
            exclude: ['id'],
          }),
        },
      },
    })
    garantia: Omit<Garantia, 'id'>,
  ): Promise<Garantia> {
    return this.garantiaRepository.create(garantia);
  }

  @get('/garantias/count')
  @response(200, {
    description: 'Garantia model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Garantia) where?: Where<Garantia>,
  ): Promise<Count> {
    return this.garantiaRepository.count(where);
  }

  @get('/garantias')
  @response(200, {
    description: 'Array of Garantia model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Garantia, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Garantia) filter?: Filter<Garantia>,
  ): Promise<Garantia[]> {
    return this.garantiaRepository.find(filter);
  }

  @patch('/garantias')
  @response(200, {
    description: 'Garantia PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Garantia, {partial: true}),
        },
      },
    })
    garantia: Garantia,
    @param.where(Garantia) where?: Where<Garantia>,
  ): Promise<Count> {
    return this.garantiaRepository.updateAll(garantia, where);
  }

  @get('/garantias/{id}')
  @response(200, {
    description: 'Garantia model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Garantia, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Garantia, {exclude: 'where'}) filter?: FilterExcludingWhere<Garantia>
  ): Promise<Garantia> {
    return this.garantiaRepository.findById(id, filter);
  }

  @patch('/garantias/{id}')
  @response(204, {
    description: 'Garantia PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Garantia, {partial: true}),
        },
      },
    })
    garantia: Garantia,
  ): Promise<void> {
    await this.garantiaRepository.updateById(id, garantia);
  }

  @put('/garantias/{id}')
  @response(204, {
    description: 'Garantia PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() garantia: Garantia,
  ): Promise<void> {
    await this.garantiaRepository.replaceById(id, garantia);
  }

  @del('/garantias/{id}')
  @response(204, {
    description: 'Garantia DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.garantiaRepository.deleteById(id);
  }
}
