function Decoder(bytes, port) {
  var temperature = bytes[0]<<24>>16 | bytes[1];
  var humidity = (bytes[2] << 8) | bytes[3];
  var pressure = ((bytes[4]) << 24) + ((bytes[5]) << 16) + ((bytes[6]) << 8) + ((bytes[7]));
  var battery = (bytes[8] << 8) | bytes[9];
  var battery_level = bytes[11];
  
  return {
    temperature: temperature / 100,
    humidity: humidity,
    pressure: pressure / 100,
    battery: battery / 1000,
    battery_level: battery_level
  }
}
