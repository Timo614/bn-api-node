export enum UserRole {
	ORG_MEMBER = "OrgMember",
	ORG_OWNER = "OrgOwner",
	ORG_ADMIN = "OrgAdmin",
	ORG_BOX_OFFICE = "OrgBoxOffice",
	DOOR_PERSON = "DoorPerson",
}

export const USER_ROLES_STRING = {
	[UserRole.ORG_OWNER]: "Owner",
	[UserRole.ORG_ADMIN]: "Admin",
	[UserRole.ORG_MEMBER]: "Member",
	[UserRole.ORG_BOX_OFFICE]: "Box Office",
	[UserRole.DOOR_PERSON]: "Door Person",
};