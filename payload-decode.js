// decodeUplink() JS function for TTN V3
//
// See https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/#decode-uplink-function
// Example Input
//  {
//    "fPort": 4,
//    "bytes": [12, 178, 4, 128, 247, 174]
//  }

function decodeUplink(input) {
  var data = {};
  var bytes = input.bytes;

  data.temperature = ((bytes[0] << 8) | bytes[1]) / 100;
  data.humidity = (bytes[2] << 8) | bytes[3];
  data.pressure = (((bytes[4]) << 24) + ((bytes[5]) << 16) + ((bytes[6]) << 8) + ((bytes[7]))) / 100;
  data.battery = ((bytes[8] << 8) | bytes[9]) / 1000;

    return { 
      data: data,
      warnings: [],
      errors: []
  };
}