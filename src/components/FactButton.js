import React from 'react';

const FactButton = ({ fetchFact }) => {
	return (
		<button onClick={fetchFact}>New Fact</button>
	)
}

export default FactButton