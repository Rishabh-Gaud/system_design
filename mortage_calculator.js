import React, {useState} from "react";

function MortgageCalculator() {
  const [formData, setFormData] = useState({
    amount: 0,
    rate: 0,
    term: 0,
  });
  const [mortageVal, setMortageVal] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const getMortagePayment = (data) => {
    const { amount, rate, term } = data;
    let P = Number(amount);
    let r = Number(rate) / 12 / 100;
    let n = Number(term) * 12;
    const powerFactor = Math.pow(1 + r, n);
    const factor = powerFactor / (powerFactor - 1);
    const M = P * r * factor;
    return M;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(formData.amount) < 0 || Number(formData.term) < 0 || Number(formData.rate) <= 0) {
      setError(true);
      setMortageVal(null);  // also clear previous value on error
    } else {
      setError(false);
      const computedVal = (getMortagePayment(formData)).toFixed(2);
      setMortageVal(computedVal);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Loan amount (in INR): </label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="Loan amount (in INR)"
          value={formData.amount}
          onChange={handleChange}
        />
        <br /><br />

        <label htmlFor="rate">Annual interest rate (in %): </label>
        <input
          id="rate"
          name="rate"
          type="number"
          placeholder="Loan rate (in %)"
          value={formData.rate}
          onChange={handleChange}
        />
        <br /><br />

        <label htmlFor="term">Loan term (in years): </label>
        <input
          id="term"
          name="term"
          type="number"
          placeholder="Loan term (in years)"
          value={formData.term}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Calculate</button>
      </form>

      {error ? (
        <div style={{ color: "red" }}>Monthly payment: input invalid</div>
      ) : (
        <div aria-label="result">{mortageVal}</div>
      )}
    </div>
  );
}

export default MortgageCalculator;
