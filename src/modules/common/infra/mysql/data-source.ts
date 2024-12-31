import { DataSource } from "typeorm";
import { join } from "path";

import { env } from "../../main";

export const MysqlDataSource = new DataSource({
  type: "mysql",
  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  //   entities: ["src/entities/*.ts"], // Ajuste o caminho conforme sua estrutura
  migrations: [join(__dirname, "migrations", "*.{ts,js}")],
  synchronize: false, // Não habilitar em produção!
  logging: true,
  migrationsRun: true,
});
