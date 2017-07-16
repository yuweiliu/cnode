import React from 'react'
import { HashRouter, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Topic from './components/Topic'
import Message from './components/Message'
import SingleTopic from "./components/SingleTopic"

class App extends React.Component{
	render(){
		return(
			<HashRouter>
				<div>
					<Header />
					
					<div style={{minHeight: '300px'}}>
						<Route path='/' exact component={Home} />
						<Route path='/topic/:id' component={Topic} />
						<Route path='/message' component={Message} />
						<Route path='/user/:loginname' component={SingleTopic} />
					</div>

					<Footer />
				</div>
			</HashRouter>
		)
	}
}
export default App