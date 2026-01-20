# 🐍 Python Learn - Nền Tảng Học Python Cho Học Sinh Cấp 3

Website học Python tương tự W3Schools (phiên bản mini), cho phép học sinh học lập trình Python một cách tương tác và vui vẻ ngay trên trình duyệt.

## ✨ Tính Năng

### 🎮 Mini Game Python
- Học Python qua các mini game thú vị
- Code khung sẵn, học sinh chỉ cần hoàn thành phần TODO
- Chạy code ngay trên trình duyệt và xem kết quả tức thì

### 📝 Bài Tập + Chấm Tự Động
- Làm bài tập với starter code
- Chấm điểm tự động với nhiều test cases ẩn
- Hiển thị kết quả chi tiết: đúng/sai từng test

### 🐛 Sai Rồi Sửa
- Học từ lỗi phổ biến trong Python
- Sửa code sai để hiểu rõ hơn về cú pháp và logic
- Bao gồm các lỗi: quên dấu `:`, thụt lề sai, nhầm `=` và `==`, ...

## 🚀 Cài Đặt

### Yêu cầu
- Node.js (version 14 trở lên)
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Cài đặt TailwindCSS:**
```bash
npm install -D tailwindcss postcss autoprefixer
```

3. **Chạy ứng dụng:**
```bash
npm start
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

## 📁 Cấu Trúc Dự Án

```
src/
├── components/          # Các component dùng chung
│   ├── Navbar.jsx      # Thanh menu điều hướng
│   ├── CodeEditor.jsx  # Editor code Python
│   └── OutputPanel.jsx # Panel hiển thị output/kết quả
├── modules/            # Các module chính
│   ├── MiniGame.jsx    # Module mini game
│   ├── ExerciseJudge.jsx # Module bài tập + chấm điểm
│   └── FixTheBug.jsx   # Module sửa lỗi
├── data/               # Dữ liệu bài học
│   ├── miniGames.js    # Danh sách mini games
│   ├── exercises.js    # Danh sách bài tập
│   └── bugFixes.js     # Danh sách bài sửa lỗi
├── utils/              # Utilities
│   └── pyodideHelper.js # Helper để chạy Python code
└── App.jsx             # Component chính
```

## 🛠 Công Nghệ Sử Dụng

- **ReactJS** - Framework UI (functional components + hooks)
- **Pyodide** - Python runtime chạy trên browser (từ CDN)
- **TailwindCSS** - Utility-first CSS framework
- **Create React App** - Build tool

## 📝 Thêm Bài Mới

### Thêm Mini Game

Chỉnh sửa file `src/data/miniGames.js`:

```javascript
{
  id: 4,
  title: '🎯 Game Mới',
  description: 'Mô tả game...',
  starterCode: `# Code khung ở đây
# TODO: học sinh sẽ hoàn thành
`,
}
```

### Thêm Bài Tập

Chỉnh sửa file `src/data/exercises.js`:

```javascript
{
  id: 4,
  title: 'Tên Bài Tập',
  description: 'Mô tả yêu cầu...',
  starterCode: `# Code khung`,
  hiddenTests: [
    { input: '1\n2', output: '3' },
    // Thêm test cases...
  ],
}
```

### Thêm Bài Sửa Lỗi

Chỉnh sửa file `src/data/bugFixes.js`:

```javascript
{
  id: 5,
  title: 'Tên Lỗi',
  description: 'Mô tả lỗi...',
  buggyCode: `# Code sai`,
  correctCode: `# Code đúng`,
}
```

## 🎯 Tính Năng Kỹ Thuật

- ✅ Chạy Python code trực tiếp trên browser (không cần backend)
- ✅ Capture stdout và stderr từ Python
- ✅ Hỗ trợ input() trong Python code
- ✅ Auto-resize code editor
- ✅ Syntax error highlighting
- ✅ Code formatting tự động (Tab = 4 spaces)

## 📚 Tài Liệu

- [React Documentation](https://reactjs.org/)
- [Pyodide Documentation](https://pyodide.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

## 🤝 Đóng Góp

Dự án này được thiết kế để dễ mở rộng. Bạn có thể:
- Thêm mini games mới
- Thêm bài tập mới
- Thêm các loại lỗi phổ biến khác
- Cải thiện UI/UX

## 📄 License

MIT License - Tự do sử dụng cho mục đích giáo dục.

---

**Chúc bạn học Python vui vẻ! 🎉**
