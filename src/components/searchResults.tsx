
import React from 'react';
import Result from './Result';
 



function Results(props: { results: any}) {
  return (
    <section className="results-section">
			{props.results.map((result: any) => (
				<Result key = {result.imdbID} result={result}/>
			))}
	</section>
  )
}

export default Results;