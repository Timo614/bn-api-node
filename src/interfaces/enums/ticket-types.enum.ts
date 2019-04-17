export enum SoldOutBehavior {
	SHOW_SOLD_OUT = "ShowSoldOut",
	HIDE = "Hide"
}

export const SOLD_OUT_BEHAVIOR = {
	[SoldOutBehavior.SHOW_SOLD_OUT]: "Show Sold Out",
	[SoldOutBehavior.HIDE]: "Hide"
};

export enum Visibility {
	ALWAYS = "Always",
	WHEN_AVAILABLE = "WhenAvailable",
	HIDDEN = "Hidden"
}

export const VISIBILITY = {
	[Visibility.ALWAYS]: "Always Visible",
	[Visibility.WHEN_AVAILABLE]: "Only When Available",
	[Visibility.HIDDEN]: "Hidden (Promo/Hold Code Required)"
};
