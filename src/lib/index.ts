// const API_URL = process.env.API_URL;
const API_URL = 'http://localhost:3000'

export async function loadIP(ip: string) {
  const res = await fetch(`${API_URL}/api/${ip}`)
  const data = await res.json()

  return data
}
