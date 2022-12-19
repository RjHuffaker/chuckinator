import React from 'react';
import gifList from './gifList';

const RelevantGif = ({gifNumber}) => {
	
	const gifUrl = gifList[gifNumber];

	return (
		<img style={{minWidth: '600px'}} alt='ChuckNorris' src={gifUrl} />
	)
}

export default RelevantGif;