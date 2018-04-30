var arr = context.variableManager.getValue("Azure_metrics_csv").split(',')
var loopCount = parseInt(context.variableManager.getValue("Azure_metrics_loopCount"))
var iter = parseInt(context.variableManager.getValue("CollectMetricBatches_counter"))

var maxItems = parseInt(context.variableManager.getValue("Azure_maxItems"));

var startIndex=((iter-1)*maxItems);
var theseMetricsCsv = arr.slice(startIndex,startIndex+maxItems);
var theseMetricsCount = arr.length;

// Inject the computed value in a runtime variable
context.variableManager.setValue("Azure_theseMetricsCsv",theseMetricsCsv);
context.variableManager.setValue("Azure_theseMetricsCount",theseMetricsCount);