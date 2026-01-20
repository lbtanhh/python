/**
 * Dữ liệu Bài Toán Đời Sống
 * Học Python cơ bản qua các bài toán thực tế
 * Mỗi bài có: id, title, description, concept (khái niệm), starterCode, solution
 */

export const realWorldProblems = [
  // IF/ELSE - Điều kiện
  {
    id: 1,
    title: '💧 Tính Tiền Nước',
    concept: 'if/else - Điều kiện',
    description: `**Bài toán:** Công ty nước có bảng giá như sau:
- 0-10 m³: 5,000đ/m³
- 11-30 m³: 7,000đ/m³  
- Trên 30 m³: 10,000đ/m³

**Nhiệm vụ:** Viết chương trình tính tiền nước dựa trên số m³ sử dụng.

**Khái niệm học:** Sử dụng if/elif/else để xử lý nhiều điều kiện.`,
    starterCode: `# Nhập số m³ nước đã sử dụng
m3 = int(input("Nhập số m³ nước: "))

# TODO: Tính tiền nước dựa trên bảng giá
# Nếu m3 <= 10: tiền = m3 * 5000
# Nếu 11 <= m3 <= 30: tiền = 10*5000 + (m3-10)*7000
# Nếu m3 > 30: tiền = 10*5000 + 20*7000 + (m3-30)*10000

tiền = 0
print(f"Tổng tiền: {tiền:,}đ")
`,
    solution: `m3 = int(input("Nhập số m³ nước: "))

if m3 <= 10:
    tiền = m3 * 5000
elif m3 <= 30:
    tiền = 10 * 5000 + (m3 - 10) * 7000
else:
    tiền = 10 * 5000 + 20 * 7000 + (m3 - 30) * 10000

print(f"Tổng tiền: {tiền:,}đ")
`,
  },
  {
    id: 2,
    title: '🎓 Xếp Loại Học Sinh',
    concept: 'if/else - Điều kiện',
    description: `**Bài toán:** Xếp loại học sinh dựa trên điểm trung bình:
- Giỏi: >= 8.0
- Khá: >= 6.5 và < 8.0
- Trung bình: >= 5.0 và < 6.5
- Yếu: < 5.0

**Nhiệm vụ:** Viết chương trình nhập điểm và in ra xếp loại.

**Khái niệm học:** Sử dụng if/elif/else để phân loại.`,
    starterCode: `điểm = float(input("Nhập điểm trung bình: "))

# TODO: Xếp loại học sinh
# Nếu điểm >= 8.0 → "Giỏi"
# Nếu điểm >= 6.5 → "Khá"
# Nếu điểm >= 5.0 → "Trung bình"
# Ngược lại → "Yếu"

xếp_loại = ""
print(f"Xếp loại: {xếp_loại}")
`,
    solution: `điểm = float(input("Nhập điểm trung bình: "))

if điểm >= 8.0:
    xếp_loại = "Giỏi"
elif điểm >= 6.5:
    xếp_loại = "Khá"
elif điểm >= 5.0:
    xếp_loại = "Trung bình"
else:
    xếp_loại = "Yếu"

print(f"Xếp loại: {xếp_loại}")
`,
  },

  // LOOPS - Vòng lặp
  {
    id: 3,
    title: '💰 Tính Lãi Suất Ngân Hàng',
    concept: 'for loop - Vòng lặp',
    description: `**Bài toán:** Gửi tiết kiệm 1,000,000đ với lãi suất 5%/năm.
Tính số tiền sau 10 năm (lãi kép).

**Công thức:** Tiền năm sau = Tiền năm trước * (1 + lãi suất)

**Nhiệm vụ:** Dùng vòng lặp for để tính từng năm.

**Khái niệm học:** Sử dụng for loop để lặp qua các năm.`,
    starterCode: `tiền_gốc = 1000000
lãi_suất = 0.05  # 5%
số_năm = 10

# TODO: Dùng for loop để tính tiền sau từng năm
# range(1, số_năm + 1) để lặp từ năm 1 đến năm 10

tiền = tiền_gốc
for năm in range(1, số_năm + 1):
    # Tính tiền sau mỗi năm
    pass

print(f"Sau {số_năm} năm, số tiền là: {tiền:,.0f}đ")
`,
    solution: `tiền_gốc = 1000000
lãi_suất = 0.05
số_năm = 10

tiền = tiền_gốc
for năm in range(1, số_năm + 1):
    tiền = tiền * (1 + lãi_suất)
    print(f"Năm {năm}: {tiền:,.0f}đ")

print(f"\nSau {số_năm} năm, tổng số tiền là: {tiền:,.0f}đ")
`,
  },
  {
    id: 4,
    title: '🛒 Tính Tổng Tiền Mua Hàng',
    concept: 'for loop - Vòng lặp',
    description: `**Bài toán:** Mua nhiều món hàng, mỗi món có giá khác nhau.
Tính tổng tiền phải trả.

**Nhiệm vụ:** Nhập số lượng món hàng, sau đó nhập giá từng món và tính tổng.

**Khái niệm học:** Sử dụng for loop để nhập và xử lý nhiều giá trị.`,
    starterCode: `số_món = int(input("Nhập số món hàng: "))

# TODO: Dùng for loop để nhập giá từng món và tính tổng
tổng = 0

for i in range(số_món):
    # Nhập giá món thứ i+1
    # Cộng vào tổng
    pass

print(f"Tổng tiền: {tổng:,}đ")
`,
    solution: `số_món = int(input("Nhập số món hàng: "))

tổng = 0
for i in range(số_món):
    giá = int(input(f"Nhập giá món {i+1}: "))
    tổng += giá

print(f"Tổng tiền: {tổng:,}đ")
`,
  },
  {
    id: 5,
    title: '🔢 Tìm Số Lớn Nhất',
    concept: 'for loop - Vòng lặp',
    description: `**Bài toán:** Nhập 5 số và tìm số lớn nhất.

**Nhiệm vụ:** Dùng vòng lặp để so sánh và tìm số lớn nhất.

**Khái niệm học:** Sử dụng biến tạm để lưu giá trị lớn nhất.`,
    starterCode: `# TODO: Nhập 5 số và tìm số lớn nhất
số_lớn_nhất = 0

for i in range(5):
    số = int(input(f"Nhập số thứ {i+1}: "))
    # So sánh và cập nhật số_lớn_nhất nếu cần
    pass

print(f"Số lớn nhất là: {số_lớn_nhất}")
`,
    solution: `số_lớn_nhất = None

for i in range(5):
    số = int(input(f"Nhập số thứ {i+1}: "))
    if số_lớn_nhất is None or số > số_lớn_nhất:
        số_lớn_nhất = số

print(f"Số lớn nhất là: {số_lớn_nhất}")
`,
  },

  // LISTS - Mảng/Danh sách
  {
    id: 6,
    title: '📊 Tính Điểm Trung Bình',
    concept: 'list - Danh sách',
    description: `**Bài toán:** Có danh sách điểm của học sinh, tính điểm trung bình.

**Nhiệm vụ:** Tạo danh sách điểm, tính tổng và chia cho số môn.

**Khái niệm học:** Sử dụng list để lưu nhiều giá trị, dùng len() để đếm.`,
    starterCode: `# Danh sách điểm các môn
điểm = [8.5, 7.0, 9.0, 6.5, 8.0]

# TODO: Tính điểm trung bình
# Tổng = sum(điểm) hoặc dùng vòng lặp
# Trung bình = Tổng / số môn

tổng = 0
# Dùng for loop để tính tổng
for d in điểm:
    pass

trung_bình = 0
print(f"Điểm trung bình: {trung_bình:.2f}")
`,
    solution: `điểm = [8.5, 7.0, 9.0, 6.5, 8.0]

tổng = 0
for d in điểm:
    tổng += d

trung_bình = tổng / len(điểm)
print(f"Điểm trung bình: {trung_bình:.2f}")
`,
  },
  {
    id: 7,
    title: '🛍️ Quản Lý Danh Sách Mua Sắm',
    concept: 'list - Danh sách',
    description: `**Bài toán:** Tạo danh sách mua sắm, thêm món, xóa món, và in ra.

**Nhiệm vụ:** Sử dụng các phương thức của list: append(), remove(), in ra danh sách.

**Khái niệm học:** Thao tác với list: thêm, xóa, duyệt qua các phần tử.`,
    starterCode: `# Danh sách mua sắm ban đầu
danh_sách = ["Sữa", "Bánh mì"]

# TODO: Thêm "Trứng" vào danh sách
# TODO: Thêm "Thịt" vào danh sách
# TODO: Xóa "Bánh mì" khỏi danh sách
# TODO: In ra danh sách cuối cùng

print("Danh sách mua sắm:")
# In từng món trong danh sách
`,
    solution: `danh_sách = ["Sữa", "Bánh mì"]

danh_sách.append("Trứng")
danh_sách.append("Thịt")
danh_sách.remove("Bánh mì")

print("Danh sách mua sắm:")
for i, món in enumerate(danh_sách, 1):
    print(f"{i}. {món}")
`,
  },

  // DICTIONARIES - Từ điển
  {
    id: 8,
    title: '📱 Quản Lý Danh Bạ',
    concept: 'dictionary - Từ điển',
    description: `**Bài toán:** Quản lý danh bạ điện thoại (tên → số điện thoại).

**Nhiệm vụ:** Tạo dictionary lưu danh bạ, thêm người mới, tìm số điện thoại.

**Khái niệm học:** Sử dụng dictionary để lưu cặp key-value.`,
    starterCode: `# Danh bạ điện thoại
danh_bạ = {
    "Mẹ": "0901234567",
    "Bố": "0907654321"
}

# TODO: Thêm "Anh trai" với số "0911111111"
# TODO: In ra số điện thoại của "Mẹ"
# TODO: In ra toàn bộ danh bạ

print("Danh bạ:")
`,
    solution: `danh_bạ = {
    "Mẹ": "0901234567",
    "Bố": "0907654321"
}

danh_bạ["Anh trai"] = "0911111111"

print(f"Số điện thoại của Mẹ: {danh_bạ['Mẹ']}")
print("\nToàn bộ danh bạ:")
for tên, số in danh_bạ.items():
    print(f"{tên}: {số}")
`,
  },
  {
    id: 9,
    title: '🏪 Quản Lý Kho Hàng',
    concept: 'dictionary - Từ điển',
    description: `**Bài toán:** Quản lý kho hàng: tên sản phẩm → số lượng.

**Nhiệm vụ:** Tạo dictionary kho hàng, cập nhật số lượng, kiểm tra tồn kho.

**Khái niệm học:** Sử dụng dictionary để quản lý dữ liệu có cấu trúc.`,
    starterCode: `# Kho hàng: tên sản phẩm → số lượng
kho = {
    "Áo": 50,
    "Quần": 30,
    "Giày": 20
}

# TODO: Thêm "Mũ" với số lượng 15
# TODO: Cập nhật số lượng "Áo" thành 60
# TODO: Kiểm tra xem "Quần" còn bao nhiêu

print("Tình trạng kho:")
`,
    solution: `kho = {
    "Áo": 50,
    "Quần": 30,
    "Giày": 20
}

kho["Mũ"] = 15
kho["Áo"] = 60

print("Tình trạng kho:")
for sản_phẩm, số_lượng in kho.items():
    print(f"{sản_phẩm}: {số_lượng} cái")
`,
  },

  // FUNCTIONS - Hàm
  {
    id: 10,
    title: '🧮 Máy Tính Đơn Giản',
    concept: 'function - Hàm',
    description: `**Bài toán:** Tạo các hàm tính toán: cộng, trừ, nhân, chia.

**Nhiệm vụ:** Viết các hàm riêng biệt cho từng phép tính.

**Khái niệm học:** Sử dụng function để tái sử dụng code, nhận tham số và trả về kết quả.`,
    starterCode: `# TODO: Viết hàm cộng(a, b) trả về a + b
def cộng(a, b):
    pass

# TODO: Viết hàm trừ(a, b) trả về a - b
def trừ(a, b):
    pass

# TODO: Viết hàm nhân(a, b) trả về a * b
def nhân(a, b):
    pass

# Test các hàm
a = 10
b = 5
print(f"{a} + {b} = {cộng(a, b)}")
print(f"{a} - {b} = {trừ(a, b)}")
print(f"{a} * {b} = {nhân(a, b)}")
`,
    solution: `def cộng(a, b):
    return a + b

def trừ(a, b):
    return a - b

def nhân(a, b):
    return a * b

def chia(a, b):
    if b == 0:
        return "Không thể chia cho 0"
    return a / b

a = 10
b = 5
print(f"{a} + {b} = {cộng(a, b)}")
print(f"{a} - {b} = {trừ(a, b)}")
print(f"{a} * {b} = {nhân(a, b)}")
print(f"{a} / {b} = {chia(a, b)}")
`,
  },
  {
    id: 11,
    title: '📏 Tính Diện Tích Hình',
    concept: 'function - Hàm',
    description: `**Bài toán:** Viết hàm tính diện tích hình chữ nhật và hình tròn.

**Công thức:**
- Hình chữ nhật: dài × rộng
- Hình tròn: π × r² (π = 3.14)

**Khái niệm học:** Sử dụng function với nhiều tham số, import math.`,
    starterCode: `import math

# TODO: Viết hàm tính diện tích hình chữ nhật
def diện_tích_hcn(dài, rộng):
    pass

# TODO: Viết hàm tính diện tích hình tròn
def diện_tích_tròn(bán_kính):
    pass

# Test
print(f"Diện tích HCN (5x3): {diện_tích_hcn(5, 3)}")
print(f"Diện tích tròn (r=4): {diện_tích_tròn(4):.2f}")
`,
    solution: `import math

def diện_tích_hcn(dài, rộng):
    return dài * rộng

def diện_tích_tròn(bán_kính):
    return math.pi * bán_kính ** 2

print(f"Diện tích HCN (5x3): {diện_tích_hcn(5, 3)}")
print(f"Diện tích tròn (r=4): {diện_tích_tròn(4):.2f}")
`,
  },

  // STRING OPERATIONS - Xử lý chuỗi
  {
    id: 12,
    title: '📝 Đếm Từ Trong Câu',
    concept: 'string - Chuỗi',
    description: `**Bài toán:** Nhập một câu và đếm số từ trong câu.

**Nhiệm vụ:** Dùng split() để tách câu thành các từ, đếm số từ.

**Khái niệm học:** Sử dụng các phương thức của string: split(), len(), strip().`,
    starterCode: `câu = input("Nhập một câu: ")

# TODO: Tách câu thành các từ
# Dùng split() để tách theo khoảng trắng
# Đếm số từ

số_từ = 0
print(f"Số từ trong câu: {số_từ}")
`,
    solution: `câu = input("Nhập một câu: ")

từ = câu.split()
số_từ = len(từ)

print(f"Số từ trong câu: {số_từ}")
print(f"Các từ: {từ}")
`,
  },
  {
    id: 13,
    title: '🔤 Kiểm Tra Mật Khẩu',
    concept: 'string - Chuỗi',
    description: `**Bài toán:** Kiểm tra mật khẩu có đủ mạnh không:
- Ít nhất 8 ký tự
- Có chữ hoa và chữ thường
- Có số

**Khái niệm học:** Sử dụng các phương thức string: isupper(), islower(), isdigit().`,
    starterCode: `mật_khẩu = input("Nhập mật khẩu: ")

# TODO: Kiểm tra mật khẩu
# - Độ dài >= 8
# - Có chữ hoa
# - Có chữ thường  
# - Có số

có_chữ_hoa = False
có_chữ_thường = False
có_số = False

# Dùng for loop để kiểm tra từng ký tự
for ký_tự in mật_khẩu:
    pass

mạnh = len(mật_khẩu) >= 8 and có_chữ_hoa and có_chữ_thường and có_số

if mạnh:
    print("Mật khẩu mạnh!")
else:
    print("Mật khẩu yếu!")
`,
    solution: `mật_khẩu = input("Nhập mật khẩu: ")

có_chữ_hoa = False
có_chữ_thường = False
có_số = False

for ký_tự in mật_khẩu:
    if ký_tự.isupper():
        có_chữ_hoa = True
    elif ký_tự.islower():
        có_chữ_thường = True
    elif ký_tự.isdigit():
        có_số = True

mạnh = len(mật_khẩu) >= 8 and có_chữ_hoa and có_chữ_thường and có_số

if mạnh:
    print("Mật khẩu mạnh!")
else:
    print("Mật khẩu yếu! Cần: >=8 ký tự, có chữ hoa, chữ thường và số")
`,
  },

  // WHILE LOOP
  {
    id: 14,
    title: '🎯 Đoán Số (Nâng Cao)',
    concept: 'while loop - Vòng lặp',
    description: `**Bài toán:** Game đoán số từ 1-100, máy tính sẽ gợi ý "lớn hơn" hoặc "nhỏ hơn".

**Nhiệm vụ:** Dùng while loop để lặp cho đến khi đoán đúng.

**Khái niệm học:** Sử dụng while loop với điều kiện, break để thoát vòng lặp.`,
    starterCode: `import random

số_bí_mật = random.randint(1, 100)
số_lần_đoán = 0

# TODO: Dùng while True để lặp vô hạn
# Nhập số đoán
# Tăng số_lần_đoán
# So sánh và in gợi ý
# Nếu đúng thì break

print(f"Chúc mừng! Bạn đoán đúng sau {số_lần_đoán} lần!")
`,
    solution: `import random

số_bí_mật = random.randint(1, 100)
số_lần_đoán = 0

while True:
    đoán = int(input("Đoán số (1-100): "))
    số_lần_đoán += 1
    
    if đoán == số_bí_mật:
        print(f"Chúc mừng! Bạn đoán đúng sau {số_lần_đoán} lần!")
        break
    elif đoán < số_bí_mật:
        print("Số lớn hơn!")
    else:
        print("Số nhỏ hơn!")
`,
  },
];

