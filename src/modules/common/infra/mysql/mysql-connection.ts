import mysql, { ConnectionOptions, Pool } from "mysql2/promise";
import { env } from "../../main/config/env";

type QueryOptions = {
  sql: string;
  values?: any | any[] | { [param: string]: any };
  namedPlaceholders?: boolean;
};

class MysqlDatabase {
  private accessOptions: ConnectionOptions;
  private pool: Pool;

  constructor() {
    this.accessOptions = {
      user: env.MYSQL_USER,
      database: env.MYSQL_DATABASE,
      password: env.MYSQL_PASSWORD,
      port: Number(env.MYSQL_PORT),
      host: env.MYSQL_HOST,
    };
    this.pool = mysql.createPool(this.accessOptions);
  }

  async connect() {
    mysql.createConnection(this.accessOptions);
  }

  async makeTransaction(
    fn: (connection: mysql.PoolConnection) => Promise<void>
  ) {
    const connection = await this.pool.getConnection();
    try {
      await connection.beginTransaction();
      await fn(connection);
      connection.commit();
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      this.pool.releaseConnection(connection);
    }
  }

  async query(props: QueryOptions) {
    const connection = await this.pool.getConnection();
    const [response] = await connection.query(props);
    this.pool.releaseConnection(connection);
    return response as any[];
  }
}

const mysqlDatabase = new MysqlDatabase();
export { mysqlDatabase };
