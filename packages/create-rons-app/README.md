# create-rons-app

A minimal CLI tool to scaffold RONS applications with zero configuration. Get started building your own RONS-style chatbot in seconds.

<!-- automd:badges color="yellow" license name="create-rons-app" codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/create-rons-app?color=yellow)](https://npmjs.com/package/create-rons-app)
[![npm downloads](https://img.shields.io/npm/dm/create-rons-app?color=yellow)](https://npm.chart.dev/create-rons-app)
[![bundle size](https://img.shields.io/bundlephobia/minzip/create-rons-app?color=yellow)](https://bundlephobia.com/package/create-rons-app)

<!-- /automd -->

## Usage

You can create a new RONS app with your preferred package manager:

<!-- automd:pm-x version="latest" name="create-rons-app" args="path" <flags>" -->

```sh
# npm
npx create-rons-app@latest path

# pnpm
pnpm dlx create-rons-app@latest path

# bun
bunx create-rons-app@latest path

# deno
deno run -A npm:create-rons-app@latest path
```

<!-- /automd -->

## Command Line Arguments

- `--name`: Name of the template to use (default: "rons")
- `--dir`: Directory where the project will be created (default: current directory)
- `--registry`: Custom registry URL for templates

## Getting Started

Once your project is created:

1. Navigate to the project directory:

    ```bash
    cd your-project-name
    ```

2. Copy the example environment file:

    ```bash
    cp .env.example .env
    ```

3. Install dependencies:

    ```bash
    pnpm install
    ```

4. Start the development server:
    ```bash
    pnpm start
    ```

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
