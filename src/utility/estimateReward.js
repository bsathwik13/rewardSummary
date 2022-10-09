const estimateAmount = (transactionValue) => {
    if (!transactionValue || transactionValue <= 50) {
      return 0;
    } else if (transactionValue <= 100) {
      return (transactionValue - 50) * 1;
    } else {
      return 50 + (transactionValue - 100) * 2;
    }
  };
  
  export default estimateAmount;
  