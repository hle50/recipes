import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Form, Button, Card } from "react-bootstrap";
const CameraModelForm = () => {
  const methods = useForm();
  const { handleSubmit, control, register, errors } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <Card>
      <Card.Header>Camera form</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="cameraName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="cameraName"
              type="text"
              placeholder="Enter camera name"
              defaultValue=""
              ref={register({
                required: true,
              })}
            />
            <p>{errors.cameraName && <span>required</span>}</p>
          </Form.Group>
          <Form.Group controlId="sensor">
            <Form.Label>Sensor</Form.Label>
            <Controller
              rules={{ required: true }}
              render={({ onChange, value }) => (
                <Select
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                  onChange={(e) => {
                    // onChange's arg will send value into hook form
                    onChange(e.value);
                  }}
                  value={{
                    // make sure we remain the corect format for the controlled component
                    value: value,
                    label: value,
                  }}
                />
              )}
              name="select"
              control={control}
              defaultValue={null}
            />
            <p>{errors.select && <span>required</span>}</p>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CameraModelForm;
