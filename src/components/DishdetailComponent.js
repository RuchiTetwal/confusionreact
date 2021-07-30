import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';



    function RenderComment({comments}){
            if(comments==null){
                return(
                    <div></div>
                )
            }
            else{

                const comment = comments.map(comment =>{
                    return(
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US' ,{ year:'numeric',month:'long',day:'2-digit',}).format(new Date(comment.date))}</p>
                        </li>
                    )
                })

                return(
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">{comment}</ul>
                    </div>
                )

            }
          
        }

      function  RenderDish({dish}){
            
        if(dish!=null)
        return(
                <Card className="col-12 col-md-5 m-1">
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        else
            return(
                <div></div>
            );
        }

        const DishdetailComponent=(props)=>{
            const dishes = props.dishDetail
            //const commentDetail = this.props.dishDetail.comments

            if(dishes==null){
                return(
                    <div></div>
                )
            }
            const dishshow= <RenderDish dish={dishes}/>
            const commentshow = <RenderComment comments={dishes.comments}/>
            return(
                <div className="row m-5">
                    {dishshow}
                    {commentshow}
                </div>
            )
        }
    
    

export default DishdetailComponent
