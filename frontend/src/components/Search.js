import React from "react";
import * as ReactDOM from 'react-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({word, setWord, handleSubmit}) => {
  return (
    <Container className="mt-4">
    <Form onSubmit={handleSubmit}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form.Control
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)} 
          placeholder="Search for a new Image..."/>
        </Col>
        <Col>
          <Button varient="primary" type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
   </Container> 
  );
};


export default Search;
