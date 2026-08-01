# Rons - إطار عمل محاكاة متعدد الوكلاء

# https://github.com/ronsOS/rons

# قم بزيارة https://rons.builders للحصول على الدعم

## 🌍 ترجمات ملف README

[中文说明](./README_CN.md) | [Deutsch](./README_DE.md) | [Français](./README_FR.md) | [ไทย](./README_TH.md) | [Español](README_ES.md)

# فرع التطوير (dev branch)

<img src="static/img/rons_banner.jpg" alt="Rons Banner" width="100%" />

_كما يُشاهَد في تشغيل [@DegenSpartanAI](https://x.com/degenspartanai) و [@MarcAIndreessen](https://x.com/pmairca)_

-   إطار عمل محاكاة متعدد الوكلاء

-   أضف عددًا غير محدود من الشخصيات الفريدة باستخدام [characterfile](https://github.com/lalalune/characterfile/)

-   وحدات توصيل كاملة الميزات لـ Discord و Twitter، مع دعم قنوات الصوت في Discord

-   ذاكرة محادثة واسترجاع مستندات كاملة (RAG)

-   يمكن قراءة الروابط وملفات PDF، وتحويل الصوت والفيديو إلى نص، وتلخيص المحادثات، والمزيد

-   قابلية عالية للتوسعة - أنشئ إجراءاتك الخاصة وعملاءك لتوسيع قدرات إليزا

-   يدعم النماذج مفتوحة المصدر والمحلية (مُهيأ افتراضيًا مع Nous Hermes Llama 3.1B)

-   يدعم OpenAI للاستدلال السحابي على أجهزة خفيفة الوزن

-   وضع "اسأل Claude" لاستدعاء Claude في الاستعلامات الأكثر تعقيدًا

-   مكتوب بالكامل بـ Typescript

-   الحق في الرفع

# البدء

**المتطلبات الأساسية (إلزامي):**

-   [Node.js 23+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

-   [pnpm](https://pnpm.io/installation)

### تعديل ملف .env

-   انسخ .env.example إلى .env واملأ القيم المناسبة

-   قم بتعديل متغيرات البيئة TWITTER لإضافة اسم المستخدم وكلمة المرور للبوت

### تعديل ملف الشخصية

-   تحقق من الملف `packages/core/src/defaultCharacter.ts` - يمكنك تعديله

-   يمكنك أيضًا تحميل الشخصيات باستخدام الأمر `pnpm start --characters="path/to/your/character.json"` وتشغيل عدة بوتات في نفس الوقت.

بعد إعداد ملف .env وملف الشخصية، يمكنك بدء تشغيل البوت باستخدام الأمر التالي:

```
pnpm i
pnpm start
```

# تخصيص إليزا

### إضافة إجراءات مخصصة

لتجنب التعارضات في git في الدليل الأساسي، نوصي بإضافة الإجراءات المخصصة إلى دليل `custom_actions` ثم إضافتها إلى ملف `ronsConfig.yaml`. راجع ملف `ronsConfig.example.yaml` للحصول على مثال.

## التشغيل بنماذج مختلفة

### التشغيل مع Llama

يمكنك تشغيل نماذج Llama 70B أو 405B عن طريق تعيين متغير البيئة لمزود يدعم هذه النماذج. Llama مدعوم أيضًا محليًا إذا لم يتم تعيين أي مزود آخر.

### التشغيل مع Grok

يمكنك تشغيل نماذج Grok عن طريق تعيين متغير البيئة `GROK_API_KEY` بمفتاح API الخاص بك وتعيين grok كمزود النموذج في ملف الشخصية.

### التشغيل مع OpenAI

يمكنك تشغيل نماذج OpenAI عن طريق تعيين متغير البيئة `OPENAI_API_KEY` بمفتاح API الخاص بك وتعيين openai كمزود النموذج في ملف الشخصية.

## متطلبات إضافية

قد تحتاج إلى تثبيت Sharp. إذا رأيت خطأ عند البدء، حاول تثبيته باستخدام الأمر التالي:

```
pnpm install --include=optional sharp
```

# إعداد البيئة

ستحتاج إلى إضافة متغيرات البيئة إلى ملف .env الخاص بك للاتصال بالمنصات المختلفة:

```
# متغيرات البيئة المطلوبة
DISCORD_APPLICATION_ID=

DISCORD_API_TOKEN= # رمز البوت

OPENAI_API_KEY=sk-* # مفتاح OpenAI API، يبدأ بـ sk-

ELEVENLABS_XI_API_KEY= # مفتاح API من elevenlabs

# إعدادات ELEVENLABS
ELEVENLABS_MODEL_ID=eleven_multilingual_v2

ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM

ELEVENLABS_VOICE_STABILITY=0.5

ELEVENLABS_VOICE_SIMILARITY_BOOST=0.9

ELEVENLABS_VOICE_STYLE=0.66

ELEVENLABS_VOICE_USE_SPEAKER_BOOST=false

ELEVENLABS_OPTIMIZE_STREAMING_LATENCY=4

ELEVENLABS_OUTPUT_FORMAT=pcm_16000

TWITTER_DRY_RUN=false

TWITTER_USERNAME= # اسم المستخدم

TWITTER_PASSWORD= # كلمة المرور

TWITTER_EMAIL= # البريد الإلكتروني


# لاستخدام Claude
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

# إعداد الاستدلال المحلي

### إعداد CUDA

إذا كان لديك معالج رسوميات NVIDIA، يمكنك تثبيت CUDA لتسريع الاستدلال المحلي بشكل كبير.

```
pnpm install
npx --no node-llama-cpp source download --gpu cuda
```

تأكد من تثبيت CUDA Toolkit، بما في ذلك cuDNN و cuBLAS.

### التشغيل محليًا

افتراضيًا، سيقوم البوت بتنزيل واستخدام نموذج محلي. يمكنك تغيير ذلك عن طريق تعيين متغيرات البيئة للنموذج الذي تريد استخدامه.

# العملاء

## بوت Discord

للحصول على مساعدة في إعداد بوت Discord، تحقق من هنا: https://discordjs.guide/preparations/setting-up-a-bot-application.html

# التطوير

## الاختبار

لتشغيل مجموعة الاختبارات:

```bash
pnpm test           # تشغيل الاختبارات مرة واحدة

pnpm test:watch    # تشغيل الاختبارات في وضع المراقبة
```

للاختبارات الخاصة بقواعد البيانات:

```bash
pnpm test:sqlite   # تشغيل الاختبارات مع SQLite

pnpm test:sqljs    # تشغيل الاختبارات مع SQL.js
```

تم كتابة الاختبارات باستخدام Jest ويمكن العثور عليها في ملفات `src/**/*.test.ts`. تم تكوين بيئة الاختبار ل:

-   تحميل متغيرات البيئة من `.env.test`

-   استخدام مهلة مدتها دقيقتين للاختبارات طويلة الأمد

-   دعم وحدات ESM

-   تشغيل الاختبارات بالتسلسل (--runInBand)

لإنشاء اختبارات جديدة، أضف ملف `.test.ts` بجانب الكود الذي تختبره.

## تحديثات الوثائق

يرجى التأكد من التحقق من صحة الوثائق المقدمة. للقيام بذلك، قم بتشغيل خدمة الوثائق.

```console
docker compose -f docker-compose-docs.yaml up --build
```

سيتم بدء تشغيل خادم docusaurus ويمكنك التحقق منه محليًا على https://localhost:3000/rons.
