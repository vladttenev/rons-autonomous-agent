# Rons

<img src="./docs/static/img/rons_banner.jpg" alt="Rons Banner" width="100%" />

## Funcționalități

-   🛠 Conectori compleți pentru Discord, Twitter și Telegram
-   👥 Suport pentru agenți multipli și camere
-   📚 Ingestie și interacțiune ușoară cu documentele tale
-   💾 Memorie recuperabilă și stocare de documente
-   🚀 Extensibil în mod ridicat – creează propriile acțiuni și clienți pentru a extinde capacitățile
-   ☁️ Suportă multe modele, inclusiv Llama local, OpenAI, Anthropic, Groq și altele
-   📦 Funcționează perfect!

## Pentru ce pot să-l folosesc?

-   🤖 Chatbot-uri
-   🕵️ Agenți autonomi
-   📈 Gestiunea proceselor de afaceri
-   🎮 NPC-uri în jocuri video

# Început

**Cerințe preliminare (OBLIGATORIU):**

-   [Python 2.7+](https://www.python.org/downloads/)
-   [Node.js 23.3+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   [pnpm](https://pnpm.io/installation)

### Edite fișierul .env

-   Copiați `.env.example` în `.env` și completați valorile corespunzătoare
-   Editați variabilele de mediu pentru TWITTER pentru a adăuga numele de utilizator și parola botului dvs.

### Edite fișierul de personaj

-   Verificați fișierul `packages/core/src/defaultCharacter.ts` – îl puteți modifica
-   De asemenea, puteți încărca personaje cu comanda `pnpm start --characters="path/to/your/character.json"` și rula mai mulți boți în același timp.

După ce ați configurat fișierul .env și fișierul de personaj, puteți porni botul cu următoarea comandă:

```
pnpm i
pnpm start
```

# Personalizarea Rons

### Adăugarea de acțiuni personalizate

Pentru a evita conflicte în directorul core, vă recomandăm să adăugați acțiuni personalizate într-un director `custom_actions` și apoi să le includeți în fișierul `ronsConfig.yaml`. Consultați fișierul `ronsConfig.example.yaml` pentru un exemplu.

## Rularea cu modele diferite

### Rularea cu Llama

Puteți rula modele Llama 70B sau 405B setând variabila de mediu `XAI_MODEL` la `meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo` sau `meta-llama/Meta-Llama-3.1-405B-Instruct`.

### Rularea cu Grok

Puteți rula modele Grok setând variabila de mediu `XAI_MODEL` la `grok-beta`.

### Rularea cu OpenAI

Puteți rula modele OpenAI setând variabila de mediu `XAI_MODEL` la `gpt-4o-mini` sau `gpt-4o`.

## Cerințe suplimentare

Este posibil să fie necesară instalarea Sharp. Dacă întâmpinați o eroare la pornire, încercați să îl instalați cu următoarea comandă:

```
pnpm install --include=optional sharp
```

# Configurarea mediului

Va trebui să adăugați variabile de mediu în fișierul dvs. `.env` pentru a vă conecta la diverse platforme:

```
# Variáveis de ambiente obrigatórias
DISCORD_APPLICATION_ID=
DISCORD_API_TOKEN= # Token do bot
OPENAI_API_KEY=sk-* # Chave API do OpenAI, começando com sk-
ELEVENLABS_XI_API_KEY= # Chave API do elevenlabs
GOOGLE_GENERATIVE_AI_API_KEY= # Chave API do Gemini

# CONFIGURAÇÕES DO ELEVENLABS
ELEVENLABS_MODEL_ID=eleven_multilingual_v2
ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM
ELEVENLABS_VOICE_STABILITY=0.5
ELEVENLABS_VOICE_SIMILARITY_BOOST=0.9
ELEVENLABS_VOICE_STYLE=0.66
ELEVENLABS_VOICE_USE_SPEAKER_BOOST=false
ELEVENLABS_OPTIMIZE_STREAMING_LATENCY=4
ELEVENLABS_OUTPUT_FORMAT=pcm_16000

TWITTER_DRY_RUN=false
TWITTER_USERNAME= # Nome de usuário da conta
TWITTER_PASSWORD= # Senha da conta
TWITTER_EMAIL= # Email da conta

XAI_API_KEY=
XAI_MODEL=


# Para perguntar coisas ao Claude
ANTHROPIC_API_KEY=

# EVM
EVM_PRIVATE_KEY=EXAMPLE_WALLET_PRIVATE_KEY

# Solana
SOLANA_PRIVATE_KEY=EXAMPLE_WALLET_PRIVATE_KEY
SOLANA_PUBLIC_KEY=EXAMPLE_WALLET_PUBLIC_KEY

# Fallback Wallet Configuration (deprecated)
WALLET_PRIVATE_KEY=EXAMPLE_WALLET_PRIVATE_KEY
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

# Configurarea inferenței locale

### Configurarea CUDA

Dacă aveți un GPU NVIDIA, puteți instala CUDA pentru a accelera dramatic inferența locală.

```
pnpm install
npx --no node-llama-cpp source download --gpu cuda
```

Asigurați-vă că ați instalat CUDA Toolkit, inclusiv cuDNN și cuBLAS.

### Rularea locală

Adăugați `XAI_MODEL` și setați-l la una dintre opțiunile de mai sus din [Rularea cu Llama](#rularea-cu-llama) – puteți lăsa `XAI_API_KEY` necompletate, modelul va fi descărcat de pe Hugging Face și interogările vor fi făcute local.

# Clienți

## Bot Discord

Pentru ajutor la configurarea Bot-ului Discord, consultați: https://discordjs.guide/preparations/setting-up-a-bot-application.html

# Dezvoltare

## Teste

Pentru a rula suita de teste:

```bash
pnpm test           # Execută testele o dată
pnpm test:watch    # Execută testele în modul watch
```

Pentru teste specifice bazei de date:

```bash
pnpm test:sqlite   # Execută testele cu SQLite
pnpm test:sqljs    # Execută testele cu SQL.js
```

Testele sunt scrise folosind Jest și pot fi găsite în fișierele `src/**/*.test.ts`. Mediul de testare este configurat pentru:

-   Încărcarea variabilelor de mediu din `.env.test`
-   Utilizarea unui timeout de 2 minute pentru teste de lungă durată
-   Suport pentru module ESM
-   Rularea testelor în secvență (`--runInBand`)

Pentru a crea teste noi, adăugați un fișier `.test.ts` adiacent codului pe care îl testați.
