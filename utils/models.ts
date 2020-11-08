export interface IDetails {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
  coordinates: [number, number];
}

export type TSubmit = (ip: string) => void;

export interface IRetData {
  data: IDetails;
  setIp: TSubmit;
}
