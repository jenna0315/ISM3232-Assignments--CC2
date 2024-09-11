//Initial Logic for Calculating the Tip
let customerBill = 295 //number
let customertip = (300 < customerBill < 50) ? (.2*customerBill) : (.15*customerBill) 
console.log("Initial Customer Tip:",customertip)

//Add output functionality to display bill, tip, and total
let customerTotal = customerBill+customertip //number
let customerSummary = `Customer Summary:
The bill was $${customerBill} 
The tip was $${customertip}
The total was $${customerTotal}`
console.log(customerSummary)

//Create and test calculateTip function
let Bill = 100
function calculateTip(Bill,tip){return Bill+(300 < Bill < 50) ? (.2*Bill) : (.15*Bill)}
let  tip = (300 < Bill < 50) ? (.2*Bill) : (.15*Bill)
console.log("Test Customer Bill:",Bill)
console.log("Test Customer Tip:",calculateTip(Bill,tip))

//Implement and populate arrays for bills, tips, and totals
let bills = [275, 40, 430]
const tips = bills.map(bills=>calculateTip(bills))
let totals = bills.map((bills,index) => ((bills + tips[index])))
console.log("Customer Bills:",bills)
console.log("Customer Tips:",tips)
console.log("Customer Totals:",totals)

//Implement and populate arrays for bills, tips, and totals dataset #2
let bills2 = [125, 555, 44]
const tips2 = bills2.map(bills2=>calculateTi (bills2 + tips2[index])))
console.log("Customer Bills Dataset 2:",ills2)
console.log("Customer Tips Dataset 2:",tips2)
console.log("Customer Totals Dataset 2:",totals2)



//Implement calculateAverageSales function
function calculateAverageSales(salesRecords)
{let totalSales = salesRecords.reduce((sum,sales)=> sum + sales,0};
let Average = totalSales/salesRecords.length;
return Average;
let salesRecordsData = [111,222,333,444]
let AverageSales = calculateAverageSales(salesRecordsData);
console.log('Average Sales',AverageSales)
