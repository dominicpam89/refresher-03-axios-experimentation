export type ZipCodeType = string & { __brand: ZipCodeType };
export const isZipCodeType = function (val: unknown): val is ZipCodeType {
  return typeof val === 'string' && /^\d{5}(-\d{4})?$/.test(val);
};

export type AuthLoginFormType = {
  username: string;
  password: string;
};

export type AuthRegisterFormType = {
  email: string;
  username: AuthLoginFormType['username'];
  password: AuthLoginFormType['password'];
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  phoneNumber: string[];
};
