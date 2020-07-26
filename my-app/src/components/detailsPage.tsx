import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function DetailsPage(props: { selected: any, closeDetailsPage: any }) {

    const MyButton = styled(Button)({
        background: '#f5c518',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      });



  return (
    <section className = "details-page">
        <div className = "info">
            <h2>
                {props.selected.Title}
                <span>
                    {props.selected.Year}
                </span>
            </h2>
            <p>Rating: {props.selected.imdbRating}</p>
            <div className="video-img">
					<img src={props.selected.Poster} />
					<p>{props.selected.Plot}</p>
			</div>
        </div>
        <MyButton className = "close" onClick = {props.closeDetailsPage}>Close</MyButton>
    </section>
  );
}

export default DetailsPage;