import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
const initialValues = {
  lineup: [
    {
      player: '',
      position: '',
      number: null
    },
  ],
};
const positions = ['DH', 'SP', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'];

const getOption = (value, index) =>{
  return (<option value={index}>{value}</option>)
}

const PlayersForm = () => {
  return (
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
            {({ remove, push }) => (
              <div>
                {values.lineup.length > 0 &&
                  values.lineup.map((player, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`lineup.${index}.player`}>Player</label>
                        <Field
                          name={`lineup.${index}.player`}
                          type="text"
                          required
                        />
                        <ErrorMessage
                          name={`lineup.${index}.player`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`lineup.${index}.number`}>Number</label>
                        <Field
                          name={`lineup.${index}.number`}
                          type="number"
                          required
                        />
                        <ErrorMessage
                          name={`lineup.${index}.number`}
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
                          {positions.map((position, index) =>{
                            return getOption(position, index);
                          })}
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
  )
 
}

export default PlayersForm