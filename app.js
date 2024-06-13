// console.log('Hello Back to School');

// Create some constants which will be used later on to find out about the structure of the workbook
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

// creating variables for worksheets
let saleMap;
let totalSales;
let salesByProduct;
let salesBySegment;


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

    //assign sheets to variables
    saleMap = listSheets.find((ws) => ws.name == "SaleMap");
    totalSales = listSheets.find((ws) => ws.name == "Total Sales");
    salesByProduct = listSheets.find((ws) => ws.name == "SalesbyProduct");
    salesBySegment = listSheets.find((ws) => ws.name == "SalesbySegment");
}

viz.addEventListener("firstinteractive", logWorkbookInformation);


// Making the buttons work
// Tell JS Which buttons to look for

const oregonWashingtonButton = document.getElementById("oregon_and_washington")
const clearFilterButton = document.getElementById("clear_filter")
const undoButton = document.getElementById("undo")

function oregonWashFunction() {
    console.log(oregonWashingtonButton.value)

    //apply filters to sheets
    saleMap.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
    totalSales.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
    salesByProduct.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
    salesBySegment.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
}

function clearStateFilter() {
    //log what's pressed 
    console.log(clearFilterButton.value);

    saleMap.clearFilterAsync("State");
    totalSales.clearFilterAsync("State");
    salesByProduct.clearFilterAsync("State");
    salesBySegment.clearFilterAsync("State");
}

function undo() {
    //log whats being pressed
    console.log(undoButton.value);
    viz.undoAsync();
}

//event listener for my button
oregonWashingtonButton.addEventListener("click", oregonWashFunction);
clearFilterButton.addEventListener("click", clearStateFilter);
undoButton.addEventListener("click", undo);



