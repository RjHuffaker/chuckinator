import React from 'react';
import gifList from './gifList';

const RelevantGif = ({gifNumber}) => {
	
	const gifUrl = gifList[gifNumber];

	return (
		<div>
			<img alt='ChuckNorris' src={gifUrl} />
		</div>
	)
}

export default RelevantGif;