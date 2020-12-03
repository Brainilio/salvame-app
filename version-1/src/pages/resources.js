import React from "react"
import Card from "./content/resourceCard"
import { gsap } from "gsap"
import { NavLink } from "react-router-dom"

const Resource = () => {
	return (
		<>
			<div className='resource-page-headers'>
				<span className='resource-page-title'>What can I do?</span>
				<span className='resource-page-description'>
					Activism should not be limited to one option. Here are many ways you
					can fight environmental racism.
				</span>
			</div>

			<div className='resource-wrapper'>
				<Card
					title='East Yard Communities'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
						doloribus.'
					hreflink='www.casa0101.org'
					imgsource='https://www.artsbeatla.com/wp-content/uploads/2015/01/Photo-1-l-to-r-Playwrights-Josefina-Lo%CC%81pez-and-Kathy-Fischer-in-front-of-CASA-0101-Theater-Photo-by-Steve-Moyer.jpg'
				/>
				<Card
					title='Casa 1010'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
						doloribus.'
					hreflink='www.casa0101.org'
					imgsource='https://www.artsbeatla.com/wp-content/uploads/2015/01/Photo-1-l-to-r-Playwrights-Josefina-Lo%CC%81pez-and-Kathy-Fischer-in-front-of-CASA-0101-Theater-Photo-by-Steve-Moyer.jpg'
				/>
				<Card
					title='Donation!'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
						doloribus.'
					hreflink='www.casa0101.org'
					imgsource='https://www.artsbeatla.com/wp-content/uploads/2015/01/Photo-1-l-to-r-Playwrights-Josefina-Lo%CC%81pez-and-Kathy-Fischer-in-front-of-CASA-0101-Theater-Photo-by-Steve-Moyer.jpg'
				/>
				<Card
					title='Call the major'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
						doloribus.'
					hreflink='www.casa0101.org'
					imgsource='https://www.artsbeatla.com/wp-content/uploads/2015/01/Photo-1-l-to-r-Playwrights-Josefina-Lo%CC%81pez-and-Kathy-Fischer-in-front-of-CASA-0101-Theater-Photo-by-Steve-Moyer.jpg'
				/>
				<Card
					title='Clean up event!'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
						doloribus.'
					hreflink='www.casa0101.org'
					imgsource='https://www.artsbeatla.com/wp-content/uploads/2015/01/Photo-1-l-to-r-Playwrights-Josefina-Lo%CC%81pez-and-Kathy-Fischer-in-front-of-CASA-0101-Theater-Photo-by-Steve-Moyer.jpg'
				/>
			</div>
			<NavLink to='/' exact>
				<button className='back-button'>Restart</button>
			</NavLink>
		</>
	)
}

export default Resource
