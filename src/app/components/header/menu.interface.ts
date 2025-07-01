export interface IMenuItems {
	id: number;
	name: string;
	url: string;
	active: boolean;
}

export interface IMenu extends IMenuItems {
	submenu?: IMenuItems;
}
