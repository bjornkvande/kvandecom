import { Link } from 'gatsby'
import { Svg } from "../components/icon"
import Logo from "../icons/logo.svg"

<Link to="/programming" className="text-yellow-900">
	<div className="flex justify-center items-center max-w-sm p-8 rounded shadow" style={{ background: '#f7df1f'}}>
		<span className="inline-block w-16 h-16 mr-4">
			<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"/>
		</span>
		Javascript Programming Resources
	</div>
</Link>

<br/>

<Link to="/javascript" className="text-green-100">
	<div className="flex justify-center items-center bg-green-800 max-w-sm p-8 rounded shadow">
		<span className="inline-block w-12 h-12 mr-4">
			<Svg icon={Logo} />
		</span>
		Coding Practices used in Trailguide
	</div>
</Link>
