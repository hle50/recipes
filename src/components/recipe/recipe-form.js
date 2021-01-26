import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Form, Button, Card, Col } from "react-bootstrap";
import Error from "../error";
const RecipeForm = () => {
  const methods = useForm();
  const { handleSubmit, control, register, errors } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <Card>
      <Card.Header>Recipe form</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="recipeName">
            <Form.Label>Select film simulation</Form.Label>
            <Form.Control
              name="recipeName"
              type="text"
              placeholder="Recipe name"
              defaultValue=""
              ref={register({
                required: true,
              })}
            />
            <span>
              {errors.recipeName && <Error text="Recipe name is required" />}
            </span>
          </Form.Group>
          <Form.Group controlId="simulation">
            <Form.Label>Simulation</Form.Label>
            <Controller
              rules={{ required: true }}
              render={({ onChange, value }) => (
                <Select
                  options={[
                    { value: "PROVIA", label: "PROVIA" },
                    { value: "ASTIA", label: "ASTIA" },
                    { value: "VELVIA", label: "VELVIA" },
                    { value: "CLASSIC CHROME", label: "CLASSIC CHROME" },
                    { value: "PRO NEG STD", label: "PRO NEG STD" },
                    { value: "PRO NEG HI", label: "PRO NEG HI" },
                    { value: "CLASSIC NEG", label: "CLASSIC NEG" },
                    { value: "ACROS", label: "ACROS" },
                    { value: "ETERNA (CINEMA)", label: "ETERNA (CINEMA)" },
                    {
                      value: "ETERNA BLEACH BYPASS",
                      label: "ETERNA BLEACH BYPASS",
                    },
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
              name="simulation"
              control={control}
              defaultValue={null}
            />
            <span>
              {errors.simulation && (
                <Error text="Film simulation is required" />
              )}
            </span>
          </Form.Group>

          <Form.Group controlId="dynamicRange">
            <Form.Label>Dynamic Range</Form.Label>
            <Controller
              rules={{ required: true }}
              render={({ onChange, value }) => (
                <Select
                  options={[
                    { value: "DR100", label: "DR100" },
                    { value: "DR200", label: "DR200" },
                    { value: "DR400", label: "DR400" },
                    { value: "AUTO", label: "AUTO" },
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
              name="dynamicRange"
              control={control}
              defaultValue={null}
            />
            <span>
              {errors.dynamicRange && (
                <Error text="Dynamic range is required" />
              )}
            </span>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="highight">
              <Form.Label>Highlight</Form.Label>
              <Form.Control
                name="highight"
                type="number"
                placeholder="Highight"
                defaultValue=""
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.highight && <Error text="Highight is required" />}
              </span>
            </Form.Group>

            <Form.Group as={Col} controlId="shadow">
              <Form.Label>Shadow</Form.Label>
              <Form.Control
                name="shadow"
                type="number"
                placeholder="shadow"
                defaultValue=""
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.shadow && <Error text="Shadow is required" />}
              </span>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control
                name="color"
                type="number"
                placeholder="color"
                defaultValue=""
                ref={register({
                  required: true,
                })}
              />
              <span>{errors.color && <Error text="Color is required" />}</span>
            </Form.Group>
            <Form.Group as={Col} controlId="noiseReduction">
              <Form.Label>Noise Reduction</Form.Label>
              <Form.Control
                name="noiseReduction"
                type="number"
                placeholder="Noise Reduction"
                defaultValue=""
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.noiseReduction && (
                  <Error text="noise Reduction is required" />
                )}
              </span>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="sharpening">
              <Form.Label>Sharpening</Form.Label>
              <Form.Control
                name="sharpening"
                type="number"
                placeholder="Sharpening"
                defaultValue=""
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.sharpening && <Error text="Sharpening is required" />}
              </span>
            </Form.Group>

            <Form.Group as={Col} controlId="clarity">
              <Form.Label>Clarity</Form.Label>
              <Form.Control
                name="clarity"
                type="number"
                placeholder="Sharpening"
                defaultValue=""
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.clarity && <Error text="Clarity is required" />}
              </span>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Label as={Col}>Grain Effect</Form.Label>
            <Form.Group as={Col}>
              <Form.Check
                inline
                value="weak"
                type="checkbox"
                name="grainEffect"
                label="Weak"
                ref={register({
                  required: true,
                })}
              />
              <Form.Check
                inline
                value="small"
                type="checkbox"
                name="grainEffect"
                label="Small"
                ref={register({
                  required: true,
                })}
              />
              <Form.Check
                inline
                value="auto"
                type="checkbox"
                name="grainEffect"
                label="Auto"
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.grainEffect && (
                  <Error text="Grain effect is required" />
                )}
              </span>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label as={Col}>Color Chrome Effect</Form.Label>
            <Form.Group as={Col}>
              <Form.Check
                inline
                value="weak"
                type="radio"
                name="chromeEffect"
                label="Weak"
                ref={register({
                  required: true,
                })}
              />
              <Form.Check
                inline
                value="strong"
                type="radio"
                name="chromeEffect"
                label="Strong"
                ref={register({
                  required: true,
                })}
              />
              <Form.Check
                inline
                value="off"
                type="radio"
                name="chromeEffect"
                label="Off"
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.chromeEffect && (
                  <Error text="Chrome effect is required" />
                )}
              </span>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label as={Col}>Color chrome effect blue</Form.Label>
            <Form.Group as={Col}>
              <Form.Check
                inline
                value="weak"
                type="radio"
                name="chromeEffectBlue"
                label="Weak"
                ref={register({
                  required: true,
                })}
              />
              <Form.Check
                inline
                value="strong"
                type="radio"
                name="chromeEffectBlue"
                label="Strong"
                ref={register({
                  required: true,
                })}
              />
              <Form.Check
                inline
                value="off"
                type="radio"
                name="chromeEffectBlue"
                label="Off"
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.chromeEffectBlue && (
                  <Error text="Chrome effect blue is required" />
                )}
              </span>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="whiteBalance">
              <Form.Label>White balance</Form.Label>
              <Form.Control
                name="whiteBalance"
                type="text"
                placeholder="White Balance"
                defaultValue=""
                ref={register({
                  required: true,
                })}
              />
              <span>
                {errors.whiteBalance && (
                  <Error text="White balance is required" />
                )}
              </span>
            </Form.Group>
            <Form.Group as={Col} controlId="iso">
              <Form.Label>ISO</Form.Label>
              <Form.Control
                name="iso"
                type="text"
                placeholder="ISO"
                defaultValue=""
                ref={register({
                  required: true,
                })}
              />
              <span>{errors.iso && <Error text="ISO is required" />}</span>
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RecipeForm;
