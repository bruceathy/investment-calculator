export default function UserInput() {
  return (
    <div id="user-input">
      <label htmlFor="initial-investment">Initial Investment</label>
      <input type="number" id="initial-investment" />
      <label htmlFor="annual-investment">Annual Investment</label>
      <input type="number" id="annual-investment" />
      <label htmlFor="expected-return">Expected Return</label>
      <input type="number" id="expected-return" />
      <label htmlFor="duration">Duration</label>
      <input type="number" id="duration" />
    </div>
  );
}
