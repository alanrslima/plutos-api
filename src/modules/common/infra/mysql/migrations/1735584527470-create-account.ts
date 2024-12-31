import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateAccount1735584527470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'account',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '45',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'initialBalance',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'balance',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'owner_id',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'currency',
            type: 'varchar',
            length: '3',
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
      'account',
      new TableForeignKey({
        columnNames: ['owner_id'],
        referencedTableName: 'user',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('account', 'owner_id');
    await queryRunner.dropTable('account');
  }
}
