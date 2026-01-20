/**
 * Dữ liệu Mini Games
 * Mỗi game có: id, title, description, starterCode
 */

export const miniGames = [
  {
    id: 1,
    title: '🎲 Đoán Số',
    description: `Trong game này, máy tính sẽ chọn một số ngẫu nhiên từ 1 đến 10.
Bạn cần đoán xem số đó là gì!

**Nhiệm vụ:**
- Hoàn thành code để in "Bạn đoán đúng!" nếu đoán đúng
- In "Sai rồi, số đúng là ..." nếu đoán sai`,
    starterCode: `import random

secret = random.randint(1, 10)
guess = int(input("Nhập số bạn đoán: "))

# TODO:
# Nếu đoán đúng → in "Bạn đoán đúng!"
# Nếu sai → in "Sai rồi, số đúng là ..."
`,
  },
  {
    id: 2,
    title: '🧮 Tính Nhanh',
    description: `Game tính nhanh! Bạn sẽ nhận được 2 số và cần tính tổng, hiệu, tích, thương của chúng.

**Nhiệm vụ:**
- In ra tổng (a + b)
- In ra hiệu (a - b)
- In ra tích (a * b)
- In ra thương (a / b)`,
    starterCode: `a = int(input("Nhập số thứ nhất: "))
b = int(input("Nhập số thứ hai: "))

# TODO: In ra tổng, hiệu, tích, thương
`,
  },
  {
    id: 3,
    title: '✅ Trắc Nghiệm Đúng/Sai',
    description: `Bạn sẽ được hỏi một câu hỏi đúng/sai.
Nhập "đúng" hoặc "sai" để trả lời!

**Câu hỏi:** Python là ngôn ngữ lập trình?

**Nhiệm vụ:**
- Kiểm tra câu trả lời
- In "Chúc mừng! Bạn đúng rồi!" nếu đúng
- In "Sai rồi! Đáp án đúng là: đúng" nếu sai`,
    starterCode: `answer = input("Python là ngôn ngữ lập trình? (đúng/sai): ")

correct_answer = "đúng"

# TODO: Kiểm tra câu trả lời và in kết quả
`,
  },
];

