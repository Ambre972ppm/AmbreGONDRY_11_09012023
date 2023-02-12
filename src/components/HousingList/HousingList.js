import HousingItem from '../HousingItem/HousingItem'
import '../../styles/HousingList.css'

async function getHousingList() {

    const response = await fetch('../../data/logements.json');
    const data = await response.json()

    HousingList(data);
}
git 
getHousingList();

function HousingList(data) {
    return (
		<div>
			<ul className='kaza-housing-list'>
				{data.map(({ id, title, cover, pictures, description, host, rating, location, equipements }) => (
					<HousingItem
						id={id}
						cover={cover}
						title={title}
						description={description}
						rating={rating}
					/>
				))}     
			</ul>
		</div>
	)
}

export default HousingList