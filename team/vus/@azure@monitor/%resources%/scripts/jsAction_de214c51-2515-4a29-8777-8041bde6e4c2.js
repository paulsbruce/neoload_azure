// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager

var now = new Date();
var then = new Date(Date.now() + (-2*60*1000))

context.variableManager.setValue("AzureStartTime", then.toISOString());
context.variableManager.setValue("AzureEndTime", now.toISOString());