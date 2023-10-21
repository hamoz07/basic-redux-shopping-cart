import { Add, remove } from "../rtks/slices/cart-slice";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Col } from "react-bootstrap";
const ProductCard = ({ state, page = "products" }) => {
  const dis = useDispatch();

  return (
    <>
      {state.length !== 0 ? (
        state.map((item, id) => (
          <Col md="4" key={id}>
            <Card style={{ width: "18rem" }} className="p-2 card-manage">
              <Card.Img
                variant="top"
                className={"card-img"}
                src={item.images[0]}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{item.price}$</ListGroup.Item>
                <ListGroup.Item>{item.category}</ListGroup.Item>
                <ListGroup.Item>
                  <div className="ratings">
                    <div
                      className="star"
                      style={{
                        color: item.rating >= 1 ? `rgb(255, 255, 9)` : "",
                      }}
                    >
                      &#9733;
                    </div>

                    <div
                      className="star"
                      style={{
                        color: item.rating >= 2 ? `rgb(255, 255, 9)` : "",
                      }}
                    >
                      &#9733;
                    </div>
                    <div
                      className="star"
                      style={{
                        color: item.rating >= 3 ? `rgb(255, 255, 9)` : "",
                      }}
                    >
                      &#9733;
                    </div>
                    <div
                      className="star"
                      style={{
                        color: item.rating >= 4 ? `rgb(255, 255, 9)` : "",
                      }}
                    >
                      &#9733;
                    </div>
                    <div
                      className="star"
                      style={{
                        color: item.rating >= 5 ? `rgb(255, 255, 9)` : "",
                      }}
                    >
                      &#9733;
                    </div>
                  </div>
                </ListGroup.Item>
                {page !== "products" ? (
                  <ListGroup.Item>quantity: {item.quantity}</ListGroup.Item>
                ) : (
                  ""
                )}
              </ListGroup>
              <Button
                variant={page === "products" ? "primary" : "danger"}
                onClick={
                  page === "products"
                    ? () => dis(Add(item))
                    : () => dis(remove(item))
                }
              >
                {page === "products" ? "Add To Cart" : "Remove from cart"}
              </Button>
            </Card>
          </Col>
        ))
      ) : page !== "products" ? (
        <p>no items in cart</p>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default ProductCard;
