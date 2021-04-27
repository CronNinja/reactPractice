import React from 'react';
import Options from './Options.js'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const blankPlayer = {
  player: '',
  position: '',
  number: ''
}


const positions = ['DH', 'SP', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'];

const PlayersForm = () => {
  const [lineup, setLineup] = React.useState([]);

  const handleAddLine = () => {
    setLineup([...lineup, blankPlayer]);
  }
  const savePlayer = (e) => {
    let index = e.target.id.split('.')[1];
    if(lineup[index]){
      lineup[index] = {
        player: document.getElementById(`lineup.${index}.player`).value,
        number: document.getElementById(`lineup.${index}.number`).value,
        position: document.getElementById(`lineup.${index}.position`).value
      }
    }else{
      setLineup([...lineup,{
        player: document.getElementById(`lineup.${index}.player`).value,
        number: document.getElementById(`lineup.${index}.number`).value,
        position: document.getElementById(`lineup.${index}.position`).value
    }])
    }
  }
  const removePlayer = (e) => {
    let index = e.target.id.split('.')[1];
    let newLineup = [...lineup]
    if(lineup[index]){
      newLineup = lineup.filter((p, i) => i != index);
    }
    setLineup(newLineup);
  }

  return (
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
          {lineup && lineup.length > 0 ?(
            lineup.map((value, index) =>(
                <tr key={index}>
                  <td>
                  <input
                    id={`lineup.${index}.player`}
                    key={`lineup.${index}.player.field`}
                    type="text"
                    required
                  />
                  </td>
                  <td>
                    <input
                      id={`lineup.${index}.number`}
                      key={`lineup.${index}.number.field`}
                      type="number"
                      required
                    />
                  </td>
                  <td>
                  <select
                      id={`lineup.${index}.position`}
                    >
                      <option value="">Select a Position</option>
                      {positions.map((position, index) => {
                        return <Options key={`lineup.postion.option.${index}`} value={position} index={index}/>
                      })}
                    </select>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      id={`lineup.${index}.delete`}
                      key={`lineup.${index}.delete`}
                      onClick={removePlayer}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="success"
                      key={`lineup.${index}.add`}
                      id={`lineup.${index}.add`}
                      onClick={savePlayer}
                    >
                      Save
                    </Button>
                </td>
              </tr>
          ))) : (
            <></>
          )
          }
          </tbody>
          <tfoot>
            <tr>
              <td>
              <Button
                variant="success"
                name={`lineup.addButton`}
                onClick={handleAddLine}
              >
                New
              </Button>
              </td>
              <td>
                <Button type="submit" onClick={() => console.log(lineup)}>Submit Lineup</Button>
              </td>
            </tr>
          </tfoot>
          </Table>
  )
 
}

export default PlayersForm