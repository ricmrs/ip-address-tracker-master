import { IConnection } from "@/interfaces/IConnection"

const API_KEY = process.env.API_KEY

export async function loadGeoIP(ip: string) {
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`)
  const connection: IConnection = await res.json()

  return connection
}

export async function loadUserIP() {
  const res = await fetch('https://api.ipify.org?format=json')
  const ip = await res.json()

  return ip
}