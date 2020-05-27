import React from "react";

class Loading extends React.Component {
	render() {
		return (
			<div className="spinner_container">
				<i className="fas fa-spinner fa-spin spinner"></i>
			</div>
		);
	}
}

export default Loading;
