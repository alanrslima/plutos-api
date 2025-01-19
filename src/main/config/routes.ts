import { type Express, Router } from 'express';
import { authRoutes } from '../../modules/auth';
import { accountRoutes } from '../../modules/core';
// import { readdirSync } from "fs";

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  authRoutes(router);
  accountRoutes(router);
  // readdirSync(`${__dirname}/../route`).map(async (file) => {
  //   if (!file.endsWith(".map")) {
  //     (await import(`../route/${file}`)).default(router);
  //   }
  // });
};
