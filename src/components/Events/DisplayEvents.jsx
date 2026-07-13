// Importing dependencies
import { consumerContext } from "../../context/userContext";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Importing components
import EditEvent from "./EditEvent";

// Importing component styles
import styles from "./Events.module.css";

function DisplayEvents() {
  // Calling the Consumer Context with numerous states
  const { userEvents, setUserEvents, singleEvent, setSingleEvent } =
    consumerContext();
  // Setting the use state for the bootstrap modal (Will be used by our handle edit function)
  const [modalShow, setModalShow] = useState(false);

  // In our handleDelete function, we
  const handleDelete = (selectedItem) => {
    // [1] Filter through the userEvents array and store it to var: updatedEventArray
    const updatedEventArray = userEvents.filter(
      // [2] Return every item with an id that is not equal to the id of the item selected by the user
      (item) => item.id !== selectedItem.id,
    );
    // [3] Update the state of user events by feeding it our updated array
    setUserEvents(updatedEventArray);
  };

  // In our handle edit function, we:
  const handleEdit = (selectedItem) => {
    // [1] Locate the event that was selected by its ID and store it to eventToEdit
    const eventToEdit = userEvents.find((item) => item.id === selectedItem.id);
    // [2] Isolate the event  by setting its value to the "singleEvent" state
    setSingleEvent(eventToEdit);
    // [3] Open the Edit Modal
    setModalShow(true);
  };

  return (
    <Container fluid className={styles.displayEventsContainer}>
      <Row>
        {/* We map through our userEvents state and display each event in the DOM */}
        {userEvents.map((item) => (
          <Card
            key={item.id}
            style={{ width: "18rem" }}
            className={styles.eventsCard}
          >
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className={styles.eventCardDetails}>
                {item.date} • {item.time}
              </Card.Text>
              <Card.Text>{item.location}</Card.Text>
              <Button
                className={styles.updateEventButton}
                onClick={() => {
                  handleEdit(item);
                }}
              >
                Update Event
              </Button>
              <Button
                className={styles.deleteEventButton}
                onClick={() => handleDelete(item)}
              >
                Delete Event
              </Button>
            </Card.Body>
          </Card>
        ))}
        {/* We pass our Edit Event functional component [bootstrap component] */}
        <EditEvent
          show={modalShow}
          onHide={() => setModalShow(false)}
          key={singleEvent?.id}
        />
      </Row>
    </Container>
  );
}

export default DisplayEvents;
