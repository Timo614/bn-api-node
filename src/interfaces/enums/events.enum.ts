export enum OverrideStatus {
	PURCHASE_TICKETS = "PurchaseTickets",
	SOLD_OUT = "SoldOut",
	ON_SALE_SOON = "OnSaleSoon",
	TICKETS_AT_THE_DOOR = "TicketsAtTheDoor",
	FREE = "Free",
	RESCHEDULED = "Rescheduled",
	CANCELLED = "Cancelled",
	OFF_SALE = "OffSale",
	ENDED = "Ended",
}

export const OVERRIDE_STATUS_STRING = {
	[OverrideStatus.PURCHASE_TICKETS]: "Purchase Tickets",
	[OverrideStatus.SOLD_OUT]: "Sold Out",
	[OverrideStatus.ON_SALE_SOON]: "On Sale Soon",
	[OverrideStatus.TICKETS_AT_THE_DOOR]: "Tickets At The Door",
	[OverrideStatus.FREE]: "Free",
	[OverrideStatus.RESCHEDULED]: "Rescheduled",
	[OverrideStatus.CANCELLED]: "Cancelled",
	[OverrideStatus.OFF_SALE]: "Off-Sale",
	[OverrideStatus.ENDED]: "Ended"
};

export enum EventTypes {
	MUSIC = "Music",
	CONFERENCE = "Conference",
	ART = "Art",
	CULINARY = "Culinary",
	COMEDY = "Comedy",
	SPORTS = "Sports",
}

export const EVENT_TYPES_STRING = {
	[EventTypes.MUSIC]: "Music",
	[EventTypes.CONFERENCE]: "Conference",
	[EventTypes.ART]: "Art",
	[EventTypes.CULINARY]: "Culinary",
	[EventTypes.COMEDY]: "Comedy",
	[EventTypes.SPORTS]: "Sports",
};
