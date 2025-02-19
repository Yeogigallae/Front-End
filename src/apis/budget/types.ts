// budget-get
export type Assignment = {
  placeName: string;
  budgetType: string;
  recommendedAmount: number;
};

export type BudgetDay = {
  day: string;
  assignments: Assignment[];
};

export type BudgetResponse = {
  httpStatus: string;
  code: string;
  message: string;
  result: BudgetDay[];
};

export type BudgetIdResponse = {
  httpStatus: string;
  code: string;
  message: string;
  result: {
    budgetId: string;
  }[];
};

