---
sidebar_position: 1
---

# 📖 Package Overview

## Core Components

- **@rons-org/core**: Central framework and shared functionality
- **@rons-org/agent**: Agent runtime and management
- **@rons-org/adapters**: Database implementations (PostgreSQL, SQLite, etc.)
- **@rons-org/clients**: Platform integrations (Discord, Telegram, etc.)
- **@rons-org/plugins**: Extension modules for additional functionality

## Package Architecture

The Rons framework is built on a modular architecture where each package serves a specific purpose:

1. **Core Package**: Provides the fundamental building blocks
2. **Agent Package**: Handles agent lifecycle and runtime
3. **Adapters**: Enable different storage backends
4. **Clients**: Connect to various platforms
5. **Plugins**: Add specialized capabilities

## Package Dependencies

```mermaid
graph TD
    A[Core Package] --> B[Agent Package]
    A --> C[Database Adapters]
    A --> D[Client Packages]
    A --> E[Plugin System]
    B --> C
    B --> D
    B --> E
```

## Getting Started

```
# Install core package
pnpm add @rons-org/core

# Install specific adapters
pnpm add @rons-org/adapter-postgres
pnpm add @rons-org/adapter-sqlite

# Install clients
pnpm add @rons-org/client-discord
pnpm add @rons-org/client-Telegram
```
