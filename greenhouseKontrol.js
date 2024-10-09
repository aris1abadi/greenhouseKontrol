//Init variables.
cfg.MUI
cfg.Light
app.LoadPlugin('MQTT')
app.LoadPlugin('UIExtras')
app.LoadScript('varHandle.js')
app.LoadScript('dbHandle.js')
app.LoadScript('nodeHandle.js')
app.LoadScript('bluethootHandle.js')
app.LoadScript('kontrolHandle.js')
app.LoadScript('mySensorsHandle.js')
app.LoadScript('mqttHandle.js')
app.LoadScript('uiHandle.js')


//Set Card data.

//Called when application is started.
function OnStart()
{
   //Switch off debugging for max performance.
   app.SetDebugEnabled( false )
   app.EnableBackKey( false )
   color = MUI.colors.teal
   app.InitializeUIKit(color.teal)
   uix = app.CreateUIExtras()
   //var androidID = ;
    
    // Menampilkan Android ID di layar
    //app.ShowPopup("Android ID: " + androidID); 
    loadDB()


   loadUi()
   loadBT() 
   //app.ShowPopup(JSON.stringify(dataTask[3]))
   

   setTimeout(() => bt_connect(),3000)
   setTimeout(() => loadMQTT(),5000)


   setInterval(() =>{cekAutoRun()},1000)

   
}

//Called when the back key is pressed.
function OnBack()
{
	if(flippedPos !== null) FlipToBack()
	else app.Exit()
}
