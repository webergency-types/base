type Required<K extends string, T> = {
    [key in K]: T;
};
type Optional<K extends string, T> = {
    [key in K]?: T;
};
type I18n<T> = {
    [key: string]: T;
};
type EntityID = string;
type MetaData<Meta extends Record<string, any> = any, Data extends Record<string, any> = any> = {
    meta: Meta;
    data: Data;
};

export type { EntityID, I18n, MetaData, Optional, Required };
