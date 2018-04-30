// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var arr = context.variableManager.getValue("Azure_resourceIds_csv").split("|")
context.variableManager.setValue("Azure_resourceIds_count", arr.length);