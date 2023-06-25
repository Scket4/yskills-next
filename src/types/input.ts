export type TInputStatus =
  | 'success'
  | 'error'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'warning'
  | undefined

export type THelper = {
  text: string
  color: TInputStatus
}
