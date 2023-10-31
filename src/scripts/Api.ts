import {ModrinthSearchResults} from "../api/model/ModrinthSearchResults.ts";

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
}