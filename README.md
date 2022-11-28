## Connect between Google form and Google spread sheets
This is based on JS and Google App Script
1. Get response data from Google form
2. Save the data into spread sheets

### Get response data from Google form
- Open the Google form
```js
const form = FormApp.openById(GoogleForm.url)
```
- Get the user responses
```js
...
const itemResponses = formResponse.getItemResponses()
 ...
  itemResponses.forEach((itemResponse) => {
    const response = `Item: ${itemResponse.getItem().getTitle()}, Response: ${itemResponse.getResponse()}`
    const questionTitle = itemResponse.getItem().getTitle()
    const userResponse = itemResponse.getResponse()
  })
```
### Save the data into spread sheets
- Collect the responses as array
```js
...
const responseArr = []
 ...
  itemResponses.forEach((itemResponse) => {
    const response = `Item: ${itemResponse.getItem().getTitle()}, Response: ${itemResponse.getResponse()}`
    const questionTitle = itemResponse.getItem().getTitle()
    const userResponse = itemResponse.getResponse()

    responseArr.push(userResponse)
  })
```
- Append the data to the spread sheets
```js
...
SaveResponseSheets(responseArr)

function SaveResponseSheets(features) {
  const url = GoogleSpreadSheets.url
  const spreadsheets = SpreadsheetApp.openByUrl(url)
  const dataSheet = spreadsheets.getSheetByName('시트1')
  dataSheet.appendRow([...features, new Date()])
}
```
