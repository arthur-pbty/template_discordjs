/**
 * Liste des commandes exportées par le module `commands`.
 *
 * Ce fichier centralise l'ordre par défaut des commandes et permet de
 * récupérer facilement la liste pour l'enregistrement (registry/dispatch).
 */
import { helpCommand } from "./help.js";
import { kissCommand } from "./kiss.js";
import { goodbyeCommand } from "./goodbye.js";
import { presenceCommand } from "./presence.js";
import { pingCommand } from "./ping.js";
import { welcomeCommand } from "./welcome.js";

import type { BotCommand } from "../framework/types/command.js";

/** CommandList: tableau ordonné des commandes disponibles. */
export const commandList: BotCommand[] = [
  kissCommand,
  pingCommand,
  welcomeCommand,
  goodbyeCommand,
  presenceCommand,
  helpCommand,
];
