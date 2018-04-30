// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var num = parseInt(context.variableManager.getValue("IterateGroups_counter"));

var name = context.variableManager.getValue("Azure_resourceGroupNames_"+num);

context.variableManager.setValue("Azure_currentResourceGroupName", name);