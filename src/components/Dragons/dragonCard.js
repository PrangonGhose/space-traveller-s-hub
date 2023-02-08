import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../../redux/Dragon/Dragon';

const DragonCard = (props) => {
  const {
    id, name, type, description, flickrImage, reserved,
  } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(reserveDragon(id));
  };

  return (
    <>
      <Container className="p-3">
        <Row>
          <Col className="d-grid align-content-center" xs={12} lg={5} xl={4}>
            <Figure>
              <Figure.Image
                alt={name}
                src={flickrImage}
              />
            </Figure>
          </Col>
          <Col xs={12} lg={7} xl={8}>
            <Card style={{ border: 0 }}>
              <Card.Body>
                <Card.Title>
                  {name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
                <Card.Text>
                  {reserved ? <Badge bg="info">Dragon Reserved</Badge> : ''}
                  {description}
                </Card.Text>
                <Button onClick={onClick} variant={reserved ? 'outline-secondary' : 'primary'}>
                  {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DragonCard;

DragonCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  flickrImage: PropTypes.string.isRequired,
};
