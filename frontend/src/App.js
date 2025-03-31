import './App.css'
import { useState, useEffect } from 'react'
import BarLoader from "react-spinners/ClipLoader";


const App = () => {
	const [loading, setloading] = useState(false);
	let [color, setColor] = useState("#fff000");
	useEffect(() => {
		setloading(true)
		setTimeout(() => {
			setloading(false)
		}, 6000)
	}, [])
	return (
		<>


			{
				loading ?

					<BarLoader
						color={color}
						loading={loading}

						size={100}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>

					: <></>}


		</>
	)
}
export default App;