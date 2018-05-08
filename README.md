
# neoload_azure
A simple example of DIY monitoring via REST APIs (Azure Monitoring).

To run, install NeoLoad. Clone this repo, then open up the AzureLoadMonitor.nlp project file in NeoLoad.

You may also use File > Import Project to bring these artifacts into another
 project to add on Azure monitoring to existing load test suites.

Change the following variables:

 - AzureApplicationID
 [Resource/Group > IAM > Service Principal > Properties > Application ID]

 - AzureClientID
 [Azure Active Directory > Properties > Directory ID]

 - AzureSecretKey
 [Azure Active Directory > App Registrations > Item > Settings > Keys > Item > Secret Key]

Add a new population using the 'AzureMonitor' User Path with 1VU constant load to your scenario, running from localhost (your controller).

Upon running, you should see Azure-related metrics available in the 'External Data' metrics tab from both the Runtime graphs editor and similarly after the test is completed in the Results.

## Credits

Solution is based on:  [http://devchat.live/en/2017/02/27/access-metrics-using-azure-monitor-rest-api/](https://na01.safelinks.protection.outlook.com/?url=http%3A%2F%2Fdevchat.live%2Fen%2F2017%2F02%2F27%2Faccess-metrics-using-azure-monitor-rest-api%2F&data=02%7C01%7CMadhuri.X.Swarna%40questdiagnostics.com%7Cdc080e8552a24544300b08d5b05cdeaf%7Cb68c6481b22b46b38c4c0024bb9b9b1f%7C1%7C0%7C636608835292353028&sdata=usisglZnwqs81RSuieWUl2b7woMSDR8Uz47WPBBtgPM%3D&reserved=0)

You may need to create/permission tokens for use in monitoring:  [https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal](https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fazure%2Fazure-resource-manager%2Fresource-group-create-service-principal-portal&data=02%7C01%7CMadhuri.X.Swarna%40questdiagnostics.com%7Cdc080e8552a24544300b08d5b05cdeaf%7Cb68c6481b22b46b38c4c0024bb9b9b1f%7C1%7C0%7C636608835292353028&sdata=ZwpJ7%2B9472sc3Ag4uR8FSxpOCcDsp60S%2B5xN1YYyKgg%3D&reserved=0)

https://www.netiq.com/communities/cool-solutions/creating-application-client-id-client-secret-microsoft-azure-new-portal/
