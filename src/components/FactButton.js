import React from 'react';

const FactButton = ({ fetchFact }) => {
	return (
		<button style={{fontSize:"20px", width:'600px'}} onClick={fetchFact}>New Fact</button>
	)
}

export default FactButton