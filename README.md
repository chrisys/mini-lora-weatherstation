# Mini LoRa weatherstation

**This is a basic battery powered LoRa weather station based around a Bosch BME208 and Heltec CubeCell HTCC-AB01 development board. Data is sent via The Things Network (TTN) to a Ubidots dashboard.**

Thanks to the built in battery management and solar charging functionality of this board, as well as ultra low power consumption, we're finally able to put LoRa-connected sensors almost anywhere we want! I started out with this board building a simple weather station based on a BME280 sensor to record temperature, humidity and barometric pressure and test how long a battery will last using this board.

![dashboard](https://raw.githubusercontent.com/chrisys/mini-lora-weatherstation/master/assets/dashboard.png)

## Hardware required
* Bosch BME280 breakout board
* Heltec CubeCell HTCC-AB01
* 3.7V LiPo cell (I'm using a 650mAh one)

## Other requirements
* [Arduino IDE](https://www.arduino.cc/en/main/software)
* SiLabs CP2104 Driver ([installation instructions](https://heltec-automation-docs.readthedocs.io/en/latest/general/establish_serial_connection.html))
* CubeCell framework added to Arduino IDE ([installation instructions](https://heltec-automation-docs.readthedocs.io/en/latest/cubecell/quick_start.html))
* A free TTN account ([register here](https://account.thethingsnetwork.org/register))
* A free Ubidots STEM account ([register here](https://ubidots.com/stem/))
* You need to be in range of a TTN gateway ([here's a map](https://www.thethingsnetwork.org/map)) or have [built your own gateway](https://www.balena.io/blog/build-a-ttn-lora-gateway-with-balenafin-and-balenacloud/).
