function loadDB() {
    app.ShowPopup('loadDb')
    greenhouseDB = app.OpenDatabase("myGreenhouseData")

    greenhouseDB.ExecuteSql('CREATE TABLE IF NOT EXISTS dataTask(id INTEGER PRIMARY KEY AUTOINCREMENT,enable INTEGER,aktuatorUse1 INTEGER,aktuatorUse2 INTEGER,status INTEGER,durasiCount INTEGER,' +
        'jadwalAktif INTEGER,jadwal TEXT,sensorUse1 INTEGER,sensorUse2 INTEGER,targetOn INTEGER,targetOff INTEGER,nama TEXT,type TEXT);')
        //saveNewDB()
    greenhouseDB.ExecuteSql('select * from dataTask;',[],OnResult)
    


}

function saveNewDB(){
     greenhouseDB.ExecuteSql('INSERT INTO dataTask (enable,aktuatorUse1,aktuatorUse2,status,durasiCount,jadwalAktif,jadwal,sensorUse1,sensorUse2,targetOn,targetOff,nama,type)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',[0, 1, 2, 0, 0, 0, "12,35,30,0,0,0,0,0,0,0,0,0,0,0,0", 1,0, 80,10, "Kontrol Temperature", "Temperature"],null,OnError)

     greenhouseDB.ExecuteSql('INSERT INTO dataTask (enable,aktuatorUse1,aktuatorUse2,status,durasiCount,jadwalAktif,jadwal,sensorUse1,sensorUse2,targetOn,targetOff,nama,type)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',[0, 3, 4, 0, 0, 0, "12,35,30,0,0,0,0,0,0,0,0,0,0,0,0", 1,0, 80,10, "Kontrol Humidity", "Humidity"],null,OnError)

    greenhouseDB.ExecuteSql('INSERT INTO dataTask (enable,aktuatorUse1,aktuatorUse2,status,durasiCount,jadwalAktif,jadwal,sensorUse1,sensorUse2,targetOn,targetOff,nama,type)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',[0, 5, 6, 0, 0, 0, "12,35,30,0,0,0,0,0,0,0,0,0,0,0,0", 1,0, 80,10, "Kontrol Lengas", "Lengas"],null,OnError)

    greenhouseDB.ExecuteSql('INSERT INTO dataTask (enable,aktuatorUse1,aktuatorUse2,status,durasiCount,jadwalAktif,jadwal,sensorUse1,sensorUse2,targetOn,targetOff,nama,type)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',[0, 1, 2, 0, 0, 0, "12,35,30,0,0,0,0,0,0,0,0,0,0,0,0", 1,0, 80,10, "Kontrol Genangan", "Genangan"],null,OnError)

    greenhouseDB.ExecuteSql('INSERT INTO dataTask (enable,aktuatorUse1,aktuatorUse2,status,durasiCount,jadwalAktif,jadwal,sensorUse1,sensorUse2,targetOn,targetOff,nama,type)' +
    'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',[0, 3, 4, 0, 0, 0, "12,35,30,0,0,0,0,0,0,0,0,0,0,0,0", 1,0, 80,10, "Kontrol Intermittent", "Intermittent"],null,OnError)
}

function OnResult(results){
    let s = ''
    const len = results.rows.length

    for(let i = 0;i < len;i++){
        if(results.rows.item(i).type === 'Temperature'){
            autoTemperature = results.rows.item(i)
            app.ShowPopup('load auto temperature dari database')
        }else if(results.rows.item(i).type === 'Humidity'){
            autoHumidity = results.rows.item(i)
        }else if(results.rows.item(i).type === 'Lengas'){
            autoLengas = results.rows.item(i)
        }else if(results.rows.item(i).type === 'Genangan'){
            autoGenangan = results.rows.item(i)
        }else if(results.rows.item(i).type === 'Intermittent'){
            autoIntermittent = results.rows.item(i)
        }else if(results.rows.item(i).type === 'autoMix'){
            autoAbMix = results.rows.item(i)
        }
    }
   // app.ShowPopup(JSON.stringify(results.rows.item(0).type))
}

function updateDB(){
    
}

function OnError(msg){
    app.Alert("db error " + msg)
}