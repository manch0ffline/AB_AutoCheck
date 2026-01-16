export type Service = {
  id: number;
  title: string;
  price: string;
  icon: string;
  description: string;
  includedServices: string[];
  guarantee?: string
  suitableFor?: string
};
