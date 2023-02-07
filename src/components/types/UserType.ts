// Do not nest objects in your interface

export type AddressType = {
    street: string,
    city: string
};

export type UserType = {
  name: string;
  age: number;
  address: AddressType
  admin: boolean;
};