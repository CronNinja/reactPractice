import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const initialValues = {
  lineup: [
    {
      player: '',
      position: '',
    },
  ],
};
const positions = ['DH', 'SP', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'];
const BuildLineup = () => (
  <div>
    <h1>Lineup Generator</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="lineup">
            {({ insert, remove, push }) => (
              <div>
                {values.lineup.length > 0 &&
                  values.lineup.map((player, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`lineup.${index}.player`}>Player</label>
                        <Field
                          name={`lineup.${index}.player`}
                          type="text"
                        />
                        <ErrorMessage
                          name={`lineup.${index}.player`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`lineup.${index}.position`}>Position</label>
                        <Field
                          name={`lineup.${index}.position`}
                          as="select"
                        >
                          <option value="">Select a Position</option>
                          <option value="dh">DH</option>
                          <option value="sp">SP</option>
                          <option value="c">C</option>
                          <option value="1b">1B</option>
                          <option value="2b">2B</option>
                          <option value="3b">3B</option>
                          <option value="ss">SS</option>
                          <option value="lf">LF</option>
                          <option value="cf">CF</option>
                          <option value="rf">RF</option>
                        </Field>
                        <ErrorMessage
                          name={`lineup.${index}.position`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ player: '', position: '' })}
                >
                  New Player
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit Lineup</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default BuildLineup
