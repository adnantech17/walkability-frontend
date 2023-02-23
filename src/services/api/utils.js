export function convertToFormData(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    if (data[key] === undefined) continue;
    if (Array.isArray(data[key]) && data[key][0] instanceof File) {
      (data[key]).forEach(i => (formData.append(key, i)));
      continue;
    }
    formData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key])
  }
  return formData
}