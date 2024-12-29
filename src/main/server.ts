import { env } from "process";
import { mysqlDatabase } from "../modules/common";

mysqlDatabase
  .connect()
  .then(async () => {
    console.log("Succesfully connected to mysql database!");
    const app = (await import("./config/app")).default;
    app.listen(env.PORT, () => {
      console.log(`Server running at http://localhost:${env.PORT}`);
    });
  })
  .catch(console.error);
