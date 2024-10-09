/*
struct node
{
    //24 byte length
    uint8_t nodeId;
    uint8_t childId = 1;    
     
    uint8_t status = 0;    
    uint8_t val = 0;     
    uint8_t lastUpdate[6] = {0, 0, 0, 0, 0, 0}; // format th,bl,tg,jam.mn.dt
    char nama[14] = {'N','o','d','e',' ','K','o','s','o','n','g',0,0,0};
    uint8_t timeOut = 0;
};
struct sensor
{
    //30 byte length
    uint8_t nodeId;
    uint8_t childId = 1;     
    uint8_t status = 0;    
    uint8_t interval = 0;
    uint8_t timeOut = 0;
    uint8_t battLevel = 0;    
    uint16_t val = 0; 
    uint16_t kalMin = 40;
    uint16_t kalMax = 500;
    uint8_t lastUpdate[6] = {0, 0, 0, 0, 0, 0}; // format th,bl,tg,jam.mn.dt
    char nama[14] = {'N','o','d','e',' ','K','o','s','o','n','g',0,0,0};
};



*/
function getLengasValue(sen) {
    switch (sen) {
        case 1:
            return sensorLengas1.value
            break;
        case 2:
            return sensorLengas2.value
            break;
        case 3:
            return sensorLengas3.value
            break;
        case 4:
            return sensorLengas4.value
            break;
        default:
            return 0
            break;

    }
}

function getSensorValue(type, nomerSensor) {
    if (type === 'Temperature') {
        if (nomerSensor == 1) {
            return sensorTemperature1.value
        } else if (nomerSensor == 2) {
            return sensorTemperature2.value
        } else if (nomerSensor == 3) {
            return sensorTemperature3.value
        }
    } else if (type === 'Humidity') {
        if (nomerSensor == 1) {
            return sensorHumidity1.value
        } else if (nomerSensor == 2) {
            return sensorHumidity2.value
        } else if (nomerSensor == 3) {
            return sensorHumidity3.value
        }
    } else if (type === 'Lengas') {
        if (nomerSensor == 1) {
            return sensorLengas1.value
        } else if (nomerSensor == 2) {
            return sensorLengas2.value
        } else if (nomerSensor == 3) {
            return sensorLengas3.value
        } else if (nomerSensor == 4) {
            return sensorLengas4.value
        }

    } else if (type === 'ABMix') {
        if (nomerSensor == 1) {
            return sensorFlow1.value
        } else if (nomerSensor == 2) {
            return sensorFlow2.value
        } else if (nomerSensor == 3) {
            return sensorFlow3.value
        } else if (nomerSensor == 4) {
            return sensorFlow4.value
        }

    } else {
        return 0;
    }

}

function getTemperatureValue() {
    return sensorTemperature1.value
}

function getHumidityValue() {
    return sensorHumidity1.value
}

function resetFlowValue() {
    sensorFlow1.value = 0
    sensorFlow2.value = 0
    sensorFlow3.value = 0
    sensorFlow4.value = 0



    resetFlowSensor(1)
    setTimeout(() => resetFlowSensor(2), 250)
    setTimeout(() => resetFlowSensor(3), 500)
    setTimeout(() => resetFlowSensor(4), 750)

}

function resetMixAktuator() {
    
    setTimeout(() => kontrolAktuator(autoAbMix.aktuatorMixA, OFF), 100)
    setTimeout(() => kontrolAktuator(autoAbMix.aktuatorMixB, OFF), 250)
    setTimeout(() => kontrolAktuator(autoAbMix.aktuatorMixC, OFF), 500)
    setTimeout(() => kontrolAktuator(autoAbMix.aktuatorAduk, OFF), 750)
    setTimeout(() => kontrolAktuator(autoAbMix.aktuatorMixOut, OFF), 1000)
}
function getFlowValue(sen) {
    if (sen == 1) {
        return sensorFlow1.value
    } else if (sen == 2) {
        return sensorFlow2.value
    } else if (sen == 3) {
        return sensorFlow3.value
    } else if (sen == 4) {
        return sensorFlow4.value
    }
}

function kontrolAktuator(nomerAktuator, cm) {
    let cmd
    if ((nomerAktuator < 17) && (nomerAktuator > 0)) {
        switch (nomerAktuator) {
            case 1:
                cmd = aktuator1.nodeId + ';' + aktuator1.childId + ';1;1;2;' + cm
                break;
            case 2:
                cmd = aktuator2.nodeId + ';' + aktuator2.childId + ';1;1;2;' + cm
                break;
            case 3:
                cmd = aktuator3.nodeId + ';' + aktuator3.childId + ';1;1;2;' + cm
                break;
            case 4:
                cmd = aktuator4.nodeId + ';' + aktuator4.childId + ';1;1;2;' + cm
                break;
            case 5:
                cmd = aktuator5.nodeId + ';' + aktuator5.childId + ';1;1;2;' + cm
                break;
            case 6:
                cmd = aktuator6.nodeId + ';' + aktuator6.childId + ';1;1;2;' + cm
                break;
            case 7:
                cmd = aktuator7.nodeId + ';' + aktuator7.childId + ';1;1;2;' + cm
                break;
            case 8:
                cmd = aktuator8.nodeId + ';' + aktuator8.childId + ';1;1;2;' + cm
                break;
            case 9:
                cmd = aktuator9.nodeId + ';' + aktuator9.childId + ';1;1;2;' + cm
                break;
            case 10:
                cmd = aktuator10.nodeId + ';' + aktuator10.childId + ';1;1;2;' + cm
                break;
            case 11:
                cmd = aktuator11.nodeId + ';' + aktuator11.childId + ';1;1;2;' + cm
                break;
            case 12:
                cmd = aktuator12.nodeId + ';' + aktuator12.childId + ';1;1;2;' + cm
                break;
            case 13:
                cmd = aktuator13.nodeId + ';' + aktuator13.childId + ';1;1;2;' + cm
                break;
            case 14:
                cmd = aktuator14.nodeId + ';' + aktuator14.childId + ';1;1;2;' + cm
                break;
            case 15:
                cmd = aktuator15.nodeId + ';' + aktuator15.childId + ';1;1;2;' + cm
                break;
            case 16:
                cmd = aktuator16.nodeId + ';' + aktuator16.childId + ';1;1;2;' + cm
                break;
        }
        if (usbSerial) {
            cmd += '\n'
            usbSerial.write(cmd)
        } else if (btConnect_sts) {
            cmd += '\n'
            kirimKeNode(cmd)
        }
        else {
            console.log("koneksi ke serial putus")
        }
    } else {
        console.log('aktuator tidak ditemukan')
    }

}

function loadDefault() {

}

function resetFlowSensor(id) {
    let cmd = ""
    if (id === 1) {
        cmd = sensorFlow1.nodeId + ';' + sensorFlow1.childId + ';1;1;24;0'
    } else if (id === 2) {
        cmd = sensorFlow2.nodeId + ';' + sensorFlow2.childId + ';1;1;24;0'
    } else if (id === 3) {
        cmd = sensorFlow3.nodeId + ';' + sensorFlow3.childId + ';1;1;24;0'
    } else if (id === 4) {
        cmd = sensorFlow4.nodeId + ';' + sensorFlow4.childId + ';1;1;24;0'
    }
    if (btConnect_sts) {
        if (cmd.length > 0) {
            cmd += '\n'
            kirimKeNode(cmd)
        }
    }
}

const scale = (number, [inMin, inMax], [outMin, outMax]) => {
    // if you need an integer value use Math.floor or Math.ceil here
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}

