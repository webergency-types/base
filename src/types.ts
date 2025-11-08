export type Required<K extends string, T> = {[key in K]: T }
export type Optional<K extends string, T> = {[key in K]?: T }
export type I18n<T> = {[key: string]: T }

export type EntityID = string

export type MetaData
<
    Meta    extends Record<string, any> = any, 
    Data    extends Record<string, any> = any
>
=
{
    meta    : Meta
    data    : Data
}