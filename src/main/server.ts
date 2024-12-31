import "reflect-metadata";
import { env } from "process";
import { MysqlDataSource } from "../modules/common";

MysqlDataSource.initialize()
  .then(async () => {
    console.log("Succesfully connected to mysql database!");
    const app = (await import("./config/app")).default;
    app.listen(env.PORT, () => {
      console.log(`Server running at http://localhost:${env.PORT}`);
    });
  })
  .catch(console.error);
