let tmp

function getLogTime() {
    const d = new Date();
    const tm = d.toLocaleDateString() + ' ' + d.toLocaleTimeString().replaceAll('.', ':')
    return tm
}
function cekMsg(msg) {
    let message = msg.split(';')
    nodeId = message[0];
    childId = message[1]
    cmd = message[2]
    type = message[4]
    payload = message[5]

    if (cmd == presentations) {

        if (type == S_BINARY) {
            if ((aktuator1.nodeId == nodeId) && (aktuator1.childId == childId)) {
                tmp = 'aktuator 1 present'
                //txt.Log(tmp);

                aktuator1.status = 1;
            } else if ((aktuator2.nodeId == nodeId) && (aktuator2.childId == childId)) {
                tmp = 'aktuator 2 present'
                //txt.Log(tmp);

                aktuator2.status = 1;
            } else if ((aktuator3.nodeId == nodeId) && (aktuator3.childId == childId)) {
                tmp = 'aktuator 3 present'
                //txt.Log(tmp);

                aktuator3.status = 1;
            } else if ((aktuator4.nodeId == nodeId) && (aktuator4.childId == childId)) {
                tmp = 'aktuator 4 present'
                //txt.Log(tmp);

                aktuator4.status = 1;
            } else if ((aktuator5.nodeId == nodeId) && (aktuator5.childId == childId)) {
                const d = new Date();
                tmp = 'aktuator 5 present ' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString().replaceAll('.', ':')
                //txt.Log(tmp);

                aktuator5.status = 1;
            } else if ((aktuator6.nodeId == nodeId) && (aktuator6.childId == childId)) {
                tmp = 'aktuator 6 present ' + getLogTime()
                //txt.Log(tmp);

                aktuator6.status = 1;
            } else if ((aktuator7.nodeId == nodeId) && (aktuator7.childId == childId)) {
                tmp = 'aktuator 7 present'
                //txt.Log(tmp);

                aktuator7.status = 1;
            } else if ((aktuator8.nodeId == nodeId) && (aktuator8.childId == childId)) {
                tmp = 'aktuator 8 present'
                //txt.Log(tmp);

                aktuator8.status = 1;
            } else if ((aktuator9.nodeId == nodeId) && (aktuator9.childId == childId)) {
                tmp = 'aktuator 9 present'
                //txt.Log(tmp);

                aktuator9.status = 1;
            } else if ((aktuator10.nodeId == nodeId) && (aktuator10.childId == childId)) {
                tmp = 'aktuator 10 present'
                //txt.Log(tmp);

                aktuator10.status = 1;
            } else if ((aktuator11.nodeId == nodeId) && (aktuator11.childId == childId)) {
                tmp = 'aktuator 11 present'
                //txt.Log(tmp);

                aktuator11.status = 1;
            } else if ((aktuator12.nodeId == nodeId) && (aktuator12.childId == childId)) {
                tmp = 'aktuator 12 present'
                //txt.Log(tmp);

                aktuator12.status = 1;
            } else if ((aktuator13.nodeId == nodeId) && (aktuator13.childId == childId)) {
                tmp = 'aktuator 13 present'
                //txt.Log(tmp);

                aktuator13.status = 1;
            } else if ((aktuator14.nodeId == nodeId) && (aktuator14.childId == childId)) {
                tmp = 'aktuator 14 present'
                //txt.Log(tmp);

                aktuator14.status = 1;
            } else if ((aktuator15.nodeId == nodeId) && (aktuator15.childId == childId)) {
                tmp = 'aktuator 15 present'
                //txt.Log(tmp);

                aktuator15.status = 1;
            } else if ((aktuator16.nodeId == nodeId) && (aktuator16.childId == childId)) {
                tmp = 'aktuator 16 present'
                //txt.Log(tmp);

                aktuator16.status = 1;
            }


        } else if (type == 17) {
            tmp = 'Node ' + nodeId + ' Mysersors version  ' + payload
            //txt.Log(tmp);
        }

    } else if (cmd == internal) {
        if (type == 11) {
            tmp = 'Node ' + nodeId + ' Nama ' + payload
            //txt.Log(tmp);
        } else if (type == 12) {
            tmp = 'Node ' + nodeId + ' Versi ' + payload
            //txt.Log(tmp);
        }

    } else if (cmd == set) {
        if (type == V_STATUS) {//cek aktuator

            if ((aktuator1.nodeId == nodeId) && (aktuator1.childId == childId)) {
                tmp = 'aktuator 1 update'
                //txt.Log(tmp);

                aktuator1.status = 1;
            } else if ((aktuator2.nodeId == nodeId) && (aktuator2.childId == childId)) {
                tmp = 'aktuator 2 update'
                //txt.Log(tmp);

                aktuator2.status = 1;
            } else if ((aktuator3.nodeId == nodeId) && (aktuator3.childId == childId)) {
                tmp = 'aktuator 3 update'
                //txt.Log(tmp);

                aktuator3.status = 1;
            } else if ((aktuator4.nodeId == nodeId) && (aktuator4.childId == childId)) {
                tmp = 'aktuator 4 update'
                //txt.Log(tmp);

                aktuator4.status = 1;
            } else if ((aktuator5.nodeId == nodeId) && (aktuator5.childId == childId)) {
                tmp = 'aktuator 5 update'
                //txt.Log(tmp);

                aktuator5.status = 1;
            } else if ((aktuator6.nodeId == nodeId) && (aktuator6.childId == childId)) {
                tmp = 'aktuator 6 update'
                //txt.Log(tmp);

                aktuator6.status = 1;
            } else if ((aktuator7.nodeId == nodeId) && (aktuator7.childId == childId)) {
                tmp = 'aktuator 7 update'
                //txt.Log(tmp);

                aktuator7.status = 1;
            } else if ((aktuator8.nodeId == nodeId) && (aktuator8.childId == childId)) {
                tmp = 'aktuator 8 update'
                //txt.Log(tmp);

                aktuator8.status = 1;
            } else if ((aktuator9.nodeId == nodeId) && (aktuator9.childId == childId)) {
                tmp = 'aktuator 9 update'
                //txt.Log(tmp);

                aktuator9.status = 1;
            } else if ((aktuator10.nodeId == nodeId) && (aktuator10.childId == childId)) {
                tmp = 'aktuator 10 update'
                //txt.Log(tmp);

                aktuator10.status = 1;
            } else if ((aktuator11.nodeId == nodeId) && (aktuator11.childId == childId)) {
                tmp = 'aktuator 11 update'
                //txt.Log(tmp);

                aktuator11.status = 1;
            } else if ((aktuator12.nodeId == nodeId) && (aktuator12.childId == childId)) {
                tmp = 'aktuator 12 update'
                //txt.Log(tmp);

                aktuator12.status = 1;
            } else if ((aktuator13.nodeId == nodeId) && (aktuator13.childId == childId)) {
                tmp = 'aktuator 13 update'
                //txt.Log(tmp);

                aktuator13.status = 1;
            } else if ((aktuator14.nodeId == nodeId) && (aktuator14.childId == childId)) {
                tmp = 'aktuator 14 update'
                //txt.Log(tmp);

                aktuator14.status = 1;
            } else if ((aktuator15.nodeId == nodeId) && (aktuator15.childId == childId)) {
                tmp = 'aktuator 15 update'
                //txt.Log(tmp);

                aktuator15.status = 1;
            } else if ((aktuator16.nodeId == nodeId) && (aktuator16.childId == childId)) {
                tmp = 'aktuator 16 update'
                //txt.Log(tmp);

                aktuator16.status = 1;
            }
        } else if (type == V_TRIPPED) {//cek sensor genangan

            if ((sensorGenanganL1.nodeId == nodeId) && (sensorGenanganL1.childId == childId)) {
                //update genangan low 1
                sensorGenanganL1.status = 1;
                sensorGenanganL1.val = parseInt(payload)
                sensorGenanganL1.lastUpdate = getLogTime();
                console.log('update sensor genangan L1 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorGenanganL2.nodeId == nodeId) && (sensorGenanganL2.childId == childId)) {
                //update genangan low 2
                sensorGenanganL2.status = 1;
                sensorGenanganL2.val = parseInt(payload)
                sensorGenanganL2.lastUpdate = getLogTime();
                console.log('update sensor genangan L2 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorGenanganL3.nodeId == nodeId) && (sensorGenanganL3.childId == childId)) {
                //update genangan low 2
                sensorGenanganL3.status = 1;
                sensorGenanganL3.val = parseInt(payload)
                sensorGenanganL3.lastUpdate = getLogTime();
                console.log('update sensor genangan L3 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorGenanganL4.nodeId == nodeId) && (sensorGenanganL4.childId == childId)) {
                //update genangan low 2
                sensorGenanganL4.status = 1;
                sensorGenanganL4.val = parseInt(payload)
                sensorGenanganL4.lastUpdate = getLogTime();
                console.log('update sensor genangan L4 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorGenanganH1.nodeId == nodeId) && (sensorGenanganH1.childId == childId)) {
                //update genangan low 2
                sensorGenanganH1.status = 1;
                sensorGenanganH1.val = parseInt(payload)
                sensorGenanganH1.lastUpdate = getLogTime();
                console.log('update sensor genangan H1 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorGenanganH2.nodeId == nodeId) && (sensorGenanganH2.childId == childId)) {
                //update genangan low 2
                sensorGenanganH2.status = 1;
                sensorGenanganH2.val = parseInt(payload)
                sensorGenanganH2.lastUpdate = getLogTime();
                console.log('update sensor genangan H2 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorGenanganH3.nodeId == nodeId) && (sensorGenanganH3.childId == childId)) {
                //update genangan low 2
                sensorGenanganH3.status = 1;
                sensorGenanganH3.val = parseInt(payload)
                sensorGenanganH3.lastUpdate = getLogTime();
                console.log('update sensor genangan H3 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorGenanganH4.nodeId == nodeId) && (sensorGenanganH4.childId == childId)) {
                //update genangan low 2
                sensorGenanganH4.status = 1;
                sensorGenanganH4.val = parseInt(payload)
                sensorGenanganH4.lastUpdate = getLogTime();
                console.log('update sensor genangan H4 Val = ' + payload + ' ' + getLogTime())
            }

        } else if (type == V_LEVEL) {//cek lengas
            if ((sensorLengas1.nodeId == nodeId) && (sensorLengas1.childId == childId)) {

                sensorLengas1.status = 1;
                sensorLengas1.value = parseInt(payload)
                sensorLengas1.lastUpdate = getLogTime();
                console.log('update sensor Lengas 1 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorLengas2.nodeId == nodeId) && (sensorLengas2.childId == childId)) {

                sensorLengas2.status = 1;
                sensorLengas2.value = parseInt(payload)
                sensorLengas2.lastUpdate = getLogTime();
                console.log('update sensor Lengas 2 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorLengas3.nodeId == nodeId) && (sensorLengas3.childId == childId)) {

                sensorLengas3.status = 1;
                sensorLengas3.value = parseInt(payload)
                sensorLengas3.lastUpdate = getLogTime();
                console.log('update sensor Lengas 3 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorLengas4.nodeId == nodeId) && (sensorLengas4.childId == childId)) {

                sensorLengas4.status = 1;
                sensorLengas4.value = parseInt(payload)
                sensorLengas4.lastUpdate = getLogTime();
                console.log('update sensor Lengas 4 Val = ' + payload + ' ' + getLogTime())
            }else if((nodeId == sensorLengasIntermittent.nodeId) && (childId == sensorLengasIntermittent.childId)){
                sensorLengasIntermittent.status = 1
                let valueTes = Math.floor(scale(parseInt(payload),[sensorLengasIntermittent.kalMin,sensorLengasIntermittent.kalMax],[0,100]))
                if(valueTes < 0){
                    valueTes = 0
                }
                sensorLengasIntermittent.value =  valueTes
                sensorLengasIntermittent.lastUpdate = getLogTime();
                console.log('update moisture intermittent Val = ' + payload + '> '+ sensorLengasIntermittent.value + ' '+ getLogTime())
            }

        } else if (type == V_VOLUME) {//cek flow meter (liter)
            if ((sensorFlow1.nodeId == nodeId) && (sensorFlow1.childId == childId)) {

                sensorFlow1.status = 1;
                sensorFlow1.value = getVolume(sensorFlow1.kalMin, parseInt(payload))
                sensorFlow1.lastUpdate = getLogTime();
                txtDebug.SetText("update flow1 sensor value = " + payload)
                console.log('update sensor Flow 1 Val = ' + getVolume(sensorFlow1.kalMin, parseInt(payload)) + ' ' + getLogTime())
            } else if ((sensorFlow2.nodeId == nodeId) && (sensorFlow2.childId == childId)) {

                sensorFlow2.status = 1;
                sensorFlow2.value = getVolume(sensorFlow2.kalMin, parseInt(payload))
                sensorFlow2.lastUpdate = getLogTime();
                console.log('update sensor Flow 2 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorFlow3.nodeId == nodeId) && (sensorFlow3.childId == childId)) {

                sensorFlow3.status = 1;
                sensorFlow3.value = getVolume(sensorFlow3.kalMin, parseInt(payload))
                sensorFlow3.lastUpdate = getLogTime();
                console.log('update sensor Flow 3 Val = ' + payload + ' ' + getLogTime())
            } else if ((sensorFlow4.nodeId == nodeId) && (sensorFlow4.childId == childId)) {

                sensorFlow4.status = 1;
                sensorFlow4.value = getVolume(sensorFlow4.kalMin, parseInt(payload))
                sensorFlow4.lastUpdate = getLogTime();
                console.log('update sensor Flow 4 Val = ' + payload + ' ' + getLogTime())
            }
        } else if (type == V_TEMP) {//cek temperature
            if ((sensorTemperature1.nodeId == nodeId) && (sensorTemperature1.childId == childId)) {

                sensorTemperature1.status = 1;
                sensorTemperature1.value = parseFloat(payload).toFixed(1)
                sensorTemperature1.lastUpdate = getLogTime();
                console.log('update sensor Temperature1 Val = ' + payload + ' ' + getLogTime())
            }
        } else if (type == V_HUM) {//cek temperature
            if ((sensorHumidity1.nodeId == nodeId) && (sensorHumidity1.childId == childId)) {

                sensorHumidity1.status = 1;
                sensorHumidity1.value = parseFloat(payload).toFixed(1)
                sensorHumidity1.lastUpdate = getLogTime();
                console.log('update sensor Humidity1 Val = ' + payload + ' ' + getLogTime())
            }
        } else if (type == V_FLOW) {
            if ((sensorFlow1.nodeId == nodeId) && (sensorFlow1.childId == childId)) {
                sensorFlow1.status = 1
                //hitung volume disini                
                sensorFlow1.value = getVolume(sensorFlow1.kalMin, parseInt(payload))
                sensorFlow1.lastUpdate = getLogTime()
                txtDebug.SetText("update flow1 sensor value = " + payload)
                console.log("update flow1 sensor value = " + payload + ' ' + getLogTime())
            } else if ((sensorFlow2.nodeId == nodeId) && (sensorFlow2.childId == childId)) {
                sensorFlow2.status = 1
                //hitung volume disini                
                sensorFlow2.value = getVolume(sensorFlow2.kalMin, parseInt(payload))
                sensorFlow2.lastUpdate = getLogTime()
                console.log("update flow2 sensor value = " + payload + ' ' + getLogTime())
            }else if ((sensorFlow3.nodeId == nodeId) && (sensorFlow3.childId == childId)) {
                sensorFlow3.status = 1
                //hitung volume disini                
                sensorFlow3.value = getVolume(sensorFlow3.kalMin, parseInt(payload))
                sensorFlow3.lastUpdate = getLogTime()
                console.log("update flow3 sensor value = " + payload + ' ' + getLogTime())
            }else if ((sensorFlow3.nodeId == nodeId) && (sensorFlow3.childId == childId)) {
                sensorFlow3.status = 1
                //hitung volume disini                
                sensorFlow3.value = getVolume(sensorFlow3.kalMin, parseInt(payload))
                sensorFlow3.lastUpdate = getLogTime()
                console.log("update flow4 sensor value = " + payload + ' ' + getLogTime())
            }
        }else if(type == V_DISTANCE){
            if((sensorGenanganIntermittent.nodeId == nodeId) && (sensorGenanganIntermittent.childId)){
                sensorGenanganIntermittent.status = 1
                let gVal = parseInt(payload)
                if( gVal > 19){
                    gVal = 19
                }
                const gvalNow = 19 - gVal

                sensorGenanganIntermittent.value = gvalNow
                sensorGenanganIntermittent.lastUpdate = getLogTime();
                console.log('update genangan intermittent Val = ' + payload + '> '+ gvalNow + ' '+ getLogTime())
            
            }
        }else if(type == V_MOISTURE){
            
        }
    }
}

function getVolume(kal, val) {

    return (val / kal).toFixed(2);
}