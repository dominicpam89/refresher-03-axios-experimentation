// Address coordinates
export type Coordinates = {
  lat: number;
  lng: number;
};

// Address (used in user address and company address)
export type Address = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
};

// Hair
export type Hair = {
  color: string;
  type: string;
};

// Bank
export type Bank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

// Company (includes its own address)
export type Company = {
  department: string;
  name: string;
  title: string;
  address: Address;
};

// Crypto
export type Crypto = {
  coin: string;
  wallet: string;
  network: string;
};

// Main User type
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: 'male' | 'female' | 'other'; // based on example "female"
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string; // ISO date format YYYY-M-D
  image: string; // URL or base64
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: 'admin' | 'moderator' | 'user';
};
