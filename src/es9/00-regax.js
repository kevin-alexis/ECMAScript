const regex = /(\d{4})-(\d{2})-(\d{2})/;
//year-month-day

const matchers = regex.exec("2023-04-09");

//.table makes a table
console.table(matchers);
