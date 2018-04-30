// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var num = parseInt(context.variableManager.getValue("IterateResources_counter"));

var csv = context.variableManager.getValue("Azure_resourceIds_csv");

var id = context.variableManager.getValue("Azure_resourceIds_"+num);

csv = (csv != null ? csv : ""); csv += (csv.length > 0 ? "|" : "") + id;

context.variableManager.setValue("Azure_resourceIds_csv", csv);