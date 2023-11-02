import {ModrinthSearchResults} from "../api/model/ModrinthSearchResults.ts";
import {CurseforgeSearchResults} from "../api/model/CurseforgeSearchResults.ts";

export class Api {
	static async searchModrinth(query: string, searchPage: number, projectType: string, author: string) {
		const searchLimit = 50;
		const request = new Request("https://api.modrinth.com/v2/search" +
			"?" +
			(query ? "query=" + query + "&" : "") +
			"facets=[" +
			(projectType ? "[\"project_type:" + projectType + "\"]" : "") +
			(author ? ",[\"author:" + author + "\"]" : "") +
			"]" +
			"&limit=" + searchLimit +
			"&offset=" + searchPage * searchLimit, {
			method: "GET"
		})

		const response = await fetch(request);
		const body: ModrinthSearchResults = await response.json();

		return body;
	}

	static async searchCurseforge(query: string, searchPage: number, author: number) {
		const searchLimit = 50;
		const gameId = 432;
		const request = new Request("https://api.curse.tools/v1/cf/mods/search" +
			"?gameId=" + gameId +
			"&authorId=" + author +
			"&searchFilter=" + query +
			"&pageSize=" + searchLimit +
			"&index=" + searchPage * searchLimit, {
			method: "GET"
		})

		const response = await fetch(request);
		const body: CurseforgeSearchResults = await response.json();

		return body;
	}
}