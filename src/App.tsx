import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout.tsx";
import {Home} from "./pages/Home.tsx";
import {Mods} from "./pages/Mods.tsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/mods" element={<Mods />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
