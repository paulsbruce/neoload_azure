// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var TS = context.variableManager.getValue("CurrentDate");
if (TS==null) {
        context.fail("Variable 'CurrentDate' not found");
}

var newTS = TS.substring(0,10);
logger.debug("ComputedValue="+newTS);

// Inject the computed value in a runtime variable
context.variableManager.setValue("newTS",newTS);