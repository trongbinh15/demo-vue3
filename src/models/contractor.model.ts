type CompanyType = "PLC" | "LTD" | "Partnership" | "Sole Trader";

type PhoneNumber = {
  countryCode: string;
  number: string;
};

export type Contractor = {
  id: string;
  companyName: string;
  VATRegistrationsNumber: number;
  typeOfCompany: CompanyType;
  website: string;
  address: string;
  email: string;
  country: string;
  phone: PhoneNumber;
};
