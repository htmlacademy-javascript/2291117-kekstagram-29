function checkStringLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkStringLength('sdgcvsdc+svgdhvcghd', 20);


function isPalindrome (string) {
  const normalizeString = string.replaceAll(' ','').toLowerCase();
  for (let i = 0; i < normalizeString.length / 2; i++) {
    if (normalizeString[i] !== normalizeString[normalizeString.length - 1 - i]) {
      return 'Это не палиндром';
    }
    return 'Это палиндром';
  }
}

isPalindrome ('сердце');

