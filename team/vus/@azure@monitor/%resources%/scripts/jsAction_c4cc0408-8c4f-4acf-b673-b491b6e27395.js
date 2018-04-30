var valuesCount = parseInt(context.variableManager.getValue("Azure_theseExtractedValues_matchNr"));
var arr = [];
for(var i=1; i<=valuesCount; i++) {
    arr[arr.length] = context.variableManager.getValue("Azure_theseExtractedValues_"+i)
}
var csv = arr.join(',');

context.variableManager.setValue("Azure_theseExtractedValuesCsv",csv);