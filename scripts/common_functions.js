var lock = new java.util.concurrent.locks.ReentrantLock();
function writeFile(text) 
{
var date = context.variableManager.getValue("CurrentDate");
if (date==null) 
{
 context.fail("Variable 'CurrentDate' not found");
}
lock.lock();
var writer = new java.io.FileWriter("CPT_output_log.txt",true);
writer.write(date+";"+context.currentVU.id+";"+text);
writer.write("\r\n");
writer.close();
 
lock.unlock();
}
