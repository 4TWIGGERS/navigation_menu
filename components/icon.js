import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function TwiggersLogo(props) {
	return (
		<Svg width={72} height={72} xmlns='http://www.w3.org/2000/svg' {...props}>
			<Rect width={72} height={72} rx={20} fill='#fff' />
			<Path
				d='M21 24a8 8 0 008 8v-8a8 8 0 00-8-8v8zM33 16a8 8 0 018 8v32a8 8 0 01-8-8V16z'
				fill='#0D0D19'
			/>
			<Path d='M51 42a8 8 0 00-8-8H23a8 8 0 008 8h20z' fill='#0D0D19' />
		</Svg>
	);
}

export default TwiggersLogo;
