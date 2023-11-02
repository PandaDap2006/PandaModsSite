export interface CurseforgeSearchResults {
	data: Daum[]
	pagination: Pagination
}

export interface Daum {
	id: number
	gameId: number
	name: string
	slug: string
	links: Links
	summary: string
	status: number
	downloadCount: number
	isFeatured: boolean
	primaryCategoryId: number
	categories: Category[]
	classId: number
	authors: Author[]
	logo: Logo
	screenshots: Screenshot[]
	mainFileId: number
	latestFiles: LatestFile[]
	latestFilesIndexes: LatestFilesIndex[]
	latestEarlyAccessFilesIndexes: LatestEarlyAccessFilesIndex[]
	dateCreated: string
	dateModified: string
	dateReleased: string
	allowModDistribution: boolean
	gamePopularityRank: number
	isAvailable: boolean
	thumbsUpCount: number
}

export interface Links {
	websiteUrl: string
	wikiUrl: string
	issuesUrl: string
	sourceUrl: string
}

export interface Category {
	id: number
	gameId: number
	name: string
	slug: string
	url: string
	iconUrl: string
	dateModified: string
	isClass: boolean
	classId: number
	parentCategoryId: number
	displayIndex: number
}

export interface Author {
	id: number
	name: string
	url: string
}

export interface Logo {
	id: number
	modId: number
	title: string
	description: string
	thumbnailUrl: string
	url: string
}

export interface Screenshot {
	id: number
	modId: number
	title: string
	description: string
	thumbnailUrl: string
	url: string
}

export interface LatestFile {
	id: number
	gameId: number
	modId: number
	isAvailable: boolean
	displayName: string
	fileName: string
	releaseType: number
	fileStatus: number
	hashes: Hash[]
	fileDate: string
	fileLength: number
	downloadCount: number
	fileSizeOnDisk: number
	downloadUrl: string
	gameVersions: string[]
	sortableGameVersions: SortableGameVersion[]
	dependencies: Dependency[]
	exposeAsAlternative: boolean
	parentProjectFileId: number
	alternateFileId: number
	isServerPack: boolean
	serverPackFileId: number
	isEarlyAccessContent: boolean
	earlyAccessEndDate: string
	fileFingerprint: number
	modules: Module[]
}

export interface Hash {
	value: string
	algo: number
}

export interface SortableGameVersion {
	gameVersionName: string
	gameVersionPadded: string
	gameVersion: string
	gameVersionReleaseDate: string
	gameVersionTypeId: number
}

export interface Dependency {
	modId: number
	relationType: number
}

export interface Module {
	name: string
	fingerprint: number
}

export interface LatestFilesIndex {
	gameVersion: string
	fileId: number
	filename: string
	releaseType: number
	gameVersionTypeId: number
	modLoader: number
}

export interface LatestEarlyAccessFilesIndex {
	gameVersion: string
	fileId: number
	filename: string
	releaseType: number
	gameVersionTypeId: number
	modLoader: number
}

export interface Pagination {
	index: number
	pageSize: number
	resultCount: number
	totalCount: number
}
