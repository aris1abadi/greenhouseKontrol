function loadBT() {
    bt = app.CreateBluetoothSerial()
    bt.SetOnConnect(bt_OnConnect)
    bt.SetOnReceive(bt_OnReceive)
    bt.SetOnDisconnect(bt_disconnect)
    bt.SetSplitMode("End", "\n")    
}

function bt_connect() {
    bt.Connect('karjoAgro V01')
    console.log('try conect BT')
}

function kirimKeNode(msg){
    bt.Write(msg)
}

function bt_disconnect() {
    btConnect_sts = false
    setTimeout(() => bt_connect(), 3000)
}

function bt_OnConnect() {
    btConnect_sts = true
    //app.ShowPopup("Tersambung dengan Gateway ")
}

function bt_OnReceive(data) {
    //app.ShowPopup(data)
    cekMsg(data)
}