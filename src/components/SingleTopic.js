import React from 'react'
import {url} from '../config'
import axios from "axios"
import { message, Card, BackTop, Avatar, Input, Button, Icon, Modal } from 'antd';
import moment from 'moment';
import {Link} from 'react-router-dom'



class SingleTopic extends React.Component{
	constructor(){
		super()
		this.state={
			data: null
		}
	}
	getData(){
		let loginname = this.props.match.params.loginname
		axios.get(`${url}/user/${loginname}`)
			.then(res=> this.setState({data: res.data.data}))
			.catch(err=> message.error('数据请求失败'))
	}
	componentDidMount(){
		this.getData()
	}	
	handleChang(){
		this.componentDidMount()
		
	}
	render(){
		let {data} = this.state
		console.log(data)
		return(
			<div>
				<Card loading={!data}>
						
					{
						data ?
						(
							<div className="Single">
								<h1>主页</h1>
								<div>
									<img src={data.avatar_url} alt=""/>
									<span>{data.loginname}</span>
								</div>
								<p>{data.score} &nbsp;&nbsp;积分</p>
								<p>注册时间：&nbsp;&nbsp;{moment(data.create_at).fromNow()}</p>
								<div>
									<h1>最近创建的话题</h1>
				                    {
				                        data.recent_topics.map(item=>(
				                          <div key={item.id}>
				                            <Link to={`/user/${item.author.loginname}`}>
				                              <img src={item.author.avatar_url} alt="aaa"/>
				                            </Link>
				                            <span><Link to={`/uesr/${item.author.loginname}`}>{item.author.loginname}
				                            </Link></span>
				                            <p><Link to={`/topic/${item.id}`}className='titie'>{item.title}
				                            </Link></p>
				                          </div>
				                        ))
				                    }
		                      	<h1>最近参与的话题</h1>
			                    {
			                        data.recent_replies.map(item=>(
			                            <div key={item.id}>
			                              <Link to={`/user/${item.author.loginname}`}>
			                                <img src={item.author.avatar_url} alt="avatar_url" onClick={this.handleChang.bind(this) } />
			                              </Link>
			                              <span><Link to={`/uesr/${item.author.loginname}`}>{item.author.loginname}
			                              </Link></span>
			                              <p><Link to={`/topic/${item.id}`} className='titie'>{item.title}</Link></p>
			                            </div>
			                          ))
			                    }

									
								</div>
							</div>	
						) : null
						
					}
				</Card>
			</div>
			)
	}
}
export default SingleTopic