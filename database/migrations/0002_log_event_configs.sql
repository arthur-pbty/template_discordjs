CREATE TABLE IF NOT EXISTS bot_log_event_configs (
  bot_id TEXT NOT NULL,
  guild_id TEXT NOT NULL,
  event_key TEXT NOT NULL CHECK (
    event_key IN (
      'messageCreate',
      'messageDelete',
      'messageUpdate',
      'messageBulkDelete',
      'guildMemberAdd',
      'guildMemberRemove',
      'guildMemberUpdate',
      'interactionCreate',
      'channelCreate',
      'channelDelete',
      'channelUpdate',
      'roleCreate',
      'roleDelete',
      'roleUpdate',
      'threadCreate',
      'threadDelete',
      'threadUpdate',
      'emojiCreate',
      'emojiDelete',
      'emojiUpdate',
      'guildUpdate',
      'guildUnavailable',
      'guildBanAdd',
      'guildBanRemove',
      'inviteCreate',
      'inviteDelete'
    )
  ),
  enabled BOOLEAN NOT NULL DEFAULT FALSE,
  channel_id TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (bot_id, guild_id, event_key)
);

CREATE INDEX IF NOT EXISTS idx_bot_log_event_configs_bot_guild
  ON bot_log_event_configs (bot_id, guild_id);