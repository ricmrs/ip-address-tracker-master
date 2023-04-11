export interface IConnection {
  ip: string;
  location: {
    country: string;
    region: string;
    lat: number;
    lng: number;
    timezone: string;
  },
  isp: string;
}