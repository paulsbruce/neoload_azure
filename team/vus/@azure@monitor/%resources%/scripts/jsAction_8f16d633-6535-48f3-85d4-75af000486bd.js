var valuesCount = parseInt(context.variableManager.getValue("Azure_value_names_matchNr"));
var arr = [];
for(var i=1; i<=valuesCount; i++) {
    arr[arr.length] = context.variableManager.getValue("Azure_value_names_"+i)
}
var csv = arr.join(',');
var maxItems = 5;
var ceiling = parseInt(Math.ceil(parseFloat(arr.length) / maxItems));
logger.debug(valuesCount)
logger.debug(ceiling)
context.variableManager.setValue("Azure_maxItems",maxItems);
context.variableManager.setValue("Azure_metrics_loopCount", ceiling);
context.variableManager.setValue("Azure_metrics_csv",csv);