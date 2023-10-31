import React, {useEffect, useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

export function Layout() {
	const navigate = useNavigate();
	const location = useLocation();

	const [page, setPage] = useState<string>(location.pathname == "/" ? "/home" : location.pathname);

	useEffect(() => {
		navigate(page);
	}, [page])

	return (<Box sx={{display: "block"}}>
		<Tabs value={page} sx={{borderBottom: 1, borderColor: "divider"}}>
			<Tab value={"/home"} label="Home" onClick={() => setPage("/home")}/>
			<Tab value={"/mods"} label="Minecraft Mods" onClick={() => setPage("/mods")}/>
		</Tabs>
		<Outlet/>
	</Box>)
}