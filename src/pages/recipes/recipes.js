import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";

import RecipeForm from "../../components/recipe/recipe-form";
const Recipes = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Camera</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col sm={6}>
          <RecipeForm />
        </Col>
        <Col sm={6}></Col>
      </Row>
    </>
  );
};

export default Recipes;
