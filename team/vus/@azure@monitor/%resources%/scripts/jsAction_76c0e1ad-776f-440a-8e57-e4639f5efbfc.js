var num = parseInt(context.variableManager.getValue("CollectResources_counter"));
var arr = context.variableManager.getValue("Azure_resourceIds_csv").split("|");
var thisResourceId = arr[num-1];

var parts = thisResourceId.split('/'); // Example: /subscriptions/39273447-39bf-4a78-bcec-f08a7bdf6db7/resourceGroups/NeoLoadDemoGroup/providers/Microsoft.Web/sites/NeoLoadDemo
var subscriptionId = parts[2];
var resourceGroup = parts[4];
var resourceName = parts[parts.length-1];

context.variableManager.setValue("Azure_SubscriptionRef", subscriptionId);
var count = parseInt(context.variableManager.getValue("Azure_SubscriptionIds_matchNr"));
for(var i=1; i<=count; i++) {
    var id = context.variableManager.getValue("Azure_SubscriptionIds_"+i);
    logger.debug("id: " + id + " == " + "ssid: " + subscriptionId);
    if(id==subscriptionId) {
        var name = context.variableManager.getValue("Azure_SubscriptionNames_"+i);
        logger.debug("Azure_SubscriptionNames_"+i+": " + name)
        context.variableManager.setValue("Azure_SubscriptionRef", name);
        break;
    }
}

context.variableManager.setValue("Azure_ResourceGroup", resourceGroup);
context.variableManager.setValue("Azure_ResourceName", resourceName);
context.variableManager.setValue("Azure_ResourceID", thisResourceId);