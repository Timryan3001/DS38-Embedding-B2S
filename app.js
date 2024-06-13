// console.log('Hello Back to School');

// Create some constants which will be used later on to find out about the structure of the workbook
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

//Create a function which will log information about the workbook

function logWorkbookInformation() {
    workbook = viz.workbook;
    console.log(`The workbook name is : "${workbook.name}"`)

    //find array of dashboards within workbook
    let sheets = workbook.publishedSheetsInfo;
    sheets.forEach((element) => {
        index = element.index;
        console.log(`The sheet with index [${index}] is "${element.name}"`);
    });

    //find the active sheet
    vizActiveSheet = workbook.activeSheet;
    console.log(`the active sheet is ${vizActiveSheet.name}`)

    //find array of sheets within dashboards
    listSheets = vizActiveSheet.worksheets;
    listSheets.forEach((element) => {
        index = element.index;
        console.log(`The worksheet with index [${index}] is "${element.name}"`)
    })
}

viz.addEventListener("firstinteractive", logWorkbookInformation);