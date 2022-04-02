export enum CategoryEnum {
    CATEGORY_GENERAL = "GENERAL",
    CATEGORY_GROCERIES = "GROCERIES",
    CATEGORY_EATING_OUT = "EATING OUT",
    CATEGORY_TRAVEL = "TRAVEL",
    CATEGORY_BILLS = "BILLS",
    CATEGORY_CHARITY = "CHARITY",
    CATEGORY_ENTERTAINMENT = "ENTERTAINMENT",
    CATEGORY_FAMILY = "FAMILY",
    CATEGORY_FINANCES = "FINANCES",
    CATEGORY_GIFTS = "GIFTS",
    CATEGORY_HOLIDAYS = "HOLIDAYS",
    CATEGORY_PERSONAL_CARE = "PERSONAL CARE",
    CATEGORY_SHOPPING = "SHOPPING"
}

export function getEnumKeyByEnumValue(myEnum: any, enumValue: number | string): string {
    let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : '';
}