var newTS = context.variableManager.getValue("newTS");
if (newTS==null) 
{
 context.fail("Variable 'newTS' not found");
}
writeFile(newTS+";was the value from my test");