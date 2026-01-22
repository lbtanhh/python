/**
 * Dữ liệu Bài Tập - Cấu trúc theo chương trình học
 * Mỗi bài tập có: id, part (PHẦN 1-4), title, description, starterCode, hiddenTests
 * hiddenTests: array of {input: string, output: string}
 */

export const exercises = [
  // ========== PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN) ==========
  {
    id: 1,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '1️⃣ In ra màn hình',
    title: 'In ra dòng chữ: Hello Python',
    description: `**Yêu cầu:**
In ra màn hình dòng chữ: Hello Python

**Mục tiêu:** Làm quen với hàm print()

**Ví dụ:**
- Output: Hello Python`,
    starterCode: `# TODO: In ra "Hello Python"
`,
    hiddenTests: [
      { input: '', output: 'Hello Python' },
    ],
  },
  {
    id: 2,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '1️⃣ In ra màn hình',
    title: 'In ra tên và lớp của em',
    description: `**Yêu cầu:**
In ra tên và lớp của bạn (ví dụ: "Nguyễn Văn A - Lớp 10A1")

**Mục tiêu:** print(), tư duy trình tự

**Ví dụ:**
- Output: Nguyễn Văn A - Lớp 10A1`,
    starterCode: `# TODO: In ra tên và lớp của bạn
`,
    hiddenTests: [
      { input: '', output: 'Nguyễn Văn A - Lớp 10A1' },
    ],
  },
  {
    id: 3,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '1️⃣ In ra màn hình',
    title: 'In ra tổng của 2 số cho trước',
    description: `**Yêu cầu:**
Cho trước 2 số a = 5 và b = 3. In ra tổng của chúng.

**Mục tiêu:** print(), tư duy trình tự

**Ví dụ:**
- Output: 8`,
    starterCode: `a = 5
b = 3
# TODO: In ra tổng a và b
`,
    hiddenTests: [
      { input: '', output: '8' },
    ],
  },
  {
    id: 4,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '2️⃣ Nhập dữ liệu',
    title: 'Nhập tên, in ra: Xin chào <tên>',
    description: `**Yêu cầu:**
Nhập tên của bạn, sau đó in ra: "Xin chào <tên>"

**Mục tiêu:** input(), xử lý chuỗi

**Ví dụ:**
- Input: An
- Output: Xin chào An`,
    starterCode: `# TODO: Nhập tên và in ra "Xin chào <tên>"
`,
    hiddenTests: [
      { input: 'An', output: 'Xin chào An' },
      { input: 'Bình', output: 'Xin chào Bình' },
      { input: 'Hoa', output: 'Xin chào Hoa' },
    ],
  },
  {
    id: 5,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '2️⃣ Nhập dữ liệu',
    title: 'Nhập 2 số, in ra tổng',
    description: `**Yêu cầu:**
Nhập vào 2 số nguyên, sau đó in ra tổng của chúng.

**Mục tiêu:** input(), ép kiểu int

**Ví dụ:**
- Input: 5, 3
- Output: 8`,
    starterCode: `# TODO: Nhập 2 số và in ra tổng
`,
    hiddenTests: [
      { input: '5\n3', output: '8' },
      { input: '10\n20', output: '30' },
      { input: '-5\n3', output: '-2' },
    ],
  },
  {
    id: 6,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '2️⃣ Nhập dữ liệu',
    title: 'Nhập chiều dài, chiều rộng → tính diện tích hình chữ nhật',
    description: `**Yêu cầu:**
Nhập chiều dài và chiều rộng của hình chữ nhật, tính và in ra diện tích.

**Mục tiêu:** input(), ép kiểu int, float

**Ví dụ:**
- Input: 5.5, 3.2
- Output: 17.6`,
    starterCode: `# TODO: Nhập chiều dài, chiều rộng và tính diện tích
`,
    hiddenTests: [
      { input: '5.5\n3.2', output: '17.6' },
      { input: '10\n5', output: '50.0' },
      { input: '7.5\n4.2', output: '31.5' },
    ],
  },
  {
    id: 7,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '3️⃣ If – else',
    title: 'Nhập điểm → in ra Đậu / Rớt',
    description: `**Yêu cầu:**
Nhập điểm số (thang điểm 10). Nếu điểm >= 5 thì in "Đậu", ngược lại in "Rớt".

**Mục tiêu:** rẽ nhánh, điều kiện

**Ví dụ:**
- Input: 7 → Output: Đậu
- Input: 4 → Output: Rớt`,
    starterCode: `diem = float(input("Nhập điểm: "))
# TODO: Kiểm tra điểm và in ra "Đậu" hoặc "Rớt"
`,
    hiddenTests: [
      { input: '7', output: 'Đậu' },
      { input: '4', output: 'Rớt' },
      { input: '5', output: 'Đậu' },
      { input: '4.9', output: 'Rớt' },
    ],
  },
  {
    id: 8,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '3️⃣ If – else',
    title: 'Nhập số → kiểm tra chẵn / lẻ',
    description: `**Yêu cầu:**
Nhập một số nguyên. In ra "chẵn" nếu số đó là số chẵn, "lẻ" nếu là số lẻ.

**Mục tiêu:** rẽ nhánh, điều kiện

**Ví dụ:**
- Input: 4 → Output: chẵn
- Input: 5 → Output: lẻ`,
    starterCode: `n = int(input("Nhập số: "))
# TODO: Kiểm tra n là chẵn hay lẻ
`,
    hiddenTests: [
      { input: '4', output: 'chẵn' },
      { input: '5', output: 'lẻ' },
      { input: '0', output: 'chẵn' },
      { input: '-3', output: 'lẻ' },
    ],
  },
  {
    id: 9,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '3️⃣ If – else',
    title: 'Nhập tuổi → kiểm tra đủ tuổi xem phim',
    description: `**Yêu cầu:**
Nhập tuổi. Nếu tuổi >= 18 thì in "Đủ tuổi xem phim", ngược lại in "Chưa đủ tuổi".

**Mục tiêu:** rẽ nhánh, điều kiện

**Ví dụ:**
- Input: 20 → Output: Đủ tuổi xem phim
- Input: 15 → Output: Chưa đủ tuổi`,
    starterCode: `tuoi = int(input("Nhập tuổi: "))
# TODO: Kiểm tra tuổi và in ra kết quả
`,
    hiddenTests: [
      { input: '20', output: 'Đủ tuổi xem phim' },
      { input: '15', output: 'Chưa đủ tuổi' },
      { input: '18', output: 'Đủ tuổi xem phim' },
    ],
  },
  {
    id: 10,
    part: 1,
    partTitle: 'PHẦN 1 – LÀM QUEN PYTHON (LỚP 10 – CƠ BẢN)',
    section: '3️⃣ If – else',
    title: 'Nhập 3 số → tìm số lớn nhất',
    description: `**Yêu cầu:**
Nhập 3 số nguyên. Tìm và in ra số lớn nhất trong 3 số đó.

**Mục tiêu:** rẽ nhánh, điều kiện, tư duy logic

**Ví dụ:**
- Input: 5, 8, 3 → Output: 8
- Input: 10, 10, 5 → Output: 10`,
    starterCode: `a = int(input("Nhập số thứ nhất: "))
b = int(input("Nhập số thứ hai: "))
c = int(input("Nhập số thứ ba: "))
# TODO: Tìm số lớn nhất và in ra
`,
    hiddenTests: [
      { input: '5\n8\n3', output: '8' },
      { input: '10\n10\n5', output: '10' },
      { input: '1\n2\n3', output: '3' },
    ],
  },

  // ========== PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11) ==========
  {
    id: 11,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '4️⃣ Vòng lặp for',
    title: 'In các số từ 1 đến n',
    description: `**Yêu cầu:**
Nhập số nguyên n. In ra các số từ 1 đến n (mỗi số trên một dòng).

**Mục tiêu:** Vòng lặp for, range()

**Ví dụ:**
- Input: 5
- Output:
1
2
3
4
5`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: In các số từ 1 đến n
`,
    hiddenTests: [
      { input: '5', output: '1\n2\n3\n4\n5' },
      { input: '3', output: '1\n2\n3' },
      { input: '10', output: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10' },
    ],
  },
  {
    id: 12,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '4️⃣ Vòng lặp for',
    title: 'Tính tổng từ 1 đến n',
    description: `**Yêu cầu:**
Nhập số nguyên n. Tính và in ra tổng các số từ 1 đến n.

**Mục tiêu:** Vòng lặp for, tích lũy giá trị

**Ví dụ:**
- Input: 5 → Output: 15 (vì 1+2+3+4+5 = 15)
- Input: 10 → Output: 55`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Tính tổng từ 1 đến n
`,
    hiddenTests: [
      { input: '5', output: '15' },
      { input: '10', output: '55' },
      { input: '3', output: '6' },
    ],
  },
  {
    id: 13,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '4️⃣ Vòng lặp for',
    title: 'In bảng cửu chương của n',
    description: `**Yêu cầu:**
Nhập số nguyên n (1 <= n <= 9). In ra bảng cửu chương của n.

**Mục tiêu:** Vòng lặp for, format output

**Ví dụ:**
- Input: 5
- Output:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: In bảng cửu chương của n
`,
    hiddenTests: [
      { input: '5', output: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50' },
      { input: '3', output: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30' },
    ],
  },
  {
    id: 14,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '4️⃣ Vòng lặp for',
    title: 'Đếm số chẵn từ 1 đến n',
    description: `**Yêu cầu:**
Nhập số nguyên n. Đếm và in ra số lượng các số chẵn từ 1 đến n.

**Mục tiêu:** Vòng lặp for, điều kiện trong vòng lặp

**Ví dụ:**
- Input: 10 → Output: 5 (các số chẵn: 2, 4, 6, 8, 10)
- Input: 5 → Output: 2 (các số chẵn: 2, 4)`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Đếm số chẵn từ 1 đến n
`,
    hiddenTests: [
      { input: '10', output: '5' },
      { input: '5', output: '2' },
      { input: '20', output: '10' },
    ],
  },
  {
    id: 15,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '5️⃣ Vòng lặp while',
    title: 'Nhập số cho đến khi nhập số 0 thì dừng',
    description: `**Yêu cầu:**
Nhập các số nguyên cho đến khi nhập số 0 thì dừng. In ra tổng các số đã nhập (không tính số 0).

**Mục tiêu:** Vòng lặp while, điều kiện dừng

**Ví dụ:**
- Input: 5, 3, 2, 0 → Output: 10`,
    starterCode: `# TODO: Nhập số cho đến khi nhập 0, tính tổng
`,
    hiddenTests: [
      { input: '5\n3\n2\n0', output: '10' },
      { input: '10\n20\n0', output: '30' },
      { input: '0', output: '0' },
    ],
  },
  {
    id: 16,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '5️⃣ Vòng lặp while',
    title: 'Nhập mật khẩu cho đến khi đúng',
    description: `**Yêu cầu:**
Mật khẩu đúng là "python123". Nhập mật khẩu cho đến khi đúng thì in "Đăng nhập thành công!".

**Mục tiêu:** Vòng lặp while, điều kiện dừng

**Ví dụ:**
- Input: abc, 123, python123 → Output: Đăng nhập thành công!`,
    starterCode: `mat_khau_dung = "python123"
# TODO: Nhập mật khẩu cho đến khi đúng
`,
    hiddenTests: [
      { input: 'abc\n123\npython123', output: 'Đăng nhập thành công!' },
      { input: 'python123', output: 'Đăng nhập thành công!' },
    ],
  },
  {
    id: 17,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '5️⃣ Vòng lặp while',
    title: 'Đếm số chữ số của một số',
    description: `**Yêu cầu:**
Nhập một số nguyên dương. Đếm và in ra số lượng chữ số của số đó.

**Mục tiêu:** Vòng lặp while, phép chia nguyên

**Ví dụ:**
- Input: 123 → Output: 3
- Input: 1000 → Output: 4`,
    starterCode: `n = int(input("Nhập số: "))
# TODO: Đếm số chữ số của n
`,
    hiddenTests: [
      { input: '123', output: '3' },
      { input: '1000', output: '4' },
      { input: '5', output: '1' },
    ],
  },
  {
    id: 18,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '6️⃣ Kết hợp if + loop',
    title: 'Đếm số chẵn, số lẻ trong dãy',
    description: `**Yêu cầu:**
Nhập số nguyên n, sau đó nhập n số nguyên. Đếm và in ra số lượng số chẵn và số lẻ.

**Mục tiêu:** tư duy thuật toán cơ bản, kết hợp if + loop

**Ví dụ:**
- Input: 5, 1, 2, 3, 4, 5
- Output: Số chẵn: 2, Số lẻ: 3`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Nhập n số và đếm số chẵn, số lẻ
`,
    hiddenTests: [
      { input: '5\n1\n2\n3\n4\n5', output: 'Số chẵn: 2, Số lẻ: 3' },
      { input: '3\n2\n4\n6', output: 'Số chẵn: 3, Số lẻ: 0' },
    ],
  },
  {
    id: 19,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '6️⃣ Kết hợp if + loop',
    title: 'Tìm số lớn nhất trong n số',
    description: `**Yêu cầu:**
Nhập số nguyên n, sau đó nhập n số nguyên. Tìm và in ra số lớn nhất.

**Mục tiêu:** tư duy thuật toán cơ bản, kết hợp if + loop

**Ví dụ:**
- Input: 5, 3, 8, 1, 9, 2
- Output: 9`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Nhập n số và tìm số lớn nhất
`,
    hiddenTests: [
      { input: '5\n3\n8\n1\n9\n2', output: '9' },
      { input: '3\n10\n5\n15', output: '15' },
    ],
  },
  {
    id: 20,
    part: 2,
    partTitle: 'PHẦN 2 – VÒNG LẶP & TƯ DUY (LỚP 10–11)',
    section: '6️⃣ Kết hợp if + loop',
    title: 'Kiểm tra số nguyên tố',
    description: `**Yêu cầu:**
Nhập một số nguyên dương n. Kiểm tra và in ra "Là số nguyên tố" hoặc "Không phải số nguyên tố".

**Mục tiêu:** tư duy thuật toán cơ bản, kết hợp if + loop

**Ví dụ:**
- Input: 7 → Output: Là số nguyên tố
- Input: 10 → Output: Không phải số nguyên tố`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Kiểm tra n có phải số nguyên tố không
`,
    hiddenTests: [
      { input: '7', output: 'Là số nguyên tố' },
      { input: '10', output: 'Không phải số nguyên tố' },
      { input: '2', output: 'Là số nguyên tố' },
      { input: '4', output: 'Không phải số nguyên tố' },
    ],
  },

  // ========== PHẦN 3 – LIST & CHUỖI (LỚP 11) ==========
  {
    id: 21,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '7️⃣ List',
    title: 'Nhập n số → lưu vào list',
    description: `**Yêu cầu:**
Nhập số nguyên n, sau đó nhập n số nguyên và lưu vào list. In ra list đó.

**Mục tiêu:** List, append()

**Ví dụ:**
- Input: 3, 5, 8, 2
- Output: [5, 8, 2]`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Nhập n số và lưu vào list, in ra list
`,
    hiddenTests: [
      { input: '3\n5\n8\n2', output: '[5, 8, 2]' },
      { input: '2\n10\n20', output: '[10, 20]' },
    ],
  },
  {
    id: 22,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '7️⃣ List',
    title: 'Tính tổng các phần tử trong list',
    description: `**Yêu cầu:**
Nhập số nguyên n, sau đó nhập n số nguyên. Tính và in ra tổng các phần tử.

**Mục tiêu:** List, vòng lặp với list

**Ví dụ:**
- Input: 3, 5, 8, 2
- Output: 15`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Nhập n số, tính tổng và in ra
`,
    hiddenTests: [
      { input: '3\n5\n8\n2', output: '15' },
      { input: '4\n1\n2\n3\n4', output: '10' },
    ],
  },
  {
    id: 23,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '7️⃣ List',
    title: 'Tìm phần tử lớn nhất',
    description: `**Yêu cầu:**
Nhập số nguyên n, sau đó nhập n số nguyên. Tìm và in ra phần tử lớn nhất.

**Mục tiêu:** List, tìm max

**Ví dụ:**
- Input: 3, 5, 8, 2
- Output: 8`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Nhập n số, tìm max và in ra
`,
    hiddenTests: [
      { input: '3\n5\n8\n2', output: '8' },
      { input: '4\n10\n5\n15\n3', output: '15' },
    ],
  },
  {
    id: 24,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '7️⃣ List',
    title: 'Đếm số phần tử chẵn',
    description: `**Yêu cầu:**
Nhập số nguyên n, sau đó nhập n số nguyên. Đếm và in ra số lượng phần tử chẵn.

**Mục tiêu:** List, điều kiện với list

**Ví dụ:**
- Input: 5, 1, 2, 3, 4, 5
- Output: 2`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Nhập n số, đếm số phần tử chẵn
`,
    hiddenTests: [
      { input: '5\n1\n2\n3\n4\n5', output: '2' },
      { input: '3\n2\n4\n6', output: '3' },
    ],
  },
  {
    id: 25,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '7️⃣ List',
    title: 'Sắp xếp list tăng dần (dùng sort)',
    description: `**Yêu cầu:**
Nhập số nguyên n, sau đó nhập n số nguyên. Sắp xếp list tăng dần và in ra.

**Mục tiêu:** List, sort()

**Ví dụ:**
- Input: 4, 3, 1, 4, 2
- Output: [1, 2, 3, 4]`,
    starterCode: `n = int(input("Nhập n: "))
# TODO: Nhập n số, sắp xếp tăng dần và in ra
`,
    hiddenTests: [
      { input: '4\n3\n1\n4\n2', output: '[1, 2, 3, 4]' },
      { input: '3\n5\n2\n8', output: '[2, 5, 8]' },
    ],
  },
  {
    id: 26,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '8️⃣ Chuỗi (string)',
    title: 'Đếm số ký tự trong chuỗi',
    description: `**Yêu cầu:**
Nhập một chuỗi. Đếm và in ra số lượng ký tự trong chuỗi đó.

**Mục tiêu:** String, len()

**Ví dụ:**
- Input: Hello → Output: 5
- Input: Python → Output: 6`,
    starterCode: `s = input("Nhập chuỗi: ")
# TODO: Đếm số ký tự và in ra
`,
    hiddenTests: [
      { input: 'Hello', output: '5' },
      { input: 'Python', output: '6' },
      { input: 'ABC', output: '3' },
    ],
  },
  {
    id: 27,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '8️⃣ Chuỗi (string)',
    title: 'Đếm số chữ cái trong chuỗi',
    description: `**Yêu cầu:**
Nhập một chuỗi. Đếm và in ra số lượng chữ cái (a-z, A-Z) trong chuỗi đó.

**Mục tiêu:** String, isalpha()

**Ví dụ:**
- Input: Hello123 → Output: 5
- Input: Python! → Output: 6`,
    starterCode: `s = input("Nhập chuỗi: ")
# TODO: Đếm số chữ cái và in ra
`,
    hiddenTests: [
      { input: 'Hello123', output: '5' },
      { input: 'Python!', output: '6' },
      { input: 'ABC123!@#', output: '3' },
    ],
  },
  {
    id: 28,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '8️⃣ Chuỗi (string)',
    title: 'Kiểm tra chuỗi đối xứng',
    description: `**Yêu cầu:**
Nhập một chuỗi. Kiểm tra và in ra "Đối xứng" nếu chuỗi đọc xuôi và ngược giống nhau, ngược lại in "Không đối xứng".

**Mục tiêu:** String, slicing

**Ví dụ:**
- Input: aba → Output: Đối xứng
- Input: abc → Output: Không đối xứng`,
    starterCode: `s = input("Nhập chuỗi: ")
# TODO: Kiểm tra chuỗi đối xứng
`,
    hiddenTests: [
      { input: 'aba', output: 'Đối xứng' },
      { input: 'abc', output: 'Không đối xứng' },
      { input: 'a', output: 'Đối xứng' },
    ],
  },
  {
    id: 29,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '8️⃣ Chuỗi (string)',
    title: 'Đếm số từ trong câu',
    description: `**Yêu cầu:**
Nhập một câu. Đếm và in ra số lượng từ trong câu đó (các từ cách nhau bởi khoảng trắng).

**Mục tiêu:** String, split()

**Ví dụ:**
- Input: Python là ngôn ngữ lập trình → Output: 5
- Input: Hello World → Output: 2`,
    starterCode: `s = input("Nhập câu: ")
# TODO: Đếm số từ và in ra
`,
    hiddenTests: [
      { input: 'Python là ngôn ngữ lập trình', output: '5' },
      { input: 'Hello World', output: '2' },
      { input: 'Xin chào', output: '2' },
    ],
  },
  {
    id: 30,
    part: 3,
    partTitle: 'PHẦN 3 – LIST & CHUỖI (LỚP 11)',
    section: '8️⃣ Chuỗi (string)',
    title: 'Viết hoa chữ cái đầu mỗi từ',
    description: `**Yêu cầu:**
Nhập một câu. Viết hoa chữ cái đầu mỗi từ và in ra.

**Mục tiêu:** String, title()

**Ví dụ:**
- Input: python là ngôn ngữ lập trình → Output: Python Là Ngôn Ngữ Lập Trình
- Input: hello world → Output: Hello World`,
    starterCode: `s = input("Nhập câu: ")
# TODO: Viết hoa chữ cái đầu mỗi từ và in ra
`,
    hiddenTests: [
      { input: 'python là ngôn ngữ lập trình', output: 'Python Là Ngôn Ngữ Lập Trình' },
      { input: 'hello world', output: 'Hello World' },
    ],
  },

  // ========== PHẦN 4 – HÀM & ỨNG DỤNG (LỚP 11–12) ==========
  {
    id: 31,
    part: 4,
    partTitle: 'PHẦN 4 – HÀM & ỨNG DỤNG (LỚP 11–12)',
    section: '9️⃣ Hàm',
    title: 'Viết hàm tính tổng 2 số',
    description: `**Yêu cầu:**
Viết hàm tinh_tong(a, b) nhận vào 2 số và trả về tổng của chúng. Sau đó nhập 2 số và in ra kết quả.

**Mục tiêu:** chia nhỏ bài toán, tư duy hàm

**Ví dụ:**
- Input: 5, 3 → Output: 8`,
    starterCode: `# TODO: Viết hàm tinh_tong(a, b) và sử dụng nó
`,
    hiddenTests: [
      { input: '5\n3', output: '8' },
      { input: '10\n20', output: '30' },
    ],
  },
  {
    id: 32,
    part: 4,
    partTitle: 'PHẦN 4 – HÀM & ỨNG DỤNG (LỚP 11–12)',
    section: '9️⃣ Hàm',
    title: 'Viết hàm kiểm tra số chẵn',
    description: `**Yêu cầu:**
Viết hàm la_so_chan(n) nhận vào một số và trả về True nếu số đó chẵn, False nếu lẻ. Sau đó nhập một số và in ra kết quả.

**Mục tiêu:** chia nhỏ bài toán, tư duy hàm

**Ví dụ:**
- Input: 4 → Output: True
- Input: 5 → Output: False`,
    starterCode: `# TODO: Viết hàm la_so_chan(n) và sử dụng nó
`,
    hiddenTests: [
      { input: '4', output: 'True' },
      { input: '5', output: 'False' },
    ],
  },
  {
    id: 33,
    part: 4,
    partTitle: 'PHẦN 4 – HÀM & ỨNG DỤNG (LỚP 11–12)',
    section: '9️⃣ Hàm',
    title: 'Viết hàm tìm max của list',
    description: `**Yêu cầu:**
Viết hàm tim_max(lst) nhận vào một list số và trả về số lớn nhất. Sau đó nhập n số, tìm max và in ra.

**Mục tiêu:** chia nhỏ bài toán, tư duy hàm

**Ví dụ:**
- Input: 3, 5, 8, 2 → Output: 8`,
    starterCode: `# TODO: Viết hàm tim_max(lst) và sử dụng nó
`,
    hiddenTests: [
      { input: '3\n5\n8\n2', output: '8' },
      { input: '4\n10\n5\n15\n3', output: '15' },
    ],
  },
  {
    id: 34,
    part: 4,
    partTitle: 'PHẦN 4 – HÀM & ỨNG DỤNG (LỚP 11–12)',
    section: '9️⃣ Hàm',
    title: 'Viết hàm kiểm tra số nguyên tố',
    description: `**Yêu cầu:**
Viết hàm la_so_nguyen_to(n) nhận vào một số và trả về True nếu là số nguyên tố, False nếu không. Sau đó nhập một số và in ra kết quả.

**Mục tiêu:** chia nhỏ bài toán, tư duy hàm

**Ví dụ:**
- Input: 7 → Output: True
- Input: 10 → Output: False`,
    starterCode: `# TODO: Viết hàm la_so_nguyen_to(n) và sử dụng nó
`,
    hiddenTests: [
      { input: '7', output: 'True' },
      { input: '10', output: 'False' },
      { input: '2', output: 'True' },
    ],
  },
  {
    id: 35,
    part: 4,
    partTitle: 'PHẦN 4 – HÀM & ỨNG DỤNG (LỚP 11–12)',
    section: '🔁 HÀM + LOOP',
    title: 'Viết hàm in bảng cửu chương',
    description: `**Yêu cầu:**
Viết hàm in_bang_cuu_chuong(n) nhận vào số n và in ra bảng cửu chương của n. Sau đó nhập n và gọi hàm.

**Mục tiêu:** Hàm + Loop

**Ví dụ:**
- Input: 5
- Output: Bảng cửu chương 5 (từ 5x1 đến 5x10)`,
    starterCode: `# TODO: Viết hàm in_bang_cuu_chuong(n) và sử dụng nó
`,
    hiddenTests: [
      { input: '5', output: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50' },
    ],
  },
  {
    id: 36,
    part: 4,
    partTitle: 'PHẦN 4 – HÀM & ỨNG DỤNG (LỚP 11–12)',
    section: '🔁 HÀM + LOOP',
    title: 'Viết hàm tính giai thừa',
    description: `**Yêu cầu:**
Viết hàm tinh_giai_thua(n) nhận vào số n và trả về n! (giai thừa). Sau đó nhập n và in ra kết quả.

**Mục tiêu:** Hàm + Loop, đệ quy hoặc vòng lặp

**Ví dụ:**
- Input: 5 → Output: 120
- Input: 3 → Output: 6`,
    starterCode: `# TODO: Viết hàm tinh_giai_thua(n) và sử dụng nó
`,
    hiddenTests: [
      { input: '5', output: '120' },
      { input: '3', output: '6' },
      { input: '4', output: '24' },
    ],
  },
  {
    id: 37,
    part: 4,
    partTitle: 'PHẦN 4 – HÀM & ỨNG DỤNG (LỚP 11–12)',
    section: '🔁 HÀM + LOOP',
    title: 'Viết hàm đếm chữ số',
    description: `**Yêu cầu:**
Viết hàm dem_chu_so(n) nhận vào một số nguyên dương và trả về số lượng chữ số. Sau đó nhập một số và in ra kết quả.

**Mục tiêu:** Hàm + Loop

**Ví dụ:**
- Input: 123 → Output: 3
- Input: 1000 → Output: 4`,
    starterCode: `# TODO: Viết hàm dem_chu_so(n) và sử dụng nó
`,
    hiddenTests: [
      { input: '123', output: '3' },
      { input: '1000', output: '4' },
      { input: '5', output: '1' },
    ],
  },
];

// Helper functions để lấy danh sách theo phần
export const getParts = () => {
  const parts = [...new Set(exercises.map(ex => ex.part))].sort();
  return parts.map(part => {
    const firstExercise = exercises.find(ex => ex.part === part);
    return {
      part,
      title: firstExercise.partTitle,
    };
  });
};

export const getSectionsByPart = (part) => {
  const sections = [...new Set(
    exercises.filter(ex => ex.part === part).map(ex => ex.section)
  )];
  return sections;
};

export const getExercisesByPartAndSection = (part, section) => {
  return exercises.filter(ex => ex.part === part && ex.section === section);
};
