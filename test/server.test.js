import assert from "node:assert/strict";
import test from "node:test";
import { createApp } from "../src/server.js";

test("应用工厂返回 Express 实例", () => {
  const app = createApp();
  assert.equal(typeof app.listen, "function");
});
