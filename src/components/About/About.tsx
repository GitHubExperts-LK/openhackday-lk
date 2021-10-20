import { Container, Grid } from '@mui/material'
import React from 'react'
import '../../scss/main.scss'
import '../../scss/about.scss'
import '../../scss/_variables.scss'
import Image from '../../assets/images/about.png'

const About = () => (
	<div className='about'>
		<Container sx={{ mt: 5, mb: 2 }}>
			<Grid container justifyContent='center'>
				<div className='title'>About Us</div>
			</Grid>
			<Grid container className=''>
				<Grid item xs={12} sm={6} md={6}>
					<div className='maxWidth500'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat.
						</p>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<div>
						<img src={Image} alt='about' className='img-fluid' />
					</div>
				</Grid>
			</Grid>
		</Container>
	</div>
)

export default About
