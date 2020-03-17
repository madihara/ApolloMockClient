import React, {useState} from 'react'

import styled from 'styled-components'


import { links } from './menuConstants'


	const NavMenu = styled.nav`
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		height: 100vh;
		min-width:  240px;
		background-color: #252E50;
		color: white;
		left: 0;
		font-size: 0.9rem;
		font-weight: lighter;
		margin: 0;
		line-height: 0.6rem; 

		@media screen and (max-width: 800px){
			width: 50px;
			min-width: 0;
		}
			
		h1{
			text-transform: uppercase;
			font-size: 0.6rem;
			padding: 1rem 2rem 1.5rem 1.5rem;
			letter-spacing: 0.3rem;

			&:hover{
				cursor: pointer
			}
		}

		p{
			height: 12px;
			width: 12px;
			position: absolute;
			top: 50%;
			left: 50%;
			margin: -5px 0 0 -5.5px;
		}

		h4{
			text-transform: uppercase;
			font-size: 0.6rem;
			color: #848484;
			letter-spacing: 1px;
			padding: 0 1.5rem;
		}
		
	ul{
		padding:0;
		margin: none;

		&:last-child{
				margin-bottom: 20px;
			}
		}


		li{
			list-style: none;
			position: relative;
			padding: 5px 0 5px 1rem;
			font-size: 0.75rem;
			border-radius: 5px;
			margin: 0 8px;
			height: 16px;

			&:hover{
				background-color:#1B2240;
				cursor: pointer;
			}

			&:active{
				background-color: #5268C2;
			}
		}
	`


const Menu = () => {

 const [isOpen, setMenu] = useState('true');

 const toggleMenu = () => {
	 setMenu(isOpen => !isOpen)
 }
 console.log(isOpen)

 return (
			<NavMenu>
				<div>
					<h1>Apollo
						<button onClick={toggleMenu}> + </button>
					</h1>
					<h4> Organizations</h4>
					<li>
						<div style={{
						height: '16px',
						width: '16px',
						backgroundColor: 'white',
						color: '#5268C2',
						display: 'inline-block', 
						marginRight: '10px',
						position: 'relative',
						borderRadius: '5px',
						fontWeight: 'bold'
					}}>
						<p>M</p>
						</div >
						<span>Madison Haradine</span>
					</li>
				</div>
				<div>
					<h4>Settings and Support</h4>
					<ul>
						{links.map((link, index) => {
							return (
								<li href={link.url} key={index}>
									{link.title}
								</li>
							)
						})}
					</ul>
				</div>
			</NavMenu>
	)
}

export default Menu