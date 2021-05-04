const ATMDeposit = ({ onChange, isDeposit, validTransaction }) => {
  const choice = ['Deposit', 'Withdraw'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <>
    <label>
      {choice[Number(!isDeposit)]}:
      <input id="number-input" type="number" onChange={onChange} style={{ width: '5rem' }} min="0"></input>
    </label>
    <hr />
    <input type="submit" value="Submit" id="submit-input" disabled={!validTransaction}></input>
    </>
  );
};

export default ATMDeposit