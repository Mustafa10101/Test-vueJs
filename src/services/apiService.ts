async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Ошибка при запросе к ${url}: ${response.statusText}`)
  }
  return response.json() as Promise<T>
}

export { fetchData }
