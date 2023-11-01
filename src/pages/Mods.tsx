import React, {useEffect, useState} from "react";
import {Box, Button, CircularProgress, Divider, IconButton, Paper, Stack, TextField, Typography} from "@mui/material";
import {ModrinthSearchResults} from "../api/model/ModrinthSearchResults.ts";
import {Api} from "../scripts/Api.ts";
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export function Mods() {
	const [isSearching, setIsSearching] = useState(true)

	const [searchPage, setSearchPage] = useState(0)
	const [maxSearchPage, setMaxSearchPage] = useState(0)

	const [search, setSearch] = useState("")
	const [searchResults, setSearchResults] = useState<ModrinthSearchResults>()

	useEffect(() => {
		getSearchs()
	}, [search, searchPage]);

	async function getSearchs() {
		try {
			setIsSearching(true);
			const resultModrinth = await Api.searchModrinth(search, searchPage, "mod", "pandadap2006");
			const resultCurseforge = await Api.searchCurseforge(search, searchPage, "mod", "pandadap2006");
			setSearchResults(resultModrinth);
			setMaxSearchPage(resultModrinth.total_hits ? Math.ceil(resultModrinth.total_hits / 50) - 1 : 0);
		} finally {
			setIsSearching(false);
		}
	}

	return (
		<Stack direction="row" gap={2} sx={{margin: 2}}>
			<Paper sx={{margin: 2, padding: 2, width: "100%"}}>
				<Stack direction="column" gap={2}>
					<TextField label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
					<CreateArrowButtons/>
					<Divider/>
					{isSearching ? <CircularProgress sx={{marginX: "auto"}}/> :
						<React.Fragment>
							<Stack direction="row" flexWrap={"wrap"} gap={2} justifyContent="center">
								{searchResults?.hits.map(value => (
									createProject(value.project_id, value.icon_url, value.title, value.downloads, value.follows, value.latest_version)
								))}
							</Stack>
							{maxSearchPage > 0 && <Divider/>}
							<CreateArrowButtons/>
						</React.Fragment>
					}
				</Stack>
			</Paper>
		</Stack>
	);

	function CreateArrowButtons() {
		if (maxSearchPage <= 0) return
		return (
			<Stack direction="row" gap={2} sx={{margin: 2}}>
				<IconButton onClick={() => setSearchPage(0)} sx={{marginLeft: "auto"}}>
					<KeyboardDoubleArrowLeftIcon/>
				</IconButton>
				<IconButton onClick={() => {
					if (searchPage > 0) setSearchPage(searchPage - 1)
				}}>
					<ChevronLeftIcon/>
				</IconButton>

				<Typography variant="h6">{searchPage + 1} / {maxSearchPage + 1}</Typography>

				<IconButton onClick={() => {
					if (searchPage < maxSearchPage) setSearchPage(searchPage + 1)
				}}>
					<ChevronRightIcon/>
				</IconButton>
				<IconButton onClick={() => setSearchPage(maxSearchPage)}>
					<KeyboardDoubleArrowRightIcon/>
				</IconButton>
			</Stack>
		)
	}
}

function createProject(projectId: string, imageURL: string, name: string, downloads: number, likes: number, latestVersion: string) {
	return (
		<Paper key={projectId} sx={{maxWidth: 500, width: "100%"}}>
			<Button sx={{
				justifyContent: "left",
				padding: 1,
				color: "unset",
				textAlign: "unset",
				wordWrap: "unset",
				width: "100%"
			}}>
				<Stack direction="row" gap={2}>
					<img src={imageURL} width={100} height={100} style={{borderRadius: 10}}/>
					<Stack direction="column" sx={{width: "100%"}}>
						<Typography variant="h5">{name}</Typography>
						<Typography variant="h6">{latestVersion}</Typography>
						<Stack direction="row" sx={{marginTop: "auto"}}>
							<Stack direction="row" gap={2}>
								<Box sx={{display: "flex"}}>
									<DownloadIcon/>
									<Typography variant="body1"
												sx={{textAlign: "center"}}>{new Intl.NumberFormat("en", {
										notation: "compact"
									}).format(downloads)}</Typography>
								</Box>
								<Box sx={{display: "flex"}}>
									<FavoriteIcon/>
									<Typography variant="body1"
												sx={{textAlign: "center"}}>{new Intl.NumberFormat("en", {
										notation: "compact"
									}).format(likes)}</Typography>
								</Box>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Button>
		</Paper>
	)
}