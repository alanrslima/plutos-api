import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTransaction1735657798650 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transaction',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '45',
            isPrimary: true,
          },
          {
            name: 'date',
            type: 'datetime',
          },
          {
            name: 'value',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'notes',
            type: 'varchar',
            length: '512',
            isNullable: true,
          },
          {
            name: 'account_id',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'category_id',
            type: 'varchar',
            length: '45',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'transaction',
      new TableForeignKey({
        columnNames: ['account_id'],
        referencedTableName: 'account',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'transaction',
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedTableName: 'category',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('transaction', 'account_id');
    await queryRunner.dropForeignKey('transaction', 'category_id');
    await queryRunner.dropTable('transaction');
  }
}
