const ShowExpense = ({ allExpenses }) => {
  return (
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>Expense Name</th>
          <th>Expense Value (₹)</th>
        </tr>
      </thead>

      <tbody>
        {
            allExpenses.length > 0 && allExpenses.map((val) => {
                return(
                    <tr>
                        <td>{val?.expenseName}</td>
                        <td>{val?.expenseValue}</td>
                    </tr>
                )
            })
        }
      </tbody>

      <tfoot>
        <tr>
          <th>Total</th>
          <th>₹5500</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ShowExpense;
