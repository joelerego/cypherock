import React from 'react';
import ReceiveButton from './ReceiveButton';
import SendButton from './SendButton';
import Divider from '@material-ui/core/Divider';

export default function Actions() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				paddingLeft: '120px',
			}}
		>
			<ReceiveButton />
			<SendButton />
		</div>
	);
}
