export type Tab = "USAGE" | "CONSULT";

export interface Category {
  categoryID: string;
  name: string;
}

export interface FAQ {
  id: number;
  answer: string;
  categoryName: string;
  question: string;
  subCategoryName: string;
}
