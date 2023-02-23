export const getData = (key) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }
};

export const setData = (key, data) => {
  const strData = typeof data === 'string' ? data : JSON.stringify(data);
  return localStorage.setItem(key, strData);
};

export const removeData = (key) => {
  localStorage.removeItem(key);
}
