import { Category } from "./Category";

export type Expense = {
    id: number,
    title: string,
    notes: string,
    categories: Category[],
    total: number,
    created_at: string,
    updated_at: string
}