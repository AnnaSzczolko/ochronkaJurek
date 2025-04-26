// import './app.scss'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Familia from './/pages/Familia'
import HomePage from './pages/HomePage'
import Towarzystwo from './pages/Towarzystwo'
import Root from './pages/Root'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			// { index: '/TowarzystwoPrzywracaniaRodziny', element: <Towarzystwo></Towarzystwo> },
			{ index: true , element: <Towarzystwo></Towarzystwo> },
			{ path: '/ochronkaJurek', element: <HomePage></HomePage> },
			{ path: '/ośrodekProFamilia', element: <Familia></Familia> },
		],
	},
])

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App
