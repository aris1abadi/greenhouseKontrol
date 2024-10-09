//variable
let ble = null
let modal = null
let modalLay = null
let layMain = null
let layCanvas = null
let layInfo = null


let lastHumValue = 0
let lastTempValue = 0
let lastLengasValue = 0
let lastMixAValue = 0
let lastMixBValue = 0
let lastMixCValue = 0


let tempIndex = 0
let humIndex = 0
let lengasIndex = 0
let mixIndex = 0
let interIndex = 0

let humNow = 0
let tempNow = 0
let lengasNow = 0
let mixANow = 0
let mixBNow = 0
let mixCNow = 0

let lengasInterNow = 0
let lastLengasInter = 0;
let genanganInterNow = 0
let lastGenanganInter = 0


let mqttStatus = false

//bluethooth clasic
let btConnect_sts = false
let bt = null

let modalTitle = 'Temperature'
//let modalMode = 'Temperature'
let btnJadwal1
let btnJadwal2
let btnJadwal3

let btnJadwal1_save
let btnJadwal2_save
let btnJadwal3_save

let btnJadwal1_clicked = false
let btnJadwal2_clicked = false
let btnJadwal3_clicked = false


//mySensor 
let nodeId
let childId
let cmd
let type
let payload

//cmd
const presentations = 0
const set = 1
const reg = 2
const internal = 3

//presentations type
const S_DOOR = 0;	//!< Door sensor, V_TRIPPED, V_ARMED
const S_MOTION = 1;	//!< Motion sensor, V_TRIPPED, V_ARMED
const S_SMOKE = 2;	//!< Smoke sensor, V_TRIPPED, V_ARMED
const S_BINARY = 3;	//!< Binary light or relay, V_STATUS, V_WATT
const S_LIGHT = 3;	//!< \deprecated Same as const S_BINARY
const S_DIMMER = 4;	//!< Dimmable light or fan device, V_STATUS (on/off), V_PERCENTAGE (dimmer level 0-100), V_WATT
const S_COVER = 5;	//!< Blinds or window cover, V_UP, V_DOWN, V_STOP, V_PERCENTAGE (open/close to a percentage)
const S_TEMP = 6;	//!< Temperature sensor, V_TEMP
const S_HUM = 7;	//!< Humidity sensor, V_HUM
const S_BARO = 8;	//!< Barometer sensor, V_PRESSURE, V_FORECAST
const S_WIND = 9;	//!< Wind sensor, V_WIND, V_GUST
const S_RAIN = 10;	//!< Rain sensor, V_RAIN, V_RAINRATE
const S_UV = 11;	//!< Uv sensor, V_UV
const S_WEIGHT = 12;	//!< Personal scale sensor, V_WEIGHT, V_IMPEDANCE
const S_POWER = 13;	//!< Power meter, V_WATT, V_KWH, V_VAR, V_VA, V_POWER_FACTOR
const S_HEATER = 14;	//!< Header device, V_HVAC_SETPOINT_HEAT, V_HVAC_FLOW_STATE, V_TEMP
const S_DISTANCE = 15;	//!< Distance sensor, V_DISTANCE
const S_LIGHT_LEVEL = 16;	//!< Light level sensor, V_LIGHT_LEVEL (uncalibrated in percentage),  V_LEVEL (light level in lux)
const S_ARDUINO_NODE = 17;	//!< Used (internally) for presenting a non-repeating Arduino node
const S_ARDUINO_REPEATER_NODE = 18;	//!< Used (internally) for presenting a repeating Arduino node
const S_LOCK = 19;	//!< Lock device, V_LOCK_STATUS
const S_IR = 20;	//!< IR device, V_IR_SEND, V_IR_RECEIVE
const S_WATER = 21;	//!< Water meter, V_FLOW, V_VOLUME
const S_AIR_QUALITY = 22;	//!< Air quality sensor, V_LEVEL
const S_CUSTOM = 23;	//!< Custom sensor
const S_DUST = 24;	//!< Dust sensor, V_LEVEL
const S_SCENE_CONTROLLER = 25;	//!< Scene controller device, V_SCENE_ON, V_SCENE_OFF.
const S_RGB_LIGHT = 26;	//!< RGB light. Send color component data using V_RGB. Also supports V_WATT
const S_RGBW_LIGHT = 27;	//!< RGB light with an additional White component. Send data using V_RGBW. Also supports V_WATT
const S_COLOR_SENSOR = 28;	//!< Color sensor, send color information using V_RGB
const S_HVAC = 29;	//!< Thermostat/HVAC device. V_HVAC_SETPOINT_HEAT, V_HVAC_SETPOINT_COLD, V_HVAC_FLOW_STATE, V_HVAC_FLOW_MODE, V_TEMP
const S_MULTIMETER = 30;	//!< Multimeter device, V_VOLTAGE, V_CURRENT, V_IMPEDANCE
const S_SPRINKLER = 31;	//!< Sprinkler, V_STATUS (turn on/off), V_TRIPPED (if fire detecting device)
const S_WATER_LEAK = 32;	//!< Water leak sensor, V_TRIPPED, V_ARMED
const S_SOUND = 33;	//!< Sound sensor, V_TRIPPED, V_ARMED, V_LEVEL (sound level in dB)
const S_VIBRATION = 34;	//!< Vibration sensor, V_TRIPPED, V_ARMED, V_LEVEL (vibration in Hz)
const S_MOISTURE = 35;	//!< Moisture sensor, V_TRIPPED, V_ARMED, V_LEVEL (water content or moisture in percentage?)
const S_INFO = 36;	//!< LCD text device / Simple information device on controller, V_TEXT
const S_GAS = 37;	//!< Gas meter, V_FLOW, V_VOLUME
const S_GPS = 38;	//!< GPS Sensor, V_POSITION
const S_WATER_QUALITY = 39;	//!< V_TEMP, V_PH, V_ORP, V_EC, V_STATUS


//internal type
const I_BATTERY_LEVEL = 0;	//!< Battery level
const I_TIME = 1;	//!< Time (request/response)
const I_VERSION = 2;	//!< Version
const I_ID_REQUEST = 3;	//!< ID request
const I_ID_RESPONSE = 4;	//!< ID response
const I_INCLUSION_MODE = 5;	//!< Inclusion mode
const I_CONFIG = 6;	//!< Config (request/response)
const I_FIND_PARENT_REQUEST = 7;	//!< Find parent
const I_FIND_PARENT_RESPONSE = 8;	//!< Find parent response
const I_LOG_MESSAGE = 9;	//!< Log message
const I_CHILDREN = 10;	//!< Children
const I_SKETCH_NAME = 11;	//!< Sketch name
const I_SKETCH_VERSION = 12;	//!< Sketch version
const I_REBOOT = 13;	//!< Reboot request
const I_GATEWAY_READY = 14;	//!< Gateway ready
const I_SIGNING_PRESENTATION = 15;	//!< Provides signing related preferences (first byte is preference version)
const I_NONCE_REQUEST = 16;	//!< Request for a nonce
const I_NONCE_RESPONSE = 17;	//!< Payload is nonce data
const I_HEARTBEAT_REQUEST = 18;	//!< Heartbeat request
const I_PRESENTATION = 19;	//!< Presentation message
const I_DISCOVER_REQUEST = 20;	//!< Discover request
const I_DISCOVER_RESPONSE = 21;	//!< Discover response
const I_HEARTBEAT_RESPONSE = 22;	//!< Heartbeat response
const I_LOCKED = 23;	//!< Node is locked (reason in string-payload)
const I_PING = 24;	//!< Ping sent to node, payload incremental hop counter
const I_PONG = 25;	//!< In return to ping, sent back to sender, payload incremental hop counter
const I_REGISTRATION_REQUEST = 26;	//!< Register request to GW
const I_REGISTRATION_RESPONSE = 27;	//!< Register response from GW
const I_DEBUG = 28;	//!< Debug message
const I_SIGNAL_REPORT_REQUEST = 29;	//!< Device signal strength request
const I_SIGNAL_REPORT_REVERSE = 30;	//!< Internal
const I_SIGNAL_REPORT_RESPONSE = 31;	//!< Device signal strength response (RSSI)
const I_PRE_SLEEP_NOTIFICATION = 32;	//!< Message sent before node is going to sleep
const I_POST_SLEEP_NOTIFICATION = 33;	//!< Message sent after node woke up (if enabled)


//set/req type
const V_TEMP = 0;	//!< S_TEMP. Temperature S_TEMP, S_HEATER, S_HVAC
const V_HUM = 1;	//!< S_HUM. Humidity
const V_STATUS = 2;	//!< S_BINARY, S_DIMMER, S_SPRINKLER, S_HVAC, S_HEATER. Used for setting/reporting binary (on/off) status. 1=on, 0=off
const V_LIGHT = 2;	//!< \deprecated Same as V_STATUS
const V_PERCENTAGE = 3;	//!< S_DIMMER. Used for sending a percentage value 0-100 (%).
const V_DIMMER = 3;	//!< \deprecated Same as V_PERCENTAGE
const V_PRESSURE = 4;	//!< S_BARO. Atmospheric Pressure
const V_FORECAST = 5;	//!< S_BARO. Whether forecast. string of "stable", "sunny", "cloudy", "unstable", "thunderstorm" or "unknown"
const V_RAIN = 6;	//!< S_RAIN. Amount of rain
const V_RAINRATE = 7;	//!< S_RAIN. Rate of rain
const V_WIND = 8;	//!< S_WIND. Wind speed
const V_GUST = 9;	//!< S_WIND. Gust
const V_DIRECTION = 10;	//!< S_WIND. Wind direction 0-360 (degrees)
const V_UV = 11;	//!< S_UV. UV light level
const V_WEIGHT = 12;	//!< S_WEIGHT. Weight(for scales etc)
const V_DISTANCE = 13;	//!< S_DISTANCE. Distance
const V_IMPEDANCE = 14;	//!< S_MULTIMETER, S_WEIGHT. Impedance value
const V_ARMED = 15;	//!< S_DOOR, S_MOTION, S_SMOKE, S_SPRINKLER. Armed status of a security sensor. 1 = Armed, 0 = Bypassed
const V_TRIPPED = 16;	//!< S_DOOR, S_MOTION, S_SMOKE, S_SPRINKLER, S_WATER_LEAK, S_SOUND, S_VIBRATION, S_MOISTURE. Tripped status of a security sensor. 1 = Tripped, 0
const V_WATT = 17;	//!< S_POWER, S_BINARY, S_DIMMER, S_RGB_LIGHT, S_RGBW_LIGHT. Watt value for power meters
const V_KWH = 18;	//!< S_POWER. Accumulated number of KWH for a power meter
const V_SCENE_ON = 19;	//!< S_SCENE_CONTROLLER. Turn on a scene
const V_SCENE_OFF = 20;	//!< S_SCENE_CONTROLLER. Turn of a scene
const V_HVAC_FLOW_STATE = 21;	//!< S_HEATER, S_HVAC. HVAC flow state ("Off", "HeatOn", "CoolOn", or "AutoChangeOver")
const V_HEATER = 21;	//!< \deprecated Same as V_HVAC_FLOW_STATE
const V_HVAC_SPEED = 22;	//!< S_HVAC, S_HEATER. HVAC/Heater fan speed ("Min", "Normal", "Max", "Auto")
const V_LIGHT_LEVEL = 23;	//!< S_LIGHT_LEVEL. Uncalibrated light level. 0-100%. Use V_LEVEL for light level in lux
const V_VAR1 = 24;	//!< VAR1
const V_VAR2 = 25;	//!< VAR2
const V_VAR3 = 26;	//!< VAR3
const V_VAR4 = 27;	//!< VAR4
const V_VAR5 = 28;	//!< VAR5
const V_UP = 29;	//!< S_COVER. Window covering. Up
const V_DOWN = 30;	//!< S_COVER. Window covering. Down
const V_STOP = 31;	//!< S_COVER. Window covering. Stop
const V_IR_SEND = 32;	//!< S_IR. Send out an IR-command
const V_IR_RECEIVE = 33;	//!< S_IR. This message contains a received IR-command
const V_FLOW = 34;	//!< S_WATER. Flow of water (in meter)
const V_VOLUME = 35;	//!< S_WATER. Water volume
const V_LOCK_STATUS = 36;	//!< S_LOCK. Set or get lock status. 1=Locked, 0=Unlocked
const V_LEVEL = 37;	//!< S_DUST, S_AIR_QUALITY, S_SOUND (dB), S_VIBRATION (hz), S_LIGHT_LEVEL (lux)
const V_VOLTAGE = 38;	//!< S_MULTIMETER
const V_CURRENT = 39;	//!< S_MULTIMETER
const V_RGB = 40;	//!< S_RGB_LIGHT, S_COLOR_SENSOR. Sent as ASCII hex: RRGGBB (RR=red, GG=green, BB=blue component)
const V_RGBW = 41;	//!< S_RGBW_LIGHT. Sent as ASCII hex: RRGGBBWW (WW=white component)
const V_ID = 42;	//!< Used for sending in sensors hardware ids (i.e. OneWire DS1820b).
const V_UNIT_PREFIX = 43;	//!< Allows sensors to send in a string representing the unit prefix to be displayed in GUI, not parsed by controller! E.g. cm, m, km, inch.
const V_HVAC_SETPOINT_COOL = 44;	//!< S_HVAC. HVAC cool setpoint (Integer between 0-100)
const V_HVAC_SETPOINT_HEAT = 45;	//!< S_HEATER, S_HVAC. HVAC/Heater setpoint (Integer between 0-100)
const V_HVAC_FLOW_MODE = 46;	//!< S_HVAC. Flow mode for HVAC ("Auto", "ContinuousOn", "PeriodicOn")
const V_TEXT = 47;	//!< S_INFO. Text message to display on LCD or controller device
const V_CUSTOM = 48;	//!< Custom messages used for controller/inter node specific commands, preferably using S_CUSTOM device type.
const V_POSITION = 49;	//!< GPS position and altitude. Payload: latitude;longitude;altitude(m). E.g. "55.722526;13.017972;18"
const V_IR_RECORD = 50;	//!< Record IR codes S_IR for playback
const V_PH = 51;	//!< S_WATER_QUALITY, water PH
const V_ORP = 52;	//!< S_WATER_QUALITY, water ORP : redox potential in mV
const V_EC = 53;	//!< S_WATER_QUALITY, water electric conductivity μS/cm (microSiemens/cm)
const V_VAR = 54;	//!< S_POWER, Reactive power: volt-ampere reactive (var)
const V_VA = 55;	//!< S_POWER, Apparent power: volt-ampere (VA)
const V_POWER_FACTOR = 56;	//!< S_POWER, Ratio of real power to apparent power: floating point value in the range [-1,..,1]


//usbSerial
let usbSerial = null
let usbSerialSts = false


//mqtt
let mqttSts = false

//
const ON = 1
const OFF = 0


//node
function node(n_id, c_id, sts, val, lastUpdate, nama) {
    this.nodeId = n_id;
    this.childId = c_id;
    this.status = sts;
    this.value = val;
    this.lastUpdate = lastUpdate;
    this.nama = nama;

}

function sensor(n_id, c_id, sts, intv, to, batt, val, k_min, k_max, lastUpdate, nama) {
    this.nodeId = n_id;
    this.childId = c_id;
    this.status = sts;
    this.interval = intv;
    this.timeOut = to;
    this.battLevel = batt;
    this.value = val;
    this.kalMin = k_min;//40
    this.kalMax = k_max;//500
    this.lastUpdate = lastUpdate;
    this.nama = nama;
}

let aktuator1 = new node(1, 1, 0, 0, '2024-09-20 19:20:03', 'Aktuator 1')
let aktuator2 = new node(1, 2, 0, 0, '2024-09-20 19:20:03', 'Aktuator 2')
let aktuator3 = new node(2, 1, 0, 0, '2024-09-20 19:20:03', 'Aktuator 3')
let aktuator4 = new node(2, 2, 0, 0, '2024-09-20 19:20:03', 'Aktuator 4')
let aktuator5 = new node(3, 1, 0, 0, '2024-09-20 19:20:03', 'Aktuator 5')
let aktuator6 = new node(3, 2, 0, 0, '2024-09-20 19:20:03', 'Aktuator 6')
let aktuator7 = new node(4, 1, 0, 0, '2024-09-20 19:20:03', 'Aktuator 7')
let aktuator8 = new node(4, 2, 0, 0, '2024-09-20 19:20:03', 'Aktuator 8')
let aktuator9 = new node(5, 1, 0, 0, '2024-09-20 19:20:03', 'Aktuator 9')
let aktuator10 = new node(5, 2, 0, 0, '2024-09-20 19:20:03', 'Aktuator 10')

let aktuator11 = new node(12, 1, 0, 0, '2024-09-20 19:20:03', 'Aktuator 11')
let aktuator12 = new node(12, 2, 0, 0, '2024-09-20 19:20:03', 'Aktuator 12')
let aktuator13 = new node(12, 3, 0, 0, '2024-09-20 19:20:03', 'Aktuator 13')
let aktuator14 = new node(12, 4, 0, 0, '2024-09-20 19:20:03', 'Aktuator 14')
let aktuator15 = new node(12, 5, 0, 0, '2024-09-20 19:20:03', 'Aktuator 15')
let aktuator16 = new node(12, 6, 0, 0, '2024-09-20 19:20:03', 'Aktuator 16')

let sensorLengas1 = new sensor(51, 10, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Lengas 1')
let sensorLengas2 = new sensor(52, 10, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Lengas 2')
let sensorLengas3 = new sensor(53, 10, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Lengas 3')
let sensorLengas4 = new sensor(54, 10, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Lengas 4')

let sensorGenanganL1 = new sensor(51, 11, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Genangan Low 1')
let sensorGenanganH1 = new sensor(51, 12, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Genangan High 1')

let sensorGenanganL2 = new sensor(52, 11, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Genangan Low 2')
let sensorGenanganH2 = new sensor(52, 12, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Genangan High 2')
let sensorGenanganL3 = new sensor(53, 11, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Genangan Low 3')
let sensorGenanganH3 = new sensor(53, 12, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Genangan High 3')
let sensorGenanganL4 = new sensor(54, 11, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Genangan Low 4')
let sensorGenanganH4 = new sensor(54, 12, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Genangan High 4')

let sensorHumidity1 = new sensor(100, 11, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Temperature')
let sensorTemperature1 = new sensor(100, 12, 0, 10, 0, 0, 0, 40, 500, '2024-09-20 19:20:03', 'Humidity')

let sensorFlow1 = new sensor(12, 20, 0, 10, 0, 0, 0, 4522, 500, '2024-09-20 19:20:03', 'Flowmeter 1')//ikut di node aktuator 11-16
let sensorFlow2 = new sensor(12, 21, 0, 10, 0, 0, 0, 4522, 500, '2024-09-20 19:20:03', 'Flowmeter 2')
let sensorFlow3 = new sensor(12, 22, 0, 10, 0, 0, 0, 4522, 500, '2024-09-20 19:20:03', 'Flowmeter 3')
let sensorFlow4 = new sensor(12, 23, 0, 10, 0, 0, 0, 4522, 500, '2024-09-20 19:20:03', 'Flowmeter 4')

let sensorLengasIntermittent = new sensor(101,10,0, 10, 0, 0, 0, 3062, 1235, '2024-09-20 19:20:03', 'Lengas Cap')
let sensorGenanganIntermittent = new sensor(101,11,0, 10, 0, 0, 0, 4522, 500, '2024-09-20 19:20:03', 'Genangan')
/*
struct task
{
    uint8_t enable = 0;
    uint8_t aktuatorUse1 = 0;
    uint8_t aktuatorUse2 = 0;
    uint8_t status = 0; // 1 on,0 off
    uint8_t durasiCount = 0;
    uint8_t jadwalAktif = 0; // 1-5
    uint8_t jadwal[15] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
    uint8_t sensorUse1 = 0;    // isi 0 jika tidak pake sensor
    uint8_t sensorTriger = 80; // ambang triger
    uint8_t sensorTrigerSpan = 1;
    uint8_t nama[16]={'A','u','t','o',' ','1',0,0,0,0,0,0,0,0,0,0};
};


*/

function task(en, akt1, akt2, sts, dc, ja, jw, sen_use,lv_use,t_on,t_off, nama, tp) {
    this.enable = en;
    this.aktuatorUse1 = akt1;
    this.aktuatorUse2 = akt2;
    this.status = sts;
    this.durasiCount = dc;
    this.jadwalAktif = ja;
    this.jadwal = jw;
    this.sensorUse1 = sen_use;
    this.sensorUse2 = lv_use;
    this.targetOn = t_on;
    this.targetOff = t_off;   
    this.nama = nama;
    this.type = tp;
}

function mix(en, ma, mb, mc, aduk, mo, fa, fb, fc, fo, ta, ta_sts, tb, tb_sts, tc, tc_sts, t_ec, mix_count, mix_target, sts, ja, jw, nm, nmA, nmB, nmC, tp) {

    this.enable = en;
    this.aktuatorMixA = ma;
    this.aktuatorMixB = mb;
    this.aktuatorMixC = mc;
    this.aktuatorAduk = aduk;
    this.aktuatorMixOut = mo;
    this.flowSensorA = fa;
    this.flowSensorB = fb;
    this.flowSensorC = fc;
    this.flowMixOut = fo;

    this.targetMixA = ta;
    this.targetMixAStatus = ta_sts;

    this.targetMixB = tb;
    this.targetMixBStatus = tb_sts

    this.targetMixC = tc;
    this.targetMixCStatus = tc_sts

    this.targetOutEC = t_ec;

    this.mixingCount = mix_count;    // durasi mixing
    this.mixingTarget = mix_target; // durasi mixing (+- 3 menit)    

    this.status = sts; // 1 on,0 off

    this.jadwalAktif = ja; // 1-5
    this.jadwal = jw;
    this.nama = nm;

    this.namaMixA = nmA;
    this.namaMixB = nmB;
    this.namaMixC = nmC;

    this.type = tp;

}

let autoTemperature = new task(0, 1, 2, 0, 0, 0, '12,35,30,0,0,0,0,0,0,0,0,0,0,0,0', 1,0, 80,10, 'Kontrol Temperature', 'Temperature')
let autoHumidity =    new task(0, 3, 4, 0, 0, 0, '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0', 1,0,80,10,  'Kontrol Humidity', 'Humidity')
let autoLengas =      new task(0, 5, 6, 0, 0, 0, '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0', 1,0,80,10,  'Kontrol Lengas', 'Lengas')
let autoGenangan =    new task(0, 5, 6, 0, 0, 0, '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0', 1,0, 80,10, 'Kontrol Genangan', 'Genangan')
let autoIntermittent = new task(0, 1, 2, 0, 0, 0, '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0', 1,1, 80,10, 'Kontrol Intermittent', 'Intermittent')

let autoAbMix = new mix(0, 11, 12, 13, 14, 15, 1, 2, 3, 4, 3, 0, 2, 0, 10, 0, 500, 0, 12, 0, 0, '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0', 'auto ABmix', 'Furadan', 'Bio extra', 'Air', 'ABMix')


//ui 
var flippedPos = null
var diff = 0
var frame = null
var createdImg = null
var isPortrait = app.IsPortrait()

//DH is shorthand for app.GetDisplayHeight()
//DW s shorthand for app.GetDisplayWidth()
//Let's keep the result (so as not to call it again every time).
var DWTH = DW()
var asp = DWTH / DH()

var width
if( DWTH <= 720 ) width = 0.4
else if ( DWTH <= 1280 ) width = 0.3
else width = 0.2
var height = asp * width

let infoTitle= null
let setupIndex = 0
let aktuatorNumber = 1
let pickerAktuator = null

let btnJadwal1_sts = false
let btnJadwal2_sts = false
let btnJadwal3_sts = false

let cardMain = []
let btnMin = []
let btnPlus = []
let autoBtn = []
let btnValue = []
let btnSetup = []

let enable = []
let clickCount = 0


let dataTask = [
    autoTemperature,
    autoHumidity,
    autoLengas,
    autoGenangan,
    autoIntermittent,
    autoAbMix
]

const listAktuator = [{ name: 'Aktuator1' }
    , { name: 'Aktuator2' }, { name: 'Aktuator3' }, { name: 'Aktuator4' }, { name: 'Aktuator5' }
    , { name: 'Aktuator6' }, { name: 'Aktuator7' }, { name: 'Aktuator8' }, { name: 'Aktuator9' }
    , { name: 'Aktuator10' }, { name: 'Aktuator11' }, { name: 'Aktuator12' }, { name: 'Aktuator13' }
    , { name: 'Aktuator14' }, { name: 'Aktuator15' }, { name: 'Aktuator16' }]

const listTemperatureSensor = [
    { name: "Sensor Temperature1" },
    { name: "Sensor Temperature2" },
    { name: "Sensor Temperature2" }

]
const listHumiditySensor = [
    { name: "Sensor Humidity1" },
    { name: "Sensor Humidity2" },
    { name: "Sensor Humidity3" }
]

const listLengasSensor = [
    { name: "Sensor Lengas1" },
    { name: "Sensor Lengas2" },
    { name: "Sensor Lengas3" },
    { name: "Sensor Lengas4" }
]

const listLengas= 'Sensor Lengas 1,Sensor Lengas 2,Sensor Lengas 3,Sensor Lengas 4'
const listHumidity = 'Sensor Humidity 1,Sensor Humidity 2,Sensor Humidity 3,Sensor Humidity 4'
const listTemperature = 'Sensor Temperature 1,Sensor Temperature 2,Sensor Temperature 3,Sensor Temperature 4'
const listGenangan ='Sensor Genangan 1,Sensor Genangan 2,Sensor Genangan 3,Sensor Genangan 4'

const listGenanganSensor = [
    { name: "Sensor Genangan1" },
    { name: "Sensor Genangan1" },
    { name: "Sensor Genangan1" },
    { name: "Sensor Genangan1" }
]
//default value 
const def_value = {
    "aktuator1DefVal": {
        "nodeId1": "1",
        "childId": "1"
    }
}

