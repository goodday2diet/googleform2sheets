import { GoogleForm, GoogleSpreadSheets } from './config/development.js'

function GetSurveyKor() {
  const form = FormApp.openById(GoogleForm.url)
  const formResponses = form.getResponses()
  const formCount = formResponses.length

  const formResponse = formResponses[formCount - 1]
  const itemResponses = formResponse.getItemResponses()

  const responseArr = []
  itemResponses.forEach((itemResponse) => {
    const response = `Item: ${itemResponse.getItem().getTitle()}, Response: ${itemResponse.getResponse()}`
    const questionTitle = itemResponse.getItem().getTitle()
    const userResponse = itemResponse.getResponse()
    console.log(response)
    responseArr.push(userResponse)
  })

  SaveResponseSheets(responseArr)
}

function SaveResponseSheets(features) {
  const url = GoogleSpreadSheets.url
  const spreadsheets = SpreadsheetApp.openByUrl(url)
  const dataSheet = spreadsheets.getSheetByName('시트1')
  dataSheet.appendRow([...features, new Date()])
}
