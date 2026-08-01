# Rons 🤖

<div align="center">
  <img src="./docs/static/img/rons_banner.jpg" alt="Rons Banner" width="100%" />
</div>

<div align="center">

📖 [Tài liệu](https://rons-org.github.io/rons/) | 🎯 [Ví dụ](https://github.com/thejoven/awesome-rons)

</div>

## ✨ Tính năng

- 🛠️ Phương thức kết nối đầy đủ tính năng với Discord, Twitter và Telegram
- 🔗 Hỗ trợ mọi mô hình ngôn ngữ lớn (Llama, Grok, OpenAI, Anthropic, v.v.)
- 👥 Hỗ trợ nhiều tác nhân và phòng trò chuyện
- 📚 Dễ dàng tiếp nhận và tương tác với tài liệu của bạn
- 💾 Bộ nhớ và kho lưu trữ tài liệu có thể truy xuất
- 🚀 Có khả năng mở rộng cao - tạo hành động và ứng dụng của riêng bạn
- ☁️ Hỗ trợ nhiều mô hình cùng lúc (Llama, OpenAI, Anthropic, Groq, v.v.)
- 📦 Đơn giản là nó hoạt động!

## 🎯 Các trường hợp sử dụng

- 🤖 Chatbots
- 🕵️ Các tác nhân tự động
- 📈 Xử lý các mô hình kinh tế
- 🎮 NPCs trong các trò chơi điện tử
- 🧠 Giao dịch (Trading)

## 🚀 Bắt đầu

### Điều kiện tiên quyết

- [Python 2.7+](https://www.python.org/downloads/)
- [Node.js 23+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pnpm](https://pnpm.io/installation)

> **Chú ý cho người dùng Windows:** [WSL 2](https://learn.microsoft.com/de-de/windows/wsl/install-manual) là bắt buộc.

### Sử dụng phiên bản Starters (Khuyến nghị)

```bash
git clone https://github.com/rons-org/rons-starter.git

cp .env.example .env

pnpm i && pnpm start
```

Sau đó hãy đọc [Tài liệu](https://rons-org.github.io/rons/), để học cách để tùy chỉnh Rons của bạn.

### Khởi động Rons theo cách thủ công (Chỉ khuyến khích nếu bạn biết mình đang làm gì)

```bash
# Sao chép repository
git clone https://github.com/rons-org/rons.git

# Kiểm tra bản phát hành mới nhất
# Dự án này cải tiến rất nhanh, vì vậy chúng tôi khuyên bạn nên kiểm tra bản phát hành mới nhất
git checkout $(git describe --tags --abbrev=0)
```

### Bắt đầu Rons với Gitpod

[![Mở Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/rons-org/rons/tree/main)

### Chỉnh sửa tệp .env

Sao chép .env.example vào .env và điền các giá trị thích hợp.

```
cp .env.example .env
```

Lưu ý: .env là tùy chọn. Nếu bạn đang có kế hoạch chạy nhiều tác nhân riêng biệt, bạn có thể truyền secret qua định dạng JSON.

### Tự động khởi động Rons

Điều này sẽ chạy mọi thứ để thiết lập dự án và khởi động bot với tính cách (character) mặc định.

```bash
sh scripts/start.sh
```

### Chỉnh sửa tập tin tính cách

1. Mở `agent/src/character.ts`, để chỉnh sửa tính cách mặc định. Bỏ chú thích và chỉnh sửa.

2. Để chạy các tính cách tùy chỉnh:
    - Sử dụng `pnpm start --characters="path/to/your/character.json"`
    - Nhiều tính cách có thể được chạy cùng lúc với nhau
3. Kết nối với X (Twitter)
    - Thay đổi `"clients": []` thành `"clients": ["twitter"]` ở trong tập tính cách (character) để kết nối với X.

### Bắt đầu Rons theo cách thủ công

```bash
pnpm i
pnpm build
pnpm start

# Dự án cải tiến rất nhanh, đôi khi bạn cần phải dọn dẹp dự án nếu bạn quay lại dự án
pnpm clean
```

#### Yêu cầu bổ sung

Bạn có thể cần cài đặt Sharp. Nếu bạn thấy lỗi khi khởi động, hãy thử cài đặt bằng lệnh sau:

```
pnpm install --include=optional sharp
```

### Cộng đồng & Liên hệ

- [GitHub Issues](https://github.com/rons-org/rons/issues). Phù hợp nhất cho: các lỗi bạn gặp phải khi sử dụng Rons và các đề xuất tính năng.
- [Discord](https://discord.gg/ai16z). Phù hợp nhất cho: chia sẻ ứng dụng của bạn và giao lưu với cộng đồng.

## Người đóng góp

<a href="https://github.com/rons-org/rons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=rons-org/rons" />
</a>

## Lịch sử Star cho repo

[![Star History Chart](https://api.star-history.com/svg?repos=rons-org/rons&type=Date)](https://star-history.com/#rons-org/rons&Date)
