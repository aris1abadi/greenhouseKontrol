function cekAutoRun() {
    //update display data
    humNow = getSensorValue(dataTask[humIndex].type, dataTask[humIndex].sensorUse1)
    tempNow = getSensorValue(dataTask[tempIndex].type, dataTask[tempIndex].sensorUse1)
    lengasNow = getSensorValue(dataTask[lengasIndex].type, dataTask[lengasIndex].sensorUse1)
    mixANow = getSensorValue(dataTask[mixIndex].type, dataTask[mixIndex].flowSensorA)
    mixBNow = getSensorValue(dataTask[mixIndex].type, dataTask[mixIndex].flowSensorB)
    mixCNow = getSensorValue(dataTask[mixIndex].type, dataTask[mixIndex].flowSensorC)

    lengasInterNow = sensorLengasIntermittent.value;
    genanganInterNow = sensorGenanganIntermittent.value

    if (humNow != lastHumValue) {
        lastHumValue = humNow
        cardMain[humIndex].data.txtValue.SetText(lastHumValue + '%')
        //valueHumidity.SetText()

    }
    if (tempNow != lastTempValue) {
        lastTempValue = tempNow
        cardMain[tempIndex].data.txtValue.SetText(lastTempValue + '°C')
    }
    if (lengasNow != lastLengasValue) {
        lastLengasValue = lengasNow

        cardMain[lengasIndex].data.txtValue.SetText(lastLengasValue + '%')
    }
    if (mixANow != lastMixAValue) {
        lastMixAValue = mixANow
        cardMain[mixIndex].data.txtValueMixA.SetText(lastMixAValue + ' ltr')

    }

    if (mixBNow != lastMixBValue) {
        lastMixBValue = mixBNow
        cardMain[mixIndex].data.txtValueMixB.SetText(lastMixBValue + ' ltr')

    }

    if (mixCNow != lastMixCValue) {
        lastMixCValue = mixCNow
        cardMain[mixIndex].data.txtValueMixC.SetText(lastMixCValue + ' ltr')
    }

    if (lengasInterNow != lastLengasInter) {
        lastLengasInter = lengasInterNow
        cardMain[interIndex].data.txtIntermittentSensorValue.SetText(lastLengasInter + '%')

    }

    if (genanganInterNow != lastGenanganInter) {
        lastGenanganInter = genanganInterNow
        cardMain[interIndex].data.txtLevelValue.SetText(lastGenanganInter + ' cm')
        hLevel = cardMain[interIndex].data.levelHeight
        cardMain[interIndex].data.levelIntermittentIndikator.SetSize(width / 4, ((height / 3) - (height / 3) * (genanganInterNow / 19)))
    }

    if (dataTask[humIndex].enable == 1) {
        if (humNow <= dataTask[humIndex].targetOn) {
            if (dataTask[humIndex].status == 0) {
                dataTask[humIndex].status = 1
                kontrolAktuator(dataTask[humIndex].aktuatorUse1, ON)
                setTimeout(() => kontrolAktuator(dataTask[humIndex].aktuatorUse2, ON), 250)

            }
        } else if (humNow >= dataTask[humIndex].targetOff) {
            if (dataTask[humIndex].status == 1) {
                dataTask[humIndex].status = 0
                kontrolAktuator(dataTask[humIndex].aktuatorUse1, OFF)
                //kontrolAktuator(ataTask[humIndex].aktuatorUse2, ON)
                setTimeout(() => kontrolAktuator(dataTask[humIndex].aktuatorUse2, OFF), 250)
            }

        }
    }

    if (dataTask[tempIndex].enable == 1) {
        if (tempNow >= dataTask[tempIndex].targetOn) {
            if (dataTask[tempIndex].status == 0) {
                dataTask[tempIndex].status = 1
                kontrolAktuator(dataTask[tempIndex].aktuatorUse1, ON)
                //kontrolAktuator(dataTask[tempIndex].aktuatorUse2, ON)
                setTimeout(() => kontrolAktuator(dataTask[tempIndex].aktuatorUse2, ON), 250)
                app.ShowPopup('Blower Temperature ON')
            }


        } else if (tempNow <= dataTask[tempIndex].targetOff) {
            if (dataTask[tempIndex].status == 1) {
                dataTask[tempIndex].status = 0
                kontrolAktuator(dataTask[tempIndex].aktuatorUse1, OFF)
                //kontrolAktuator(dataTask[tempIndex].aktuatorUse2, OFF)
                setTimeout(() => kontrolAktuator(dataTask[tempIndex].aktuatorUse2, OFF), 250)
                app.ShowPopup('Blower Temperature OFF')
            }
        }
    }

    if (dataTask[lengasIndex].enable == 1) {
        if (lengasNow <= dataTask[lengasIndex].targetOn) {
            if (dataTask[lengasIndex].status == 0) {
                dataTask[lengasIndex].status = 1
                kontrolAktuator(dataTask[lengasIndex].aktuatorUse1, ON)
                //kontrolAktuator(dataTask[tempIndex].aktuatorUse2, OFF)
                setTimeout(() => kontrolAktuator(dataTask[lengasIndex].aktuatorUse2, ON), 250)
                app.ShowPopup('Pompa Siram ON')
            }

        } else if (lengasNow >= dataTask[lengasIndex].targetOff) {
            if (dataTask[lengasIndex].status == 0) {
                dataTask[lengasIndex].status = 1
                kontrolAktuator(dataTask[lengasIndex].aktuatorUse1, OFF)
                //kontrolAktuator(dataTask[tempIndex].aktuatorUse2, ON)
                setTimeout(() => kontrolAktuator(dataTask[lengasIndex].aktuatorUse2, OFF), 250)
                app.ShowPopup('Pompa siram OFF')
            }
        }
    }

    if (autoAbMix.enable == 1) {
        if (autoAbMix.status == 0) {
            //mulai mixing
            //reset value flowsensor
            resetFlowValue()
            setTimeout(() => kontrolAktuator(autoAbMix.aktuatorMixA, ON), 1000)
            setTimeout(() => kontrolAktuator(autoAbMix.aktuatorMixB, ON), 1250)
            setTimeout(() => kontrolAktuator(autoAbMix.aktuatorMixC, ON), 1500)
            autoAbMix.targetMixAStatus = 1//status aktuator aktif
            autoAbMix.targetMixBStatus = 1
            autoAbMix.targetMixCStatus = 1
            //next proses
            autoAbMix.status = 1
            console.log("Mixing campuran Start")


        } else if (autoAbMix.status == 1) {//cek flow sensor
            if (autoAbMix.targetMixAStatus == 1) {
                //update display volume disini
                //valueBahanA.SetText(getFlowValue(autoAbMix.flowSensorA))
                if (getFlowValue(autoAbMix.flowSensorA) > autoAbMix.targetMixA) {
                    kontrolAktuator(autoAbMix.aktuatorMixA, OFF)
                    autoAbMix.targetMixAStatus = 0
                    console.log('Bahan A selesai')
                }
            }

            if (autoAbMix.targetMixBStatus == 1) {
                //update display volume disini
                //valueBahanB.SetText(getFlowValue(autoAbMix.flowSensorB))
                if (getFlowValue(autoAbMix.flowSensorB) > autoAbMix.targetMixB) {
                    kontrolAktuator(autoAbMix.aktuatorMixB, OFF)
                    autoAbMix.targetMixBStatus = 0
                    console.log('Bahan B selesai')
                }
            }
            if (autoAbMix.targetMixCStatus == 1) {
                //update display volume disini
                //valueBahanC.SetText(getFlowValue(autoAbMix.flowSensorC))
                if (getFlowValue(autoAbMix.flowSensorC) > autoAbMix.targetMixC) {
                    kontrolAktuator(autoAbMix.aktuatorMixC, OFF)
                    autoAbMix.targetMixCStatus = 0
                    console.log('Bahan C selesai')
                }
            }
            //
            if ((autoAbMix.targetMixAStatus == 0) && (autoAbMix.targetMixBStatus == 0) && (autoAbMix.targetMixCStatus == 0)) {
                autoAbMix.status = 2
                autoAbMix.mixingCount = 0
                kontrolAktuator(autoAbMix.aktuatorAduk, ON)
                console.log('Aduk campuran start')
            }

        } else if (autoAbMix.status == 2) {//aduk campuran
            if (++autoAbMix.mixingCount > autoAbMix.mixingTarget) {
                kontrolAktuator(autoAbMix.aktuatorAduk, OFF)
                autoAbMix.status = 3
                console.log("aduk campuran selesai")
                //nyalakan pompa semprot  
                kontrolAktuator(autoAbMix.aktuatorMixOut, ON)
                resetFlowValue()
            }

        } else if (autoAbMix.status == 3) {
            //cek volume
            if (getFlowValue(autoAbMix.flowMixOut) > (autoAbMix.targetMixA + autoAbMix.targetMixB + autoAbMix.targetMixC)) {
                kontrolAktuator(autoAbMix.aktuatorMixOut, OFF)
                autoAbMix.status = 0
                autoAbMix.enable = 0
                console.log("auto ab mix selesai")

                btnMixStartStop.SetColor('white', '#338E19')
                btnMixStartStop.SetTextColor('white')
                btnMixStartStop.SetText('MULAI')
            }

        }
    }

    if (autoIntermittent.enable == 1) {
        if (lengasInterNow <= dataTask[interIndex].targetOn) {
            if (dataTask[interIndex].status == 0) {
                dataTask[interIndex].status = 1
                kontrolAktuator(dataTask[interIndex].aktuatorUse1, ON)
                //kontrolAktuator(dataTask[tempIndex].aktuatorUse2, OFF)
                setTimeout(() => kontrolAktuator(dataTask[interIndex].aktuatorUse2, ON), 250)
                app.ShowPopup('Pompa Siram ON')
            }
        }
        if (genanganInterNow >= dataTask[interIndex].targetOff) {
            if (dataTask[interIndex].status == 1) {
                dataTask[interIndex].status = 0
                kontrolAktuator(dataTask[interIndex].aktuatorUse1, OFF)
                //kontrolAktuator(dataTask[tempIndex].aktuatorUse2, ON)
                setTimeout(() => kontrolAktuator(dataTask[interIndex].aktuatorUse2, OFF), 250)
                app.ShowPopup('Pompa siram OFF')
            }
        }
    }

}

function cekJadwal() {

}

function cekInputMsg(topic, msg) {
    /*
    format perintah kontrol
    cmd
    abadinet-in/KA0001/autoTemperature/0/enable > 1/0(1 enable,0 didable)
    response
    abadinet-out/KA0001/autoTemperature/0/enable ..1/0

    */
    let splitTopic = topic.split('/')
    const mqttType = splitTopic[2]
    const mqttNumber = splitTopic[3]
    const mqttCmd = splitTopic[4]
    if (mqttCmd === 'enable') {
        if (mqttType === 'autoTemperature') {
            autoBtn_click(tempIndex)
        } else if (mqttType === 'autoHumidity') {
            autoBtn_click(humIndex)
        } else if (mqttType === 'autoLengas') {
            autoBtn_click(lengasIndex)
        } else if (mqttType === 'autoGenangan') {
            autoBtn_click(genanganIndex)
        } else if (mqttType === 'autoMix') {
            autoBtn_click(mixIndex)
        } else if (mqttType === 'autoIntermittent') {
            autoBtn_click(interIndex)
        }
    } else if (mqttCmd === 'getInfo') {
        let respMsg = 'Data tidak ditemukan'
        if (mqttType === 'autoTemperature') {
            respMsg = JSON.stringify(dataTask[tempIndex])
        } else if (mqttType === 'autoHumidity') {
            respMsg = JSON.stringify(dataTask[humIndex])
        } else if (mqttType === 'autoLengas') {
            respMsg = JSON.stringify(dataTask[lengasIndex])
        } else if (mqttType === 'autoGenangan') {
            respMsg = JSON.stringify(dataTask[genanganIndex])
        } else if (mqttType === 'autoMix') {
            respMsg = JSON.stringify(dataTask[mixIndex])
        } else if (mqttType === 'autoIntermittent') {
            respMsg = JSON.stringify(dataTask[interIndex])
        }

        kirimKeClient(mqttType, 0, 'info', respMsg)
    } else if (mqttCmd === 'setAktuatorUse') {
        if (mqttNumber != 0) {
            //index 
            let id = -1
            switch (mqttType) {
                case 'autoTemperature':
                    id = tempIndex;
                    break
                case 'autoHumidity':
                    id = humIndex;
                    break
                case 'autoLengas':
                    id = lengasIndex;
                    break
                case 'autoGenangan':
                    id = genanganIndex;
                    break
                case 'autoIntermittent':
                    id = interIndex;
                    break
            }
            if (id != -1) {
                if (mqttNumber == 1) {
                    dataTask[id].aktuatorUse1 = parseInt(msg)
                } else if (mqttNumber == 2) {
                    dataTask[id].aktuatorUse2 = parseInt(msg)
                }

            }
        }
    } else if (mqttCmd === 'setSensorUse') {
        if (mqttNumber != 0) {
            //index 
            let id = -1
            switch (mqttType) {
                case 'autoTemperature':
                    id = tempIndex;
                    break
                case 'autoHumidity':
                    id = humIndex;
                    break
                case 'autoLengas':
                    id = lengasIndex;
                    break
                case 'autoGenangan':
                    id = genanganIndex;
                    break
                case 'autoIntermittent':
                    id = interIndex;
                    break
            }
            if (id != -1) {
                if (mqttNumber == 1) {
                    dataTask[id].sensorUse1 = parseInt(msg)
                } else if (mqttNumber == 2) {
                    dataTask[id].sensorUse2 = parseInt(msg)
                }

            }
        }

    } else if (mqttCmd === 'setTargetOn') {
        let id = -1
        switch (mqttType) {
            case 'autoTemperature':
                id = tempIndex;
                break
            case 'autoHumidity':
                id = humIndex;
                break
            case 'autoLengas':
                id = lengasIndex;
                break
            case 'autoGenangan':
                id = genanganIndex;
                break
            case 'autoIntermittent':
                id = interIndex;
                break
        }
        if (id != -1) {
            dataTask[id].targetOn = parseInt(msg)


        }
    }else if(mqttCmd === 'setTargetOff'){
        let id = -1
        switch (mqttType) {
            case 'autoTemperature':
                id = tempIndex;
                break
            case 'autoHumidity':
                id = humIndex;
                break
            case 'autoLengas':
                id = lengasIndex;
                break
            case 'autoGenangan':
                id = genanganIndex;
                break
            case 'autoIntermittent':
                id = interIndex;
                break
        }
        if (id != -1) {
            dataTask[id].targetOff = parseInt(msg)


        }
    }
    else if (mqttCmd === 'SetJadwal') {

    }

}