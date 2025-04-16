import chalk from "chalk";
import app from "./app.js";

const startServer = (port: number): void => {
  app.listen(port, () => {
    console.log("-------------------------------------------");
    console.log(
      `✅ ${chalk.bold.magentaBright("Listening at")} ${chalk.green(
        `http://localhost:${port}`,
      )} ✅`,
    );
    console.log("-------------------------------------------");
  });
};

export default startServer;
