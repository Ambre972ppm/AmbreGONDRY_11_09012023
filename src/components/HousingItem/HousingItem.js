import '../../styles/HousingItem.css'

function HousingItem({ id, title, cover, pictures, description, host, rating, location, equipements }) {
	return (
		<li key={id} className='kaza-list-item'>
			<img className='kaza-list-item-cover' src={cover} alt={`${title} cover`} />
			{title}
		</li>
	)
}

export default HousingItem