import React from 'react';
import ATMDeposit from './ATMDeposit';
import Card from 'react-bootstrap/Card';

const Currency = ({currentType}) => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `${currentType} Balance: ${totalState} `;
  const handleChange = (event) => {
    const returnValue = event.target.value;
    console.log(`handleChange ${returnValue}`);
    setDeposit(Number(returnValue));
    if(returnValue <= 0){
      setValidTransaction(false);
      return;
    }
    else if(atmMode === "Withdraw" && returnValue > totalState) {
      setValidTransaction(false);
      return;
    }
    else {
      setValidTransaction(true);
      return;
    }
  };

  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    const selectedValue = event.target.value;
    setAtmMode(selectedValue);
    if(selectedValue === "Deposit"){
      setIsDeposit(true);
    } else if (selectedValue === "Withdraw"){
      setIsDeposit(false);
    }
  }
  return (
    <Card>
      <Card.Body>
        <form onSubmit={handleSubmit}>
        <Card.Title id="total">{status}</Card.Title>
        <Card.Text>
          <label>Action:</label>
          <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">Deposit</option>
            <option id="withdraw-selection" value="Withdraw">Withdraw</option>
          </select>
          { atmMode &&
          <>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit} validTransaction={validTransaction}></ATMDeposit>
            </>
          }
        </Card.Text>
      </form>
      </Card.Body>
    </Card>
    
  );
};

export default Currency