# Rons 🤖

<div align="center">
  <img src="./docs/static/img/rons_banner.jpg" alt="Rons Banner" width="100%" />
</div>

<div align="center">

📖 [التعليمات](https://rons-org.github.io/rons/) | 🎯 [الأمثلة](https://github.com/thejoven/awesome-rons)

</div>

## ✨ ما هي الميزات؟

- 🛠️ اتصالات مجهزة بالكامل لديسكورد، تويتر، وتيليغرام.
- 👥 دعم متعدد للوكلاء والغرف.
- 📚 التفاعل بإتقان مع المستندات كما يمكن فحصها بسهولة.
- 💾 ذاكرة قوية قابلة لاسترجاع ما فاتك! وكذلك مساحة كافية للتخزين
- 🚀 سريعة الانتشار بشكل غير مسبوق، هيّا! تفاعل واصنع عملاء خاصين بك.
- ☁️ تدعم العديد من النماذج مثل:-
    - لاما (نموذج مفتوح المصدر للذكاء الاصطناعي Llama).
    - جروك (نظام ذكاء اصطناعي متقدم Grok).
    - أوبن إيه آي (OpenAI نماذج ذكاء اصطناعي مثل ChatGPT).
    - أنثروبيك Anthropic وغيرها من النماذج الأخرى!
- 📦 جاهزة للعمل أي وقت وبسهولة!

## 🎯 كيف ستفيدني؟

- 🤖 روبوتات الدردشة.
- 🕵️ وكلاء مستقلون.
- 📈 إدارة الأعمال.
- 🎮 في الجيميز NPCs أو الشخصيات التي يتحكم بها الحاسوب فقط وليس اللاعب.
- 🧠 التداول.

## 🚀 ابدأ الآن!

### ماذا عن المتطلبات الأساسية؟

- [Python 2.7+](https://www.python.org/downloads/)
- [Node.js 23+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pnpm](https://pnpm.io/installation)

> **لمتسخدمي الويندوز يجب أن يكون لديك نظام ويندوز الفرعي للينكس:** [WSL 2](https://learn.microsoft.com/de-de/windows/wsl/install-manual).

### استخدام النسخة المبدئية (موصى به)

```bash
git clone https://github.com/rons-org/rons-starter.git

cp .env.example .env

pnpm i && pnpm start
```

تعلم أكثر عن كيفية تخصيص إليزا من هنا [التعليمات](https://rons-org.github.io/rons/)

### إذا كان لديك خبرة بالفعل، يُمكنك تشغيل إليزا يدويًا.

```bash
#  انشئ نسخة
git clone https://github.com/rons-org/rons.git

# ألق نظرة على آخر تحديث
# هذا المشروع يتطور بسرعة، لذا، أوصيك باستخدام أحدث إصدار
git checkout $(git describe --tags --abbrev=0)
```

### تشغل إليزا مع Gitpod

[![In Gitpod öffnen](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/rons-org/rons/tree/main)

### عدّل ملف .env-Datei

انسخ ملف .env.example إلى .env واملأ القيم المناسبة.

```
cp .env.example .env
```

ضع في الإعتبار أن ملف .env اختياري. إذا كنت تخطط لتشغيل عدة وكلاء مختلفين، ابعت الـsecrets من خلال ملف JSON الخاص بالشخصية.

### تشغيل إليزا تلقائيًا

هذا الكود لتنفيذ جميع الخطوات اللازمة لإعداد المشروع وكذلك تشغيل الروبوت مع الشخصية الافتراضية.

```bash
sh scripts/start.sh
```

### لتعديل ملف الشخصية

افتح ملف agent/src/character.ts لتعديل الشخصية الافتراضية. قم بإلغاء التعليق وعدّل عليها.

لتحميل شخصيات مخصصة

- استخدم الأمر "pnpm start --characters="path/to/your/character.json
- يُمكنك تحميل عدة ملفات للشخصيات في نفس الوقت.

الاتصال بـ X (تويتر):

- غيّر "clients": [] إلى "clients": ["twitter"] في ملف الشخصية للاتصال بـ X أو تويتر

### لتشغيل إليزا يدويًا

```bash
pnpm i
pnpm build
pnpm start

# المشروع يتطور سريعًا. لذا قد تحتاج إلى تنظيف المشروع إذا قمت بالرجوع إليه بعد فترة.
pnpm clean
```

#### المتطلبات الإضافية

قد تحتاج إلى تثبيت Sharp. إذا واجهت خطأ أثناء بدء التشغيل، جرب استخدام الأمر التالي:

```
pnpm install --include=optional sharp
```

### المجتمع والدعم

- في حال إذا واجهت أي مشاكل تتعلق باستخدام إليزا ولتقديم المقترحات [GitHub Issues](https://github.com/rons-org/rons/issues).
- لمشاركة تطبيقاتك والتفاعل مع المجتمع [Discord](https://discord.gg/ai16z).

## المُساهمون

<a href="https://github.com/rons-org/rons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=rons-org/rons" />
</a>

## تاريخ النجوم

[![Star History Chart](https://api.star-history.com/svg?repos=rons-org/rons&type=Date)](https://star-history.com/#rons-org/rons&Date)
