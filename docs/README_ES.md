# Rons - Framework de simulación multi-agente

# https://github.com/ronsOS/rons

# Visita https://rons.builders para ayuda

## 🌍 Traducciones del README

[中文说明](./README_CN.md) | [Deutsch](./README_DE.md) | [Français](./README_FR.md) | [ไทย](./README_TH.md) | [English](README.md)

# dev branch

<img src="static/img/rons_banner.jpg" alt="Rons Banner" width="100%" />

_Respaldado por [@DegenSpartanAI](https://x.com/degenspartanai) y [@MarcAIndreessen](https://x.com/pmairca)_

- Framework de simulación multi-agente
- Añade tantos caracteres únicos como quieras con [characterfile](https://github.com/ronsOS/characterfile/)
- Conectores Discord y Twitter con todas las funciones y compatibilidad con canales de voz de Discord.
- Sistema de memoria RAG completo para conversaciones y documentos.
- Capacidad para leer enlaces y archivos PDF, transcribir audio y vídeos, resumir conversaciones, etc.
- Gran capacidad de ampliación: cree sus propias acciones y clientes para ampliar las posibilidades de Rons.
- Admite modelos locales y de código abierto (configurado por defecto con Nous Hermes Llama 3.1B).
- Compatible con OpenAI para la inferencia en la nube en un dispositivo ligero.
- Modo "Ask Claude" para llamar a Claude en consultas más complejas
- 100% Typescript

# Primeros pasos

**Prerrequisitos (OBLIGATORIOS):**

- [Node.js 23+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pnpm](https://pnpm.io/installation)

### Edita el archivo .env

- Copie .env.example en .env y rellene los valores apropiados
- Edita las variables de entorno de TWITTER para añadir el nombre de usuario y la contraseña de tu bot

### Edita el archivo del character

- Mira el archivo `packages/core/src/defaultCharacter.ts` - tú puedes modificarlo
- También puede cargar caracteres con el comando `pnpm start --characters="path/to/your/character.json"` y ejecutar múltiples bots al mismo tiempo.

Después de configurar el archivo .env y el archivo de caracteres, puedes iniciar el bot con el siguiente comando:

```
pnpm i
pnpm start
```

# Personalizando Rons

### Añadir acciones personalizadas

Para evitar conflictos de git en el directorio core, recomendamos añadir acciones personalizadas a un directorio `custom_actions` y luego añadirlas al archivo `ronsConfig.yaml`. Consulte el archivo `ronsConfig.example.yaml` para ver un ejemplo.

## Ejecutando con diferentes modelos

### Ejecuta con Llama

Tú puedes ejecutar los modelos Llama 70B o 405B configurando el ambiente `XAI_MODEL` en la variable `meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo` o `meta-llama/Meta-Llama-3.1-405B-Instruct`

### Ejecuta con Grok

Tú puedes ejecutar modelos Grok configurando el ambiente `XAI_MODEL` en la variable `grok-beta`

### Ejecuta con OpenAI

Tú puedes ejecutar modelos OpenAI configurando el ambiente `XAI_MODEL` en la variable `gpt-4-mini` o `gpt-4o`

## Requerimientos adicionales

Puede que necesite instalar Sharp. Si aparece un error al arrancar, intente instalarlo con el siguiente comando:

```
pnpm install --include=optional sharp
```

# Configuración del entorno

Tendrás que añadir variables de entorno a tu archivo .env para conectarte a distintas plataformas:

```
# Variables de entorno necesarias
DISCORD_APPLICATION_ID=
DISCORD_API_TOKEN= # Bot token
OPENAI_API_KEY=sk-* # OpenAI API key, starting with sk-
ELEVENLABS_XI_API_KEY= # API key from elevenlabs

# CONFIGURACION DE ELEVENLABS
ELEVENLABS_MODEL_ID=eleven_multilingual_v2
ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM
ELEVENLABS_VOICE_STABILITY=0.5
ELEVENLABS_VOICE_SIMILARITY_BOOST=0.9
ELEVENLABS_VOICE_STYLE=0.66
ELEVENLABS_VOICE_USE_SPEAKER_BOOST=false
ELEVENLABS_OPTIMIZE_STREAMING_LATENCY=4
ELEVENLABS_OUTPUT_FORMAT=pcm_16000

TWITTER_DRY_RUN=false
TWITTER_USERNAME= # Account username
TWITTER_PASSWORD= # Account password
TWITTER_EMAIL= # Account email

X_SERVER_URL=
XAI_API_KEY=
XAI_MODEL=


# Para preguntarle cosas a Claude
ANTHROPIC_API_KEY=

WALLET_SECRET_KEY=EXAMPLE_WALLET_SECRET_KEY
WALLET_PUBLIC_KEY=EXAMPLE_WALLET_PUBLIC_KEY

BIRDEYE_API_KEY=

SOL_ADDRESS=So11111111111111111111111111111111111111112
SLIPPAGE=1
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
HELIUS_API_KEY=


## Telegram
TELEGRAM_BOT_TOKEN=

TOGETHER_API_KEY=
```

# Configuración de la inferencia local

### Configuración CUDA

Si tienes una GPU NVIDIA, puedes instalar CUDA para acelerar drásticamente la inferencia local.

```
pnpm install
npx --no node-llama-cpp source download --gpu cuda
```

Asegúrese de que ha instalado el kit de herramientas CUDA, incluidos cuDNN y cuBLAS.

### Ejecutando localmente

Añade XAI_MODEL y ajústalo a una de las opciones anteriores de [Run with Llama](#run-with-llama) - puedes dejar X_SERVER_URL y XAI_API_KEY en blanco, descarga el modelo de huggingface y lo consulta localmente.

# Clientes

## Discord Bot

Para obtener ayuda con la configuración de su Bot Discord, echa un vistazo aquí: https://discordjs.guide/preparations/setting-up-a-bot-application.html

# Desarrollo

## Pruebas

Para ejecutar el conjunto de pruebas:

```bash
pnpm test           # Ejecutar las pruebas una vez
pnpm test:watch    # Ejecutar pruebas en modo vigilancia
```

Para pruebas database-specific:

```bash
pnpm test:sqlite   # Ejecuta pruebas con SQLite
pnpm test:sqljs    # Ejecuta pruebas con with SQL.js
```

Las pruebas se escriben usando Jest y se encuentran en los archivos `src/**/*.test.ts`. El entorno de pruebas está configurado para:

- Cargar variables de entorno desde `.env.test`.
- Uso de un tiempo de espera de 2 minutos para pruebas de larga duración
- Compatibilidad con módulos ESM
- Ejecutar pruebas en secuencia (--runInBand)

Para crear nuevas pruebas, añade un archivo `.test.ts` junto al código que estás probando.
