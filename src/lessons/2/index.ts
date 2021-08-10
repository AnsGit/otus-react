import { createInterface } from "readline";

import { runner } from "./runner";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<void> => {
  return new Promise((resolve) => {
    rl.question("> ", (answer: string) => {
      try {
        const result = runner(answer);
        console.log(`Result: ${result || undefined}`);
      } catch (e) {
        console.log(`Result: ${e.message}. Try again.`);
      }

      resolve();
    });
  });
};

async function app(): Promise<null> {
  while (true) {
    await question();
  }
}

app();
