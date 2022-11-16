import React from 'react';
import gifList from './gifList';

const RelevantGif = ({gifNumber}) => {
	
	const gifUrl = gifList[gifNumber];

	return (
		<div>
			<p>{gifUrl}</p>
			<img alt='ChuckNorris' src={gifUrl} />
		</div>
	)
}

export default RelevantGif;