//app.LoadPlugin('MQTT')
/*

format perintah kontrol
cmd
abadinet-in/KA0001/autoTemperature/0/enable > 1/0(1 enable,0 didable)
response
abadinet-out/KA0001/autoTemperature/0/enable ..1/0


*/
const androidID = app.GetDeviceId()

const clientId =  androidID
const kontrolId = 'KA' + androidID.substr(androidID.length - 4, androidID.length).toUpperCase()

const subMqtt = 'abadinet-in/' + kontrolId + '/#'
const pubMqtt = 'abadinet-out/' + kontrolId
const options = {
    keepalive: 30,
    clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 5000,
    connectTimeout: 30 * 1000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    },
    rejectUnauthorized: false
}

function loadMQTT() {
    mqttClient = mqtt.connect('ws://mqtt.eclipseprojects.io/mqtt', options)
    mqttClient.on('error', onError)
    mqttClient.on('disconnect', onDisconnect)
    mqttClient.on('connect', onConnect)
    mqttClient.on('message', onMsg)
}

function onConnect() {
    app.ShowPopup("remote connected")
    mqttStatus = true;
    mqttClient.subscribe(subMqtt, { qos: 0 })
    let pubStatus = pubMqtt + "/kontrol/0/id"

    //cekClientId();

    mqttClient.publish(pubStatus, clientId, { qos: 0, retain: false })
    //kirimMsg("kontrol", 0, "getAllStatus", "1")
}

function onDisconnect() {
    mqttStatus = false;
    app.ShowPopup("remote disconnected")
    console.log('client disconect')
}

function onError(err) {
    console.log(err)
    mqttStatus = false;
    mqttClient.end()
}

function kirimKeClient(type,num,cmd,msg){    
        let ms = pubMqtt + type + '/' + num + '/' + cmd      
        
        mqttClient.publish(ms, msg, { qos: 0, retain: false })
       
}

function onMsg(topic, message) {
    app.ShowPopup(topic + '>' + message)
    cekInputMsg(topic, message)
}