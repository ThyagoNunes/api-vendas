import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1646857695456 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        //estrutura tabela products
        name: 'products', // name table. Todos os atributos são obrigatórios. Obrigatoriedade deverá ser tirada do item específico ( da não obrigatoriedade )
        columns: [
          {
            // cada objeto é uma coluna
            // 1º coluna id
            name: 'id',
            type: 'uuid',
            isPrimary: true, // primary key
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()', // por gerar uuid é obrigatóio ter o default
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal', // por ser decimal terá inteiro e decimal
            precision: 10, // inteiro
            scale: 2, // decimal ( 2 casas decimais )
          },
          {
            name: 'quantity',
            type: 'int',
          },
          {
            name: 'created_at', // When register has created
            type: 'timestamp with time zone',
            default: 'now()',
          },

          {
            name: 'updated_at', // When register has updated
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
