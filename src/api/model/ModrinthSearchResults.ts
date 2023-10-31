import {ModrinthSearchResult} from "./ModrinthSearchResult.ts";

export interface ModrinthSearchResults {
	hits: ModrinthSearchResult[];
	offset: number;
	limit: number;
	total_hits: number;
}