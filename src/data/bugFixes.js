/**
 * Dữ liệu "Sai Rồi Sửa"
 * Mỗi bài có: id, title, description, buggyCode, correctCode (để so sánh)
 */

export const bugFixes = [
  {
    id: 1,
    title: 'Quên Dấu Hai Chấm',
    description: `**Lỗi phổ biến:** Quên dấu hai chấm (:) sau câu lệnh if/else/for/while

**Nhiệm vụ:** Sửa code sau để chạy đúng:

Code có lỗi cú pháp, hãy tìm và sửa!`,
    buggyCode: `score = int(input("Nhập điểm: "))
if score >= 5
print("Đậu")
else:
print("Rớt")
`,
    correctCode: `score = int(input("Nhập điểm: "))
if score >= 5:
    print("Đậu")
else:
    print("Rớt")
`,
  },
  {
    id: 2,
    title: 'Thụt Lề Sai (IndentationError)',
    description: `**Lỗi phổ biến:** Thụt lề (indent) sai trong Python

**Nhiệm vụ:** Sửa code sau để chạy đúng:

Trong Python, các dòng code trong cùng một block phải có cùng số lượng khoảng trắng ở đầu dòng!`,
    buggyCode: `x = int(input("Nhập x: "))
if x > 0:
print("Số dương")
  print("Bạn đã nhập số dương")
else:
    print("Số âm hoặc bằng 0")
`,
    correctCode: `x = int(input("Nhập x: "))
if x > 0:
    print("Số dương")
    print("Bạn đã nhập số dương")
else:
    print("Số âm hoặc bằng 0")
`,
  },
  {
    id: 3,
    title: 'Nhầm = và ==',
    description: `**Lỗi phổ biến:** Nhầm lẫn giữa = (gán) và == (so sánh)

**Nhiệm vụ:** Sửa code sau để chạy đúng:

- Dùng = để gán giá trị
- Dùng == để so sánh (trong if)`,
    buggyCode: `age = int(input("Nhập tuổi: "))
if age = 18:
    print("Bạn đã trưởng thành!")
else:
    print("Bạn chưa trưởng thành")
`,
    correctCode: `age = int(input("Nhập tuổi: "))
if age == 18:
    print("Bạn đã trưởng thành!")
else:
    print("Bạn chưa trưởng thành")
`,
  },
  {
    id: 4,
    title: 'Lỗi Logic: So Sánh String và Int',
    description: `**Lỗi phổ biến:** So sánh string với số

**Nhiệm vụ:** Sửa code sau để chạy đúng:

input() trả về string, cần chuyển sang int để so sánh với số!`,
    buggyCode: `number = input("Nhập số: ")
if number > 10:
    print("Số lớn hơn 10")
else:
    print("Số nhỏ hơn hoặc bằng 10")
`,
    correctCode: `number = int(input("Nhập số: "))
if number > 10:
    print("Số lớn hơn 10")
else:
    print("Số nhỏ hơn hoặc bằng 10")
`,
  },
];

