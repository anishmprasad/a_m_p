import React from 'react';
import './index.scss';

export default function Container(props) {
	return (
		<div className='container'>
			{React.cloneElement(props.children, {
				className: 'container'
			})}
		</div>
	);
}
