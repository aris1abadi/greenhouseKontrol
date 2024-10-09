function loadUi() {
    //Lock screen orientation. It is not rotatable within the application.
    app.SetOrientation(app.GetOrientation())

    canvas = app.CreateLayout("Absolute", "FillXY")
    canvas.SetBackground('Img/siram4.jpg')

    scroller = app.AddScroller(canvas, 1, 1, "ScrollFade")
    layMain = app.CreateLayout("Linear", "VCenter,FillXY")
    layMain.SetSize(1, 1)
    scroller.AddChild(layMain)

    txtHeader = app.AddText(layMain, 'GreenHouse Kontrol', 1, 0.07, "VBottom")
    txtHeader.SetTextSize(36)
    txtHeader.SetFontFile('Misc/Queenaldo.otf')
    txtHeader.SetMargins(0, 0.03, 0, 0)
    txtHeader.SetTextColor('white')
    txtAuthor = app.AddText(layMain, 'by karjoAgro', 1, 0.03, "VTop,Italic")
    txtAuthor.SetTextSize(10)
    txtAuthor.SetMargins(0, 0, 0, 0.05)
    txtAuthor.SetTextColor('white')




    var horiz

    for (var i = 0; i < dataTask.length; i++) {
        //Add 2 cards per line on portrait screen and
        //3 cards per line on landscape screen.
        if (i % (isPortrait ? 2 : 3) === 0)
            horiz = app.AddLayout(layMain, "Linear", "FillXY,Horizontal")

        var card = addCard(dataTask[i], i)
        cardMain.push(card)
        horiz.AddChild(card)
        let space = app.CreateLayout('Linear', 'FillXY')
        space.SetSize(0.05, height)
        horiz.AddChild(space)
        horizSpace = app.AddLayout(layMain, 'Linear')
        horizSpace.SetSize(1, 0.02)

        if (i === 0)
            firstCard = card
    }
    txtDebug = app.AddText(layMain, 'tes123', 1, 0.06)
    txtDebug.SetTextColor('white')

    layInfo = app.AddLayout(canvas, "Linear", "FillXY,Left")
    layInfo.SetBackColor("#D5FFC7")
    //layInfo.SetBackAlpha(0.9)
    layInfo.Hide()

    btnBack = app.AddText(layInfo, "[fa-arrow-left] Back", -1, -1, "fontawesome")
    btnBack.SetTextColor("black")
    btnBack.SetTextSize(26, "px")
    btnBack.SetMargins(0.1, isPortrait ? 0.025 : 0.05)
    btnBack.SetOnTouchUp(FlipToBack)
    btnBack.Hide()

    infoTitle = app.AddText(layInfo, "", 1, 0.07)
    infoTitle.SetMargins(0, 0.05, 0, 0)
    //infoTitle.SetPadding(isPortrait ? 0.35 : 0.3, 0.05)
    infoTitle.SetTextSize(18)
    infoTitle.Hide()

    layInfoScroller = app.AddScroller(layInfo, 1, -1, "FillXY,ScrollFade")
    //laySetup = app.CreateText("", 1, -1, "MultiLine,Left")
    //laySetup.SetPadding(isPortrait ? 0.1 : 0.6, 0.02, 0.1, 0.1)
    //laySetup.Hide()
    laySetup = app.CreateLayout('Frame')
    laySetup.SetSize(1, -1)
    laySetup.Hide()
    layInfoScroller.AddChild(laySetup)
    loadSetup()

    //Add layout to app.
    app.AddLayout(canvas)

    //We subtract the distance of the first element from the screen and
    //the distance from its parent and find the extra space added to each element.
    diff = firstCard.GetPosition("screen").top - firstCard.GetPosition().top

}

function loadSetup() {
    pickerAktuator = MUI.CreateListDialog('Pilih Aktuator', listAktuator)
    pickerAktuator.SetOnSelect(pickerAktuator_select)
    //pickerAktuator.Hide()

    laySetup1 = app.CreateLayout('Linear', 'Vertical')
    laySetup1.SetSize(1, -1)
    laySetup.AddChild(laySetup1)
    laySetupMix = app.CreateLayout('Linear', 'Vertical')
    laySetupMix.SetSize(1, -1)
    laySetup.AddChild(laySetupMix)
    laySetupIntermittent = app.CreateLayout('Linear', 'Vertical')
    laySetupIntermittent.SetSize(1, -1)
    laySetup.AddChild(laySetupIntermittent)

    //setup temperature,Humidity,Lengas,Genangan
    //target picker
    layTargetEdit = app.AddLayout(laySetup1, 'Linear', 'Horizontal')
    layTargetEdit.SetSize(0.8, 0.07)
    btnTargetON = MUI.CreateButtonRaisedO('ON pada xx', 0.4, 0.07, 'black', '#DFDFDF')
    btnTargetON.SetOnTouch(btnTargetON_click)
    layTargetEdit.AddChild(btnTargetON)

    btnTargetOFF = MUI.CreateButtonRaisedO('OFF pada xx', 0.4, 0.07, 'black', '#DFDFDF')
    layTargetEdit.AddChild(btnTargetOFF)

    layPicker = app.AddLayout(laySetup1, 'Linear', 'Horizontal,VCenter')
    layPicker.SetBackColor('#DFDFDF')
    layPicker.SetSize(0.8, 0.15)
    layPicker.SetMargins(0, 0, 0, 0.05)

    //txtTargetHeader = app.AddText(layPicker, 'Target Auto', 0.3, 0.15, 'VCenter')
    //txtTargetHeader.SetTextSize(16)
    createSeekBar()

    targetPicker = uix.CreateNumberPicker(20, 'NoCycle')
    targetPicker.SetRange(10, 100)
    targetPicker.SetDecimalPlaces(0)
    targetPicker.SetTextColor('black')
    targetPicker.SetOnChange(targetPicker_change)
    targetPicker.SetVisibility('Gone')
    //layPicker.AddChild(targetPicker)

    //txtTargetSatuan = app.AddText(layPicker, '%', 0.2, 0.15, 'VCenter')
    //txtTargetSatuan.SetTextSize(24)

    layPilihAktuatorHeader = app.AddLayout(laySetup1, 'Linear', 'Horizontal')
    layPilihAktuatorHeader.SetSize(0.9, 0.03)
    txtPilihAktuatorHeader1 = app.AddText(layPilihAktuatorHeader, 'Output 1', 0.4, 0.03)
    txtPilihAktuatorHeader1.SetTextSize(10)
    txtPilihAktuatorHeader2 = app.AddText(layPilihAktuatorHeader, 'Output 2', 0.4, 0.03)
    txtPilihAktuatorHeader2.SetTextSize(10)
    //selectAktuator1 = MUI.CreateButtonRaised('Pilih Aktuator',0.4,0.05,'white','blue')
    layPilihAktuator = app.AddLayout(laySetup1, 'Linear', 'Horizontal')
    layPilihAktuator.SetSize(0.9, 0.06)

    selectAktuator1 = MUI.CreateButtonRaised('Pilih Aktuator', 0.4, 0.06, 'white', 'blue')
    selectAktuator1.SetOnTouch(selectAktuator1_click)

    selectAktuator2 = MUI.CreateButtonRaised('Pilih Aktuator', 0.4, 0.06, 'white', 'blue')
    selectAktuator2.SetOnTouch(selectAktuator2_click)

    //selectAktuator2 = MUI.CreateSpinner(listAktuator,0.4,0.05)
    layPilihAktuator.AddChild(selectAktuator1)
    layPilihAktuator.AddChild(selectAktuator2)

    layPilihSensor = app.AddLayout(laySetup1, 'Frame')
    layPilihSensor.SetSize(0.8, 0.06)

    selectSensorLengas = MUI.CreateSpinner(listLengas, 0.8, 0.06)
    selectSensorLengas.SetTextSize(12)
    layPilihSensor.AddChild(selectSensorLengas)
    selectSensorLengas.Hide()

    selectSensorTemperature = MUI.CreateSpinner(listTemperature, 0.8, 0.06)
    selectSensorTemperature.SetTextSize(12)
    layPilihSensor.AddChild(selectSensorTemperature)
    selectSensorTemperature.Hide()
    //selectSensorTemperature.Hide()

    selectSensorHumidity = MUI.CreateSpinner(listHumidity, 0.8, 0.06)
    selectSensorHumidity.SetTextSize(12)
    layPilihSensor.AddChild(selectSensorHumidity)
    selectSensorHumidity.Hide()


    selectSensorGenangan = MUI.CreateSpinner(listGenangan, 0.8, 0.06)
    selectSensorGenangan.SetTextSize(12)
    layPilihSensor.AddChild(selectSensorGenangan)
    selectSensorGenangan.Hide()

    //jadwal
    layJadwal = app.AddLayout(laySetup1, 'Linear', 'Horizontal')
    layJadwal.SetSize(0.8, 0.06)
    layJadwal.SetMargins(0, 0.05, 0, 0)

    btnJadwal1 = MUI.AddButtonToggle(layJadwal, 'Jadwal1', 0.25, 0.06, false, btnJadwal1_click, 'black', 'white')
    btnJadwal1.SetTextSize(12)
    //btnJadwal1.SetOnTouch(btnJadwal1_click)
    btnJadwal2 = MUI.AddButtonToggle(layJadwal, 'Jadwal2', 0.25, 0.06, false, btnJadwal2_click, 'black', 'white')
    btnJadwal2.SetTextSize(12)
    //btnJadwal2.SetOnTouch(btnJadwal2_click)
    btnJadwal3 = MUI.AddButtonToggle(layJadwal, 'Jadwal3', 0.25, 0.06, false, btnJadwal3_click, 'black', 'white')
    btnJadwal3.SetTextSize(12)
    //btnJadwal3.SetOnTouch(btnJadwal3_click)

    //jam picker
    layJamPicker = app.AddLayout(laySetup1, 'Linear', 'Horizontal')
    layJamPicker.SetSize(0.8, 0.15)
    layJamPicker.SetMargins(0, 0.05, 0, 0)
    layJamPicker.SetBackColor('black')

    jamPicker = uix.CreateNumberPicker(11)
    jamPicker.SetRange(0, 23)
    jamPicker.SetDecimalPlaces(0)
    jamPicker.SetTextColor('white')
    layJamPicker.AddChild(jamPicker)

    txtsp1 = app.AddText(layJamPicker, ':', 0.1, 0.15, 'Bold,VCenter')
    txtsp1.SetTextSize(24)

    menitPicker = uix.CreateNumberPicker(11)
    menitPicker.SetRange(0, 23)
    menitPicker.SetDecimalPlaces(0)
    menitPicker.SetTextColor('white')
    layJamPicker.AddChild(menitPicker)

    txtsp2 = app.AddText(layJamPicker, ' > ', 0.1, 0.15, 'Bold,VCenter')
    txtsp2.SetTextSize(24)


    targetPickerJadwal = uix.CreateNumberPicker(30, 'NoCycle')
    targetPickerJadwal.SetRange(20, 50)
    targetPickerJadwal.SetDecimalPlaces(0)
    targetPickerJadwal.SetTextColor('white')
    //targetPickerJadwal.SetOnChange(targetPickerJadwal_change)
    layJamPicker.AddChild(targetPickerJadwal)
    //setup abmix
    //mix A
    laySetA = app.AddLayout(laySetupMix, 'Linear', 'Horizontal,VCenter,HLeft')
    laySetA.SetSize(0.8, 0.12)

    setNamaMixA = MUI.AddTextEditOutlineA(laySetA, 0.4, '', 'Nama MixA', true, 'blue', 'white')
    setNamaMixA.SetMargins(0, 0, 0.05, 0)

    setMixAtarget = uix.CreateNumberPicker(20, 'NoCycle')
    setMixAtarget.SetRange(10, 100)
    setMixAtarget.SetDecimalPlaces(0)
    setMixAtarget.SetTextColor('black')
    setMixAtarget.SetTextSize(12)
    setMixAtarget.SetOnChange(setMixAtarget_change)
    setMixAtarget.SetMargins(0, 0, 0.01, 0)
    laySetA.AddChild(setMixAtarget)

    mixASatuan = app.AddText(laySetA, 'x10 mL', -1, 0.12, 'Vcenter')
    mixASatuan.SetTextSize(12)

    //mix b
    laySetB = app.AddLayout(laySetupMix, 'Linear', 'Horizontal,VCenter,HLeft')
    laySetB.SetSize(0.8, 0.12)
    //laySetB.SetBackColor('gray')

    setNamaMixB = MUI.AddTextEditOutlineA(laySetB, 0.4, '', 'Nama MixB', true, 'blue', 'white')
    setNamaMixB.SetMargins(0, 0, 0.05, 0)
    //setNamaMixA.SetText('Bio Kasap')
    setMixBtarget = uix.CreateNumberPicker(20, 'NoCycle')
    setMixBtarget.SetRange(10, 100)
    setMixBtarget.SetDecimalPlaces(0)
    setMixBtarget.SetTextColor('black')
    setMixBtarget.SetTextSize(12)
    setMixBtarget.SetOnChange(setMixBtarget_change)
    setMixBtarget.SetMargins(0, 0, 0.01, 0)
    laySetB.AddChild(setMixBtarget)

    mixBSatuan = app.AddText(laySetB, 'x10 mL', -1, 0.12, 'Vcenter')
    mixBSatuan.SetTextSize(12)


    //mix C
    laySetC = app.AddLayout(laySetupMix, 'Linear', 'Horizontal,VCenter,HLeft')
    laySetC.SetSize(0.8, 0.12)

    setNamaMixC = MUI.AddTextEditOutlineA(laySetC, 0.4, '', 'Nama MixA', true, 'blue', 'white')
    setNamaMixC.SetMargins(0, 0, 0.05, 0)

    setMixCtarget = uix.CreateNumberPicker(3, 'NoCycle')
    setMixCtarget.SetRange(1, 100)
    setMixCtarget.SetDecimalPlaces(0)
    setMixCtarget.SetTextColor('black')
    setMixCtarget.SetTextSize(12)
    setMixCtarget.SetOnChange(setMixCtarget_change)
    setMixCtarget.SetMargins(0, 0, 0.01, 0)
    laySetC.AddChild(setMixCtarget)

    mixCSatuan = app.AddText(laySetC, 'liter', -1, 0.12, 'Vcenter')
    mixCSatuan.SetTextSize(12)

    //setup intermitent
    layPilihAktuatorHeaderIntermittent = app.AddLayout(laySetupIntermittent, 'Linear', 'Horizontal')
    layPilihAktuatorHeaderIntermittent.SetSize(0.9, 0.03)
    txtPilihAktuatorHeader1Intermittent = app.AddText(layPilihAktuatorHeaderIntermittent, 'Output 1', 0.4, 0.03)
    txtPilihAktuatorHeader1Intermittent.SetTextSize(10)
    txtPilihAktuatorHeader2Intermittent = app.AddText(layPilihAktuatorHeaderIntermittent, 'Output 2', 0.4, 0.03)
    txtPilihAktuatorHeader2Intermittent.SetTextSize(10)
    //selectAktuator1 = MUI.CreateButtonRaised('Pilih Aktuator',0.4,0.05,'white','blue')
    layPilihAktuatorIntermittent = app.AddLayout(laySetupIntermittent, 'Linear', 'Horizontal')
    layPilihAktuatorIntermittent.SetSize(0.9, 0.06)

    selectAktuator1Intermittent = MUI.CreateButtonRaised('Pilih Aktuator', 0.4, 0.06, 'white', 'blue')
    selectAktuator1Intermittent.SetOnTouch(selectAktuator1Intermittent_click)

    selectAktuator2Intermittent = MUI.CreateButtonRaised('Pilih Aktuator', 0.4, 0.06, 'white', 'blue')
    selectAktuator2Intermittent.SetOnTouch(selectAktuator2Intermittent_click)

    //selectAktuator2 = MUI.CreateSpinner(listAktuator,0.4,0.05)
    layPilihAktuatorIntermittent.AddChild(selectAktuator1Intermittent)
    layPilihAktuatorIntermittent.AddChild(selectAktuator2Intermittent)

    //layTargetSensorIntermittent = app.AddLayout(laySetupIntermittent,'Linear','Horizontal')
    //layTargetSensorIntermittent.SetSize(0.8,0.2)

    layTargetLengasIntermittent = app.AddLayout(laySetupIntermittent, 'Linear', 'Horizontal')
    layTargetLengasIntermittent.SetSize(0.8, 0.15)
    layTargetLengasIntermittent.SetMargins(0, 0.05, 0, 0)
    layTargetGenanganIntermittent = app.AddLayout(laySetupIntermittent, 'Linear', 'Horizontal')
    layTargetGenanganIntermittent.SetSize(0.8, 0.15)


    txtHeaderTargetLengasIntermittent = app.AddText(layTargetLengasIntermittent, 'Set Lengas(Aktuator ON)', 0.5, 0.15, 'Left,VCenter')
    txtHeaderTargetLengasIntermittent.SetTextSize(12)
    targetPickerLengasIntermittent = uix.CreateNumberPicker(20, 'NoCycle')
    targetPickerLengasIntermittent.SetRange(10, 100)
    targetPickerLengasIntermittent.SetDecimalPlaces(0)
    targetPickerLengasIntermittent.SetTextColor('black')
    targetPickerLengasIntermittent.SetOnChange(targetPickerLengasIntermittent_change)
    layTargetLengasIntermittent.AddChild(targetPickerLengasIntermittent);

    txtHeaderTargetGenanganIntermittent = app.AddText(layTargetGenanganIntermittent, 'Set Genangan(Aktuator OFF)', 0.5, 0.15, 'Left,VCenter')
    txtHeaderTargetGenanganIntermittent.SetTextSize(12)
    targetPickerGenanganIntermittent = uix.CreateNumberPicker(5, 'NoCycle')
    targetPickerGenanganIntermittent.SetRange(1, 15)
    targetPickerGenanganIntermittent.SetDecimalPlaces(0)
    targetPickerGenanganIntermittent.SetTextColor('black')
    targetPickerGenanganIntermittent.SetOnChange(targetPickerGenanganIntermittent_change)
    layTargetGenanganIntermittent.AddChild(targetPickerGenanganIntermittent)

}

function btnTargetON_click() {
    targetPicker.Show()
}

function btnJadwal1_click(val) {
    if (val) {
        btnJadwal1.SetStyle('green', 'green', 100, 'white', 1, 0)

    } else {
        //btnJadwal1.SetColor('black','white')
        //btnJadwal1.SetBackGradient('black','white','white')
    }

}

function btnJadwal2_click(val) {

}
function btnJadwal3_click(val) {

}

function setMixAtarget_change(val) {
    dataTask[mixIndex].targetMixA = val / 100
    cardMain[mixIndex].data.txtNamaMixA.SetText(dataTask[mixIndex].namaMixA + '(' + dataTask[mixIndex].targetMixA + ')')
}
function setMixBtarget_change(val) {
    dataTask[mixIndex].targetMixB = val / 100
    cardMain[mixIndex].data.txtNamaMixB.SetText(dataTask[mixIndex].namaMixB + '(' + dataTask[mixIndex].targetMixB + ')')
}
function createSeekBar() {
    var seekBarView = app.CreateWebView(0.8, 0.07);
    layPicker.AddChild(seekBarView)
    var imgPath = "file://" + app.GetAppPath() + "/Img/off5.png";
    var html = '<!DOCTYPE html>'+
'<html><head><style>input[type=range] {' +
  '-webkit-appearance: none;  width: 100%;  height: 15px;  background: #ddd;  border-radius: 5px;  outline: none;}'+
'input[type=range]::-webkit-slider-thumb {  -webkit-appearance: none;  appearance: none;  width: 40px;  height: 40px;   background: url(${' + imgPath +'}) no-repeat center;  background-size: contain;  cursor: pointer;}' +
'input[type=range]:focus {  outline: none;}</style></head><body>  <input type="range" min="1" max="100" value="50"></body></html>'



    // Load HTML ke dalam WebView
    seekBarView.LoadHtml(html);
}


function setMixCtarget_change(val) {
    dataTask[mixIndex].targetMixC = val / 100
    cardMain[mixIndex].data.txtNamaMixC.SetText(dataTask[mixIndex].namaMixC + '(' + dataTask[mixIndex].targetMixC + ')')
}

function targetPicker_change(val) {
    // app.ShowPopup('picker: ' + val)
    btnTargetON.SetText('ON pada ' + val + 'C')
    if ((setupIndex != mixIndex) && (setupIndex != interIndex)) {
        //dataTask[setupIndex].sensorTriger = parseInt(val)
        //update   
        //cardMain[setupIndex].data.autoBtn.SetText('Auto' + dataTask[setupIndex].type + ' ' + dataTask[setupIndex].sensorTriger)

    }

}

function targetPickerLengasIntermittent_change(val) {
    if (setupIndex == interIndex) {
        dataTask[setupIndex].targetOn = parseInt(val)
    }
}

function targetPickerGenanganIntermittent_change(val) {
    if (setupIndex == interIndex) {
        dataTask[setupIndex].targetOff = parseInt(val)

    }
}

function selectAktuator1_click() {
    aktuatorNumber = 1
    pickerAktuator.Show()
}

function selectAktuator2_click() {
    aktuatorNumber = 2
    pickerAktuator.Show()
}

function selectAktuator1Intermittent_click() {
    aktuatorNumber = 1
    pickerAktuator.Show()
}

function selectAktuator2Intermittent_click() {
    aktuatorNumber = 2
    pickerAktuator.Show()
}

function pickerAktuator_select(name, index) {

    if (aktuatorNumber === 1) {
        if (setupIndex == interIndex) {
            selectAktuator1Intermittent.SetText(name)
        } else {
            selectAktuator1.SetText(name)
        }

        //simpan
        dataTask[setupIndex].aktuatorUse1 = index
    } else if (aktuatorNumber === 2) {
        if (setupIndex == interIndex) {
            selectAktuator2Intermittent.SetText(name)
        } else {
            selectAktuator2.SetText(name)
        }

        //simpan
        dataTask[setupIndex].aktuatorUse2 = index
    }

}

function addCard(row, idx) {
    let txtValueA, txtValueB, txtValueC
    var card = app.CreateLayout("Card", "TouchSpy")
    card.SetCornerRadius(5)
    card.SetBackColor("#212121")
    card.SetSize(width, height)
    //card.SetOnTouchUp(cekCard_click)
    //card.SetMargins(isPortrait ? 0.05 : 0.015, 0.02, isPortrait ? 0.05 : 0.015, 0.02)
    cekIndex(row.type, idx)

    let layContent = app.AddLayout(card, 'Linear', 'FillXY')
    layContent.SetSize(width, height)
    let layContentAtas = app.AddLayout(layContent, "Linear", "TouchSpy")
    layContentAtas.SetSize(width, (height - (height / 4)))
    //layContentAtas.SetOnTouchUp(cekCard_click)
    layContentAtas.SetBackground("/Sys/Img/Sky.jpg")
    btnSetup.push(layContentAtas)
    eval("btnSetup[" + (btnSetup.length - 1) + "].SetOnTouchUp(function(){cekCard_click(" + idx.toString() + ");} );");

    //let img = app.AddImage(layContentAtas, "/Sys/Img/Sky.jpg", width,(height - (height/3)))

    txtTitle = app.AddText(layContentAtas, row.type, width, 0.03, "Center,FillX")
    txtTitle.SetPadding(0, 0.015)
    txtTitle.SetFontFile('Misc/MondayFeelings.ttf')
    txtTitle.SetTextSize(24, "px")
    txtTitle.SetEllipsize("end")
    txtTitle.SetTextColor("black")

    btnAuto = app.AddText(layContent, 'Auto' + row.type, width, height / 4, 'VCenter,Bold')
    // btnAuto = app.CreateText('<b>tes</b><br>\n<small>kecil</small>',width, height / 4, 'Html')
    // layContent.AddChild(btnAuto)
    btnAuto.SetTextColor('white')
    btnAuto.SetTextSize(12)
    btnAuto.SetBackColor('red')
    autoBtn.push(btnAuto)

    //txtAutoButton.SetOnTouchUp(txtAutoButton_click)
    eval("autoBtn[" + (autoBtn.length - 1) + "].SetOnTouchUp(function(){autoBtn_click(" + idx.toString() + ");} );");

    if (row.type === 'ABMix') {
        txtTitle.SetText('Campur')
        layMix = app.AddLayout(layContentAtas, 'Linear', 'Horizontal')
        layMix.SetSize(width, (height - (height / 4)))

        layMixKiri = app.AddLayout(layMix, 'Linear', 'Vertical,VTop,HLeft')
        layMixKiri.SetSize(width * 0.6, (height - (height / 4)))
        layMixKanan = app.AddLayout(layMix, 'Linear', 'Vertical,VTop,HLeft')
        layMixKanan.SetSize(width * 0.4, (height - (height / 4)))

        txtNamaMixA = app.AddText(layMixKiri, row.namaMixA + '(' + row.targetMixA + ')', width * 0.6, 0.03, "HLeft,FillX")
        txtNamaMixA.SetTextSize(12)
        txtNamaMixA.SetMargins(0.02, 0, 0, 0)
        //txtNamaMixA.SetBackColor('green')
        //txtNamaMixA.SetFontFile('Misc/MondayFeelings.ttf')
        txtNamaMixA.SetTextColor('#1A11A5')
        txtNamaMixB = app.AddText(layMixKiri, row.namaMixB + '(' + row.targetMixB + ')', width * 0.6, 0.03, "HLeft,FillX")
        txtNamaMixB.SetTextSize(12)
        txtNamaMixB.SetMargins(0.02, 0, 0, 0)
        //txtNamaMixB.SetFontFile('Misc/MondayFeelings.ttf')
        txtNamaMixB.SetTextColor('#1A11A5')
        txtNamaMixC = app.AddText(layMixKiri, row.namaMixC + '(' + row.targetMixC + ')', width * 0.6, 0.03, "HLeft,FillX")
        txtNamaMixC.SetTextSize(12)
        txtNamaMixC.SetMargins(0.02, 0, 0, 0.01)
        //txtNamaMixC.SetFontFile('Misc/MondayFeelings.ttf')
        txtNamaMixC.SetTextColor('#1A11A5')

        txtValueMixA = app.AddText(layMixKanan, ' > ' + getFlowValue(row.flowSensorA), width * 0.4, 0.03, "HLeft")
        txtValueMixA.SetTextSize(12)
        txtValueMixA.SetTextColor('#1A11A5')

        txtValueMixB = app.AddText(layMixKanan, ' > ' + getFlowValue(row.flowSensorB), width * 0.4, 0.03, "HLeft")
        txtValueMixB.SetTextSize(12)
        txtValueMixB.SetTextColor('#1A11A5')

        txtValueMixC = app.AddText(layMixKanan, ' > ' + getFlowValue(row.flowSensorC), width * 0.4, 0.03, "HLeft")
        txtValueMixC.SetTextSize(12)
        txtValueMixC.SetTextColor('#1A11A5')

        btnAuto.SetText('START')

    } else if (row.type === 'Genangan') {
        cardIndikator = app.AddLayout(layContentAtas, 'Card')
        cardIndikator.SetSize(width / 4, height / 2)
        cardIndikator.SetBackColor('#55D5F5')
        levelIndikator = app.AddLayout(cardIndikator, 'Linear')
        levelIndikator.SetSize(width / 4, height / 2)
        levelIndikator.SetBackColor('#F8F9F9')
        btnAuto.SetText('Auto' + row.type)
    } else if (row.type === 'Intermittent') {
        layIntContent = app.AddLayout(layContentAtas, 'Linear', 'Horizontal')
        layIntContent.SetSize(width, (height - (height / 4)))

        txtIntermittentSensorValue = app.AddText(layIntContent, getSensorValue(row.type, row.sensorUse1), width / 2, (height - (height / 2)), 'VCenter')
        txtIntermittentSensorValue.SetTextSize(24)
        txtIntermittentSensorValue.SetTextColor('#1A11A5')
        txtIntermittentSensorValue.SetFontFile('Misc/MotleyForces.ttf')

        layLevel = app.AddLayout(layIntContent, 'Linear', 'Vertical')
        layLevel.SetSize(width / 2, (height - (height / 4)))

        txtLevelValue = app.AddText(layLevel, '0', width / 4, 0.02)
        txtLevelValue.SetTextSize(10)

        cardIntermittentIndikator = app.AddLayout(layLevel, 'Card')
        cardIntermittentIndikator.SetSize(width / 4, height / 3)
        cardIntermittentIndikator.SetBackColor('#55D5F5')
        levelIntermittentIndikator = app.AddLayout(cardIntermittentIndikator, 'Linear')
        levelIntermittentIndikator.SetSize(width / 4, height / 3)
        levelIntermittentIndikator.SetBackColor('#F8F9F9')

        //txtTargetInter = app.AddText(layContentAtas,'tes123',width,0.02)
        //txtTargetInter.SetTextSize(10)
        //btnAuto.SetText('Auto' + row.type)
        btnAuto.SetHtml('Auto' + row.type)
    } else {
        txtValue = app.AddText(layContentAtas, getSensorValue(row.type, row.sensorUse1), width, 0.07, "VTop,HCenter")
        txtValue.SetTextSize(36)
        //txtValue.SetBackColor('gray')
        txtValue.SetFontFile('Misc/MotleyForces.ttf')
        txtValue.SetTextColor('#1A11A5')
        txtValue.SetMargins(0, 0.02, 0, 0)
        txtAction = app.AddText(layContentAtas, 'ON>' + row.targetOn + ' --  OFF<' + row.targetOff, width, 0.04)
        txtAction.SetTextSize(10)
        //txtValue.SetBackColor('blue')
    }

    card.data.text = row.text
    card.data.title = row.type
    card.data.nama = row.nama
    card.data.image = layContent
    card.data.txtValue = txtValue
    card.data.autoBtn = btnAuto
    card.data.txtAction = txtAction
    if (row.type === 'ABMix') {
        card.data.txtValueMixA = txtValueMixA
        card.data.txtValueMixB = txtValueMixB
        card.data.txtValueMixC = txtValueMixC
        card.data.txtNamaMixA = txtNamaMixA
        card.data.txtNamaMixB = txtNamaMixB
        card.data.txtNamaMixC = txtNamaMixC
    } else if (row.type === 'Intermittent') {

        card.data.txtIntermittentSensorValue = txtIntermittentSensorValue
        card.data.txtLevelValue = txtLevelValue
        card.data.levelIntermittentIndikator = levelIntermittentIndikator

    }
    return card
}


function cekCard_click(idx) {
    if (++clickCount > 1) {
        clickCount = 0

        setupIndex = idx

        FlipToInfo(idx)
    }
    setTimeout(() => { clickCount = 0 }, 500)
}

function loadSetupPreset(idx) {
    let splitJadwal
    switch (idx) {
        case tempIndex:
            txtTargetSatuan.SetText('°C')
            laySetup1.Show()
            laySetupMix.Hide()
            laySetupIntermittent.Hide()

            selectSensorLengas.Hide()
            selectSensorHumidity.Hide()
            selectSensorTemperature.Show()
            selectSensorGenangan.Hide()
            //load target temperature
            targetPicker.SetValue(dataTask[tempIndex].sensorTriger)

            //load aktuator
            selectAktuator1.SetText(listAktuator[dataTask[tempIndex].aktuatorUse1].name)
            selectAktuator2.SetText(listAktuator[dataTask[tempIndex].aktuatorUse2].name)
            //load sensor
            selectSensorTemperature.SelectItemByIndex(listTemperature[dataTask[tempIndex].sensorUse1])

            //load jadwal
            //                0 1  2  3 4 5 6 7 8 9 0 1 2 3 4 
            //format jadwal '12,35,30,0,0,0,0,0,0,0,0,0,0,0,0'
            splitJadwal = dataTask[tempIndex].jadwal.split(',')
            jw1 = splitJadwal[0] + ':' + splitJadwal[1] + ' > ' + splitJadwal[2] + '°C'
            jw2 = splitJadwal[3] + ':' + splitJadwal[4] + ' > ' + splitJadwal[5] + '°C'
            jw3 = splitJadwal[6] + ':' + splitJadwal[7] + ' > ' + splitJadwal[8] + '°C'
            btnJadwal1.SetText(jw1)
            btnJadwal2.SetText(jw2)
            btnJadwal3.SetText(jw3)
            break;
        case humIndex:
            txtTargetSatuan.SetText('%')
            laySetup1.Show()
            laySetupMix.Hide()
            laySetupIntermittent.Hide()

            selectSensorLengas.Hide()
            selectSensorHumidity.Show()
            selectSensorTemperature.Hide()
            selectSensorGenangan.Hide()

            //load target temperature
            targetPicker.SetValue(dataTask[humIndex].sensorTriger)

            //load aktuator
            selectAktuator1.SetText(listAktuator[dataTask[humIndex].aktuatorUse1].name)
            selectAktuator2.SetText(listAktuator[dataTask[humIndex].aktuatorUse2].name)

            //load sensor
            selectSensorHumidity.SelectItemByIndex(listHumidity[dataTask[humIndex].sensorUse1])

            //load jadwal
            //                0 1  2  3 4 5 6 7 8 9 0 1 2 3 4 
            //format jadwal '12,35,30,0,0,0,0,0,0,0,0,0,0,0,0'
            splitJadwal = dataTask[humIndex].jadwal.split(',')
            jw1 = splitJadwal[0] + ':' + splitJadwal[1] + ' > ' + splitJadwal[2] + '%'
            jw2 = splitJadwal[3] + ':' + splitJadwal[4] + ' > ' + splitJadwal[5] + '%'
            jw3 = splitJadwal[6] + ':' + splitJadwal[7] + ' > ' + splitJadwal[8] + '%'
            btnJadwal1.SetText(jw1)
            btnJadwal2.SetText(jw2)
            btnJadwal3.SetText(jw3)
            break;

        case lengasIndex:
            txtTargetSatuan.SetText('%')
            laySetup1.Show()
            laySetupMix.Hide()
            laySetupIntermittent.Hide()

            selectSensorLengas.Show()
            selectSensorHumidity.Hide()
            selectSensorTemperature.Hide()
            selectSensorGenangan.Hide()

            //load target temperature
            targetPicker.SetValue(dataTask[lengasIndex].sensorTriger)

            //load aktuator
            selectAktuator1.SetText(listAktuator[dataTask[lengasIndex].aktuatorUse1].name)
            selectAktuator2.SetText(listAktuator[dataTask[lengasIndex].aktuatorUse2].name)

            //load sensor
            selectSensorLengas.SelectItemByIndex(listLengas[dataTask[lengasIndex].sensorUse1])

            //load jadwal
            //                0 1  2  3 4 5 6 7 8 9 0 1 2 3 4 
            //format jadwal '12,35,30,0,0,0,0,0,0,0,0,0,0,0,0'
            splitJadwal = dataTask[lengasIndex].jadwal.split(',')
            jw1 = splitJadwal[0] + ':' + splitJadwal[1] + ' > ' + splitJadwal[2] + '%'
            jw2 = splitJadwal[3] + ':' + splitJadwal[4] + ' > ' + splitJadwal[5] + '%'
            jw3 = splitJadwal[6] + ':' + splitJadwal[7] + ' > ' + splitJadwal[8] + '%'
            btnJadwal1.SetText(jw1)
            btnJadwal2.SetText(jw2)
            btnJadwal3.SetText(jw3)
            break;

        case mixIndex:
            laySetup1.Hide()
            laySetupMix.Show()
            laySetupIntermittent.Hide()
            break;
        case interIndex:
            laySetup1.Hide()
            laySetupMix.Hide()
            laySetupIntermittent.Show()

            selectAktuator1Intermittent.SetText(listAktuator[dataTask[interIndex].aktuatorUse1].name)
            selectAktuator2Intermittent.SetText(listAktuator[dataTask[interIndex].aktuatorUse2].name)
            targetPickerLengasIntermittent.SetValue(dataTask[interIndex].targetOn)
            targetPickerGenanganIntermittent.SetValue(dataTask[interIndex].targetOff)
    }
}

function FlipToInfo(idx) {
    //this: clicked card.
    canvas.Show()
    var from = cardMain[idx].GetPosition("screen")

    loadSetupPreset(idx)

    canvas.ChildToFront(layInfo)
    //Hide the picture on the clicked card.
    cardMain[idx].Hide()
    infoTitle.SetText(dataTask[idx].nama)
    //infoText.SetText(this.data.text)
    layInfo.Animate("Fadein", null, 500)

    //We added 0.02 to make it a little curvy.
    var target = {
        x: 0.1,
        y: [0.02, isPortrait ? 0.1 : 0.15]
    }

    laySetup.Tween(target, 500, "Exponential.InOut", 0, false, function () {
        btnBack.Animate("SlideFromTop", null, 250)
        infoTitle.Animate("SlideFromRight", null, 500)
        laySetup.Animate("SlideFromBottom", null, 500)
    })

    //We can restore it by keeping the initial information.
    flippedPos = from
    flippedImage = cardMain[idx]
}

function FlipToBack() {
    btnBack.Animate("SlideToTop", null, 250)
    infoTitle.Animate("SlideToRight", null, 250)
    laySetup.Animate("SlideToBottom", null, 250)
    layInfo.Animate("Fadeout", null, 500)
    //We added 0.02 to make it a little curvy.
    var target = {
        x: [0.02, flippedPos.left],
        y: flippedPos.top - diff + 0.1
    }

    flippedPos = null
    flippedImage.Show()

    laySetup.Tween(target, 500, "Exponential.InOut", 0, false, function () {
        //flippedImage.Show()

        //When we destroy the image we created, there is a small dark flash.
        //To avoid this, let's bring the card layout forward and leave the clone behind.
        canvas.ChildToFront(scroller)


        flippedImage = null
    })
}

function cekIndex(type, idx) {
    if (type === 'Temperature') {
        tempIndex = idx
    } else if (type === 'Humidity') {
        humIndex = idx
    } else if (type === 'Lengas') {
        lengasIndex = idx
    } else if (type === 'ABMix') {
        mixIndex = idx
    } else if (type === 'Intermittent') {
        interIndex = idx
    } else if (type === 'Genangan') {
        genanganIndex = idx
    }
}

function autoBtn_click(idx) {
    //app.ShowPopup(idx)
    if (dataTask[idx].enable == 1) {
        dataTask[idx].enable = 0
        dataTask[idx].status = 0

        cardMain[idx].data.autoBtn.SetBackColor('red')
        if (dataTask[idx].type === 'ABMix') {
            resetMixAktuator()
            autoBtn[idx].SetHtml('START')
        } else {
            //reset aktuator
            kontrolAktuator(dataTask[idx].aktuatorUse1, OFF)
            setTimeout(() => { kontrolAktuator(dataTask[idx].aktuatorUse2, OFF) }, 250)
        }

    } else {
        dataTask[idx].enable = 1
        dataTask[idx].status = 0
        cardMain[idx].data.autoBtn.SetBackColor('#03A728')
        if (dataTask[idx].type === 'ABMix') {

            autoBtn[idx].SetHtml('STOP')

        }
    }


}
