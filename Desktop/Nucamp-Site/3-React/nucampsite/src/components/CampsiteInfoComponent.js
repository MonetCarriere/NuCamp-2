import React from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row,} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';



// 1-check here
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
// 2 - this is your CommentForm class
class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
}

  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <i class="fa fa-pencil" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col md={12}>
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    placeholder="Rating"
                    className="form-control"
                    validators={{
                      required,
                      isNumber,
                      minLength: minLength(1),
                      maxLength: maxLength(5),
                    }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".rating"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 1 Number",
                      maxLength: "Must be 5 Number or less",
                    }}
                  />
                </Col>
                <Col md={12}>
                  <Label htmlFor="rating">Author</Label>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Author"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(1),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 1 Letters",
                      maxLength: "Must be 15 Letters or less",
                    }}
                  />
                </Col>
                <Col md={12}>
                  <Label htmlFor="text">Comment</Label>
                  <Row md="6">
                    <Col>
                      <Control.textarea
                        rows="6"
                        model=".text"
                        id="text"
                        name="text"
                        placeholder="Comment"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(1),
                          maxLength: maxLength(40),
                        }}
                      />
                    </Col>
                  </Row>
                  <Errors
                    className="text-danger"
                    model=".text"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 1 Letters",
                      maxLength: "Must be 40 Letters or less",
                    }}
                  />
                </Col>
              </Row>
              <Button>Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
function RenderComments({ comments, addComment, campsiteId }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div>
              <p>{comment.text}</p>
              <p>
                {comment.name}{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          );
        })}
         <CommentForm campsiteId={campsiteId} addComment={addComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}
function CampsiteInfo(props) {
  
  if (props.isLoading) {
    return (
        <div className="container">
            <div className="row">
                <Loading />
            </div>
        </div>
    );
}
if (props.errMess) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        </div>
    );
}

if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row"> {/* CHECK HERE LATER */}
          <RenderCampsite campsite={props.campsite} />
          <RenderComments 
            comments={props.comments}
            addComment={props.addComment}
            campsiteId={props.campsite.id}
          />
        </div>
      </div>
    );
  }
  return <div />;
}
export default CampsiteInfo;
