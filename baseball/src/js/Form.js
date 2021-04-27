import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import Options from './Options.js'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const initialValues = {
  lineup: [
    {
      player: '',
      position: '',
      number: ''
    },
  ],
};
const positions = ['DH', 'SP', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'];

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
        <Table key='lineupTable' striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
        <tbody>
          <FieldArray name="lineup">
            {({ remove, push }) => (
              <>
              {values.lineup.length > 0 &&
                values.lineup.map((player, index) => (
                <tr key={`lineup.${index}`}>
                  <td>
                  <Field
                    name={`lineup.${index}.player`}
                    key={`lineup.${index}.player.field`}
                    type="text"
                    required
                  />
                  <ErrorMessage
                    name={`lineup.${index}.player`}
                    key={`lineup.${index}.player.error`}
                    component="div"
                    className="field-error"
                  />
                  </td>
                  <td>
                    <Field
                      name={`lineup.${index}.number`}
                      key={`lineup.${index}.number.field`}
                      type="number"
                      required
                    />
                    <ErrorMessage
                      name={`lineup.${index}.number`}
                      key={`lineup.${index}.number.error`}
                      component="div"
                      className="field-error"
                    />
                  </td>
                  <td>
                    <Field
                      name={`lineup.${index}.position`}
                      as="select"
                    >
                      <option value="">Select a Position</option>
                      {positions.map((position, index) => {
                        return <Options key={`lineup.postion.option.${index}`} value={position} index={index}/>
                      })}
                    </Field>
                    <ErrorMessage
                      name={`lineup.${index}.position`}
                      key={`lineup.${index}.position.error`}
                      component="div"
                      className="field-error"
                    />
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      key={`lineup.${index}.delete`}
                      className="secondary"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="success"
                      key={`lineup.${index}.add`}
                      className="secondary"
                      onClick={() => push({ player: '', position: '' })}
                    >
                    New
                  </Button>
                </td>
                </tr>
                ))}
                </>
            )}
          </FieldArray>
          </tbody>
          </Table>
            <hr />
            <Button type="submit">Submit Lineup</Button>
        </Form>
      )}
    </Formik>
  )
 
}

export default PlayersForm