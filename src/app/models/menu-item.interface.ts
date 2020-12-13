export interface MenuItemInterface {
  id?: string,
  label: string,
  route?: string,
  icon?: string,
  children?: Array<MenuItemInterface>,
  closed?: boolean
}