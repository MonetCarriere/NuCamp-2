import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

{/*This is a Presentational Component because it renders UI based on props passed to it from the main component and doesn't manage it's own state*/}
{/*a.k.a Skinny, Dumb, Stateless */}

function RenderCampsite({campsite}) {
    return(
        <div className="col-md-5 m-1">
             <Card>
                <CardImg top src={campsite.image} alt={campsite.name}/>
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
  }

  function RenderComments({comments}) {
    if(comments){
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {
                comments.map(comment => <div key={comment.id} className="p-1">{comment.text}<br>
                </br>--{comment.author},
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).
                format(new Date(Date.parse(comment.date)))}</div>)
                }
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
  }


    
    

  function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default CampsiteInfo;