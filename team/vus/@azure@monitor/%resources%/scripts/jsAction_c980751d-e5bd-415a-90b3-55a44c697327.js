// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var num = parseInt(context.variableManager.getValue("IterateSubscriptions_counter"));

var csv = context.variableManager.getValue("Azure_subscriptions_csv");

var id = context.variableManager.getValue("Azure_SubscriptionIds_"+num);
var name = context.variableManager.getValue("Azure_SubscriptionNames_"+num);

csv = (csv != null ? csv : ""); csv += (csv.length > 0 ? "|" : "") + (id + ";" + name);

context.variableManager.setValue("Azure_currentSubscriptionId", id);
context.variableManager.setValue("Azure_subscriptions_csv", csv);