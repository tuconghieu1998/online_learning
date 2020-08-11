export function formatPrice(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export const handleValidate = (string, regex) => {
  if (!string || string.length === 0) {
    return false;
  }
  const testString = string
    .normalize('NFC')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
  return regex.test(testString);
};
