# Rons

<img src="./docs/static/img/rons_banner.jpg" alt="Baner Rons" width="100%" />

## Funkcionalnosti

- 🛠 Kompletni konektori za Discord, Twitter i Telegram
- 👥 Podrška za više agenata i soba
- 📚 Jednostavna ingestija i interakcija sa dokumentima
- 💾 Memorija koja se može povratiti i skladištenje dokumenata
- 🚀 Visoko proširivo - kreirajte sopstvene akcije i klijente za proširenje mogućnosti
- ☁️ Podržava više modela, uključujući Llama lokalno, OpenAI, Anthropic, Groq i više
- 📦 Radi besprekorno

## Upotrebe

- 🤖 Chatbotovi
- 🕵️ Autonomni agenti
- 📈 Upravljanje poslovnim procesima
- 🎮 NPC-ovi u video igrama

# Prvi Koraci

**Zahtevi (OBAVEZNI):**

- [Python 2.7+](https://www.python.org/downloads/)
- [Node.js 23.3+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pnpm](https://pnpm.io/installation)

### Uredite .env datoteku

- Kopirajte datoteku .env.example u .env i popunite odgovarajuće vrednosti
- Uredite TWITTER promenljive okruženja da dodate korisničko ime i lozinku bota

### Uredite datoteku karaktera

- Pregledajte datoteku `packages/core/src/defaultCharacter.ts` - možete je modifikovati
- Takođe možete učitati karaktere sa komandom `pnpm start --characters="path/to/your/character.json"` i pokrenuti više botova istovremeno.

Nakon što konfigurišete .env datoteku i datoteku karaktera, možete pokrenuti bota sa:

```
pnpm i
pnpm start
```

# Personalizacija Elize

### Dodavanje prilagođenih akcija

Da biste izbegli sukobe u centralnom direktorijumu, preporučuje se dodavanje prilagođenih akcija u direktorijum `custom_actions` i zatim ih dodajte u datoteku `ronsConfig.yaml`. Pogledajte datoteku `ronsConfig.example.yaml` za primer.

## Pokretanje sa Različitim Modelima

### Pokretanje sa Llama

Možete pokrenuti Llama modele 70B ili 405B podešavanjem promenljive okruženja `XAI_MODEL` na `meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo` ili `meta-llama/Meta-Llama-3.1-405B-Instruct`

### Pokretanje sa Grok

Možete pokrenuti Grok modele podešavanjem promenljive okruženja `XAI_MODEL` na `grok-beta`

### Pokretanje sa OpenAI

Možete pokrenuti OpenAI modele podešavanjem promenljive okruženja `XAI_MODEL` na `gpt-4o-mini` ili `gpt-4o`

## Dodatni Zahtevi

Možda će biti potrebno instalirati Sharp. Ako naiđete na grešku prilikom pokretanja, pokušajte da ga instalirate sa:

```
pnpm install --include=optional sharp
```

# Konfiguracija Okruženja

Trebaće vam da dodate promenljive okruženja u vašu .env datoteku da biste se povezali sa različitim platformama:

```
# Obavezne promenljive okruženja
DISCORD_APPLICATION_ID=
DISCORD_API_TOKEN= # Token bota
OPENAI_API_KEY=sk-* # API ključ OpenAI, počinje sa sk-
ELEVENLABS_XI_API_KEY= # API ključ ElevenLabs
GOOGLE_GENERATIVE_AI_API_KEY= # API ključ Gemini

# KONFIGURACIJE ELEVENLABS
ELEVENLABS_MODEL_ID=eleven_multilingual_v2
ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM
ELEVENLABS_VOICE_STABILITY=0.5
ELEVENLABS_VOICE_SIMILARITY_BOOST=0.9
ELEVENLABS_VOICE_STYLE=0.66
ELEVENLABS_VOICE_USE_SPEAKER_BOOST=false
ELEVENLABS_OPTIMIZE_STREAMING_LATENCY=4
ELEVENLABS_OUTPUT_FORMAT=pcm_16000

TWITTER_DRY_RUN=false
TWITTER_USERNAME= # Korisničko ime naloga
TWITTER_PASSWORD= # Lozinka naloga
TWITTER_EMAIL= # Email naloga

XAI_API_KEY=
XAI_MODEL=

# Za konsultacije sa Claude
ANTHROPIC_API_KEY=

# EVM
EVM_PRIVATE_KEY=EXAMPLE_WALLET_PRIVATE_KEY

# Solana
SOLANA_PRIVATE_KEY=EXAMPLE_WALLET_PRIVATE_KEY
SOLANA_PUBLIC_KEY=EXAMPLE_WALLET_PUBLIC_KEY

# Konfiguracija rezervnog novčanika (zastarelo)
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

# Konfiguracija Lokalne Inference

### Konfiguracija CUDA

Ako imate NVIDIA GPU, možete instalirati CUDA da značajno ubrzate lokalnu inferencu.

```
pnpm install
npx --no node-llama-cpp source download --gpu cuda
```

Uverite se da imate instaliran CUDA Toolkit, uključujući cuDNN i cuBLAS.

### Lokalno Pokretanje

Dodajte XAI_MODEL i konfigurišite ga sa jednom od opcija iz [Pokretanje sa Llama](#pokretanje-sa-llama) - možete ostaviti XAI_API_KEY praznim, preuzeće model sa HuggingFace i izvršiti upite lokalno

# Klijenti

## Discord Bot

Za pomoć sa konfiguracijom vašeg Discord Bota, pogledajte: https://discordjs.guide/preparations/setting-up-a-bot-application.html

# Razvoj

## Testiranje

Za pokretanje test suite-a:

```bash
pnpm test           # Pokreni testove jednom
pnpm test:watch    # Pokreni testove u režimu posmatranja
```

Za specifične testove baze podataka:

```bash
pnpm test:sqlite   # Pokreni testove sa SQLite
pnpm test:sqljs    # Pokreni testove sa SQL.js
```

Testovi su napisani sa Jest i mogu se naći u datotekama `src/**/*.test.ts`. Testno okruženje je konfigurisano za:

- Učitavanje promenljivih okruženja iz `.env.test`
- Korišćenje limita od 2 minuta za dugotrajne testove
- Podršku za ESM module
- Pokretanje testova u sekvenci (--runInBand)

Za kreiranje novih testova, dodajte `.test.ts` datoteku pored koda koji testirate.
