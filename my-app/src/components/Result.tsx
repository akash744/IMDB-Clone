import React from 'react'

function Result(props : { result: any}) {

	return (
		<div className="result-class">
			<img src={props.result.Poster} alt = ''/>
			<h3>{props.result.Title}</h3>
			<h3 id = "type">{props.result.Type}</h3>
		</div>
	)
}

export default Result