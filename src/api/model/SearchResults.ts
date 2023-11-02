export interface SearchResults {
	results: SearchResult[],
	totalItems: number,
}

export interface SearchResult {
	title: string,
	slug: string,
	downloads: number,
	modrinthFollows: number,
	imageURL: string,
	latestVersion: string
}