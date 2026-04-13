import type {
  Client,
  Guild,
  Message,
  MessageCreateOptions,
  User,
} from "discord.js";

import type { I18nService } from "../i18n/index.js";

export type MemberMessageKind = "welcome" | "goodbye";
export type MemberMessageRenderType = "simple" | "embed" | "container" | "image";

export interface MemberMessageConfig {
  enabled: boolean;
  channelId: string | null;
  messageType: MemberMessageRenderType;
}

export type DispatchMemberMessageFailureReason =
  | "bot_not_ready"
  | "disabled"
  | "missing_channel"
  | "channel_not_found"
  | "channel_not_sendable"
  | "missing_permissions"
  | "send_failed";

export interface DispatchMemberMessageResult {
  sent: boolean;
  reason: DispatchMemberMessageFailureReason | "sent";
  channelId: string | null;
}

export interface DispatchMemberMessageInput {
  client: Client;
  i18n?: I18nService;
  guild: Guild;
  user: User;
  kind: MemberMessageKind;
  ignoreEnabled?: boolean;
}

export interface SendableChannel {
  send: (payload: string | MessageCreateOptions) => Promise<unknown>;
}

export type TemplateSuffix =
  | "simple"
  | "embedTitle"
  | "embedDescription"
  | "containerTitle"
  | "containerDescription"
  | "imageTitle"
  | "imageDescription";

export interface MemberMessageImageInput {
  kind: MemberMessageKind;
  title: string;
  subtitle: string;
  username: string;
  avatarUrl: string;
}

export interface MemberMessageRow {
  enabled: boolean;
  channel_id: string | null;
  message_type: string;
}

export interface MemberMessageCustomIds {
  toggleButton: string;
  channelButton: string;
  channelCancelButton: string;
  typeSelect: string;
  channelSelect: string;
  testButton: string;
}

export interface MemberMessagePanelUiState {
  channelPickerOpen: boolean;
}

export interface MemberMessagePanelSession {
  collector: ReturnType<Message["createMessageComponentCollector"]>;
  disable: () => Promise<void>;
}