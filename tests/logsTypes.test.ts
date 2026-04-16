import assert from "node:assert/strict";
import test from "node:test";

import { LOG_EVENT_KEYS } from "../src/features/logs/catalog.js";
import {
  createDefaultLogEventState,
  isLogEventKey,
  mergeLogEventRowsIntoState,
} from "../src/validators/logs.js";

test("createDefaultLogEventState initialise tous les events desactives", () => {
  const state = createDefaultLogEventState();

  assert.equal(Object.keys(state).length, LOG_EVENT_KEYS.length);
  for (const eventKey of LOG_EVENT_KEYS) {
    assert.equal(state[eventKey].enabled, false);
    assert.equal(state[eventKey].channelId, null);
  }
});

test("isLogEventKey valide les cles connues", () => {
  assert.equal(isLogEventKey("messageCreate"), true);
  assert.equal(isLogEventKey("not-an-event"), false);
});

test("mergeLogEventRowsIntoState fusionne les valeurs stockees", () => {
  const state = mergeLogEventRowsIntoState([
    {
      event_key: "messageCreate",
      enabled: true,
      channel_id: "123",
    },
    {
      event_key: "not-existing",
      enabled: true,
      channel_id: "999",
    },
  ]);

  assert.equal(state.messageCreate.enabled, true);
  assert.equal(state.messageCreate.channelId, "123");
  assert.equal(state.messageDelete.enabled, false);
  assert.equal(state.messageDelete.channelId, null);
});