export const CONFIG = `CONFIG`
export const ENTRIES = `ENTRIES`
export const APPLY = `APPLY`
export const CREATE = `CREATE`
export const CHANGE = `CHANGE`

export interface IHash {
  [details: string]: string
}

export type EntryData = {
  uuid: string
  attrs: IHash
}

export type Services = {
  [details: string]: Service
}

export type ConfigState = {
  name: string
  title: string
}

export type Entry = {
  key: string
  data: EntryData
  reducer: (data: EntryData) => EntryData
}

export type EntriesState = {
  entries: Entry[]
}

export abstract class Service {}
