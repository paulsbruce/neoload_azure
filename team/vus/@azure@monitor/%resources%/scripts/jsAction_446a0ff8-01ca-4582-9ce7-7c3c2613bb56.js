var names = context.variableManager.getValue("Azure_theseMetricsCsv").split(',');
var index = parseInt(context.variableManager.getValue("ExtractIndividualMetrics_counter"))-1;
var values = context.variableManager.getValue("Azure_theseExtractedValuesCsv").split(',');
var name = names[index];
var value = values[index];

// Inject the computed value in a runtime variable
context.variableManager.setValue("Azure_thisMetricName",name);
context.variableManager.setValue("Azure_thisMetricValue",value);