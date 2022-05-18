type CompanyType = "PLC" | "LTD" | "Partnership" | "Sole Trader";

export type Contractor = {
  id: string;
  companyName: string;
  VATRegistrationsNumber: string;
  typeOfCompany: CompanyType;
  website: string;
  address: string;
  email: string;
};
