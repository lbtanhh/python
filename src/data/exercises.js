/**
 * Dữ liệu Bài Tập
 * Mỗi bài tập có: id, title, description, starterCode, hiddenTests
 * hiddenTests: array of {input: string, output: string}
 */

export const exercises = [
  {
    id: 1,
    title: 'Tính Tổng 2 Số',
    description: `**Yêu cầu:** 
Viết chương trình nhập vào 2 số nguyên a và b, sau đó in ra tổng của chúng.

**Ví dụ:**
- Input: 5, 3
- Output: 8`,
    starterCode: `a = int(input())
b = int(input())
# TODO: in ra tổng a và b
`,
    hiddenTests: [
      { input: '1\n2', output: '3' },
      { input: '10\n20', output: '30' },
      { input: '-5\n3', output: '-2' },
      { input: '0\n0', output: '0' },
      { input: '100\n200', output: '300' },
    ],
  },
  {
    id: 2,
    title: 'Kiểm Tra Số Chẵn/Lẻ',
    description: `**Yêu cầu:**
Nhập vào một số nguyên n. In ra "chẵn" nếu số đó là số chẵn, "lẻ" nếu là số lẻ.

**Ví dụ:**
- Input: 4 → Output: chẵn
- Input: 5 → Output: lẻ`,
    starterCode: `n = int(input())
# TODO: Kiểm tra n là chẵn hay lẻ và in ra kết quả
`,
    hiddenTests: [
      { input: '4', output: 'chẵn' },
      { input: '5', output: 'lẻ' },
      { input: '0', output: 'chẵn' },
      { input: '-3', output: 'lẻ' },
      { input: '100', output: 'chẵn' },
    ],
  },
  {
    id: 3,
    title: 'Tính Giai Thừa',
    description: `**Yêu cầu:**
Nhập vào một số nguyên dương n (n <= 10). Tính và in ra n! (giai thừa của n).

**Công thức:** n! = 1 * 2 * 3 * ... * n

**Ví dụ:**
- Input: 5 → Output: 120
- Input: 3 → Output: 6`,
    starterCode: `n = int(input())
# TODO: Tính n! và in ra kết quả
`,
    hiddenTests: [
      { input: '1', output: '1' },
      { input: '3', output: '6' },
      { input: '5', output: '120' },
      { input: '4', output: '24' },
      { input: '6', output: '720' },
    ],
  },
];

