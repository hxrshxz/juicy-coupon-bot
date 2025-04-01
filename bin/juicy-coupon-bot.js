#!/usr/bin/env node
import("tsx")
  .then((tsx) => {
    tsx.run("./juicy-coupon-bot.ts");
  })
  .catch((err) => {
    console.error("Error loading tsx:", err);
    process.exit(1);
  });
