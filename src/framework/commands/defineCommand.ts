import type { BotCommand, BotCommandInput } from "../types/command.js";

const assertRequiredArgsBeforeOptional = (input: BotCommandInput): void => {
  const args = input.args ?? [];
  let firstOptionalArgName: string | null = null;

  for (const arg of args) {
    if (!arg.required) {
      firstOptionalArgName ??= arg.name;
      continue;
    }

    if (firstOptionalArgName) {
      throw new Error(
        `Invalid argument order for command "${input.meta.name}": required argument "${arg.name}" cannot appear after optional argument "${firstOptionalArgName}". Declare all required arguments before optional ones.`,
      );
    }
  }
};

export const defineCommand = (input: BotCommandInput): BotCommand => {
  assertRequiredArgsBeforeOptional(input);

  return {
    meta: input.meta,
    args: [...(input.args ?? [])],
    permissions: input.permissions ?? [],
    examples: input.examples ?? [],
    execute: input.execute,
  };
};
