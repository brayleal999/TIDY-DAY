import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import { ThemeProvider } from './components/ui/theme-provider'
import Subscription from './pages/Subscription/Subscription'
import Auth from './pages/Auth/Auth'
import Principal from './pages/Principal/Principal'

function App() {

	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			{
				false ? <div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/project/:id' element={<ProjectDetails />} />
						<Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
						<Route path='/upgrade_plan' element={<Subscription />} />
					</Routes>
				</div> : <Principal />
			}
		</ThemeProvider>
	)
}

export default App;
