# Mini LoRa weatherstation

**This is a basic battery powered LoRa weather station based around a Bosch BME280 and Heltec CubeCell HTCC-AB01 development board. Data is sent via The Things Network (TTN) to a Ubidots dashboard.**

Thanks to the built in battery management and solar charging functionality of this board, as well as ultra low power consumption, we're finally able to put LoRa-connected sensors almost anywhere we want! I started out with this board building a simple weather station based on a BME280 sensor to record temperature, humidity and barometric pressure and test how long a battery will last using this board.

![dashboard](https://raw.githubusercontent.com/chrisys/mini-lora-weatherstation/main/assets/dashboard.png)

## Hardware required
* Bosch BME280 breakout board ([AliExpress](https://www.aliexpress.com/item/32849462236.html) - I chose these because the pinout exactly matches that of the dev board enabling you to solder it straight on)
* Heltec CubeCell HTCC-AB01 ([AliExpress](https://www.aliexpress.com/item/4000200371092.html) - be sure to select the correct LoRa frequency for your country)
* 3.7V LiPo cell (I'm using a 650mAh one) with a micro JST connector
* **Optional:** 6V 110x60mm solar panel ([AliExpress](https://www.aliexpress.com/item/1851948.html))

## Other requirements
* [Arduino IDE](https://www.arduino.cc/en/main/software)
* SiLabs CP2104 Driver ([installation instructions](https://heltec-automation-docs.readthedocs.io/en/latest/general/establish_serial_connection.html))
* CubeCell framework added to Arduino IDE ([installation instructions](https://heltec-automation-docs.readthedocs.io/en/latest/cubecell/quick_start.html))
* A free TTN account ([register here](https://account.thethingsnetwork.org/register))
* A free Ubidots STEM account ([register here](https://ubidots.com/stem/))
* You need to be in range of a TTN gateway ([here's a map](https://www.thethingsnetwork.org/map)) or have [built your own gateway](https://www.balena.io/blog/build-a-ttn-lora-gateway-with-balenafin-and-balenacloud/).

## TTN configuration
To decode the data on the TTN side, a custom payload format decoder function is required. This is included in `payload-decode.txt`. Simply paste the contents of this file into the `Decoder` input area under `Payload Formats` within the TTN console.

## PlatformIO support (optional)

Source code located in /src
* main.cpp (same as Arduino Sketch)
* ttnvalues.h (please update with your TTN console values)

* /platformio.ini (update __board_build.arduino.lorawan.*__ parameters according to your needs. Example defaults: EU868, Class A & OTAA activation mode)

[ASR605x LoRaWAN configuration parameters](https://docs.platformio.org/en/latest/platforms/asrmicro650x.html#configuration)  

## For the case

I used a Creality Ender 3 loaded with white PETG filament to print this case. Word has it that PETG is a good material to use for outdoor items that are going to be exposed to weather and UV. Time will tell.

* 1x Base (mini-lora-ws-base.stl)
* 6x Open layers (mini-lora-ws-openlayer.stl)
* 1x Closed layer (mini-lora-ws-closedlayer.stl)
* 1x Top layer (mini-lora-ws-top.stl)
* **Optional:** 1x Solar panel bracket
* M4 tap
* M4 stainless steel machine screws (for securing the top layer)
* M2 tap
* M2 stainless steel machine screws (for securing the CubeCell board to the base)

The holes in the top of the posts and in the upright stand for the CubeCell board on the base are tapping size for M4 and M2 respectively. This means that after it is printed you can run a standard tap into the hole and get some decent quality threads.

## Assembly

Once you've printed the parts they should fit together - tolerances should be large enough to cater for minor variations in prints but you may need to clean up the edges of the holes in the layers if your first layer is a bit squashed.

![parts](https://raw.githubusercontent.com/chrisys/mini-lora-weatherstation/main/assets/parts.png)

![assembly](https://raw.githubusercontent.com/chrisys/mini-lora-weatherstation/main/assets/assembly.png)

If you're adding a solar panel that layer can be placed between the top layer and the bracket.

![finished](https://raw.githubusercontent.com/chrisys/mini-lora-weatherstation/main/assets/finished.jpg)
