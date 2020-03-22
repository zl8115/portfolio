import React from 'react';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

function WidthReturn(props){
	const { width } = props;

	return(
		<Typography>Width: {width}</Typography>
	)
}

export default withWidth()(WidthReturn);