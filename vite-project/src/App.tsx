import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import { ThemeProvider } from './components/ui/theme-provider'
import Subscription from './pages/Subscription/Subscription'
import Principal from './pages/Principal/Principal'
import AboutUs from './pages/AboutUs/aboutUs'
import { Support } from './pages/Support/support'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'

function App() {

	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			{
				false ? <div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<AboutUs />} />
						<Route path='/project/:id' element={<ProjectDetails />} />
						<Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
						<Route path='/upgrade_plan' element={<Subscription />} />
					</Routes>
				</div> : <Routes>
					<Route path='/' element={<Principal />} />
					<Route path='/aboutUs' element={<AboutUs />} />
					<Route path='/support' element={<Support />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			}
		</ThemeProvider>
	)
}

export default App;
