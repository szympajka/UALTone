const createCookie = (name, value, hours) => {
  let expires = '';

  if (hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }

  document.cookie = name + '=' + value + expires + '; path=/';
};

const readCookie = (name) => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const deleteCookie = (name) => {
  createCookie(name, '', -1);
};

export { createCookie, readCookie, deleteCookie };
