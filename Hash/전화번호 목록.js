function solution(phone_book) {
  const phoneMap = new Map();

  phone_book.forEach((number) => {
    phoneMap.set(number, true);
  });

  for (const phone of phone_book) {
    let prefix = "";
    for (const char of phone) {
      prefix += char;
      if (prefix !== phone && phoneMap.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}

////////////////

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}
