var user_global = context.variableManager.getValue("users_global.Username");
var user_local = context.variableManager.getValue("users_local.Username");

var s = "";

s += "LG: " + context.currentLG.name + ", Zone: " + context.currentLG.getZoneName() + "; ";
s += "VU: " + context.currentVU.name + ", " + context.currentVU.getCurrentIteration() + ", " + context.currentVU.getElapsedTime() + "; ";
s += "user_global: " + user_global + ", " + "user_local: " + user_local + "; ";

logger.debug("Log-d: " + s);