# Mini LoRa weatherstation

**This is a basic battery powered LoRa weather station based around a Bosch BME208 and Heltec CubeCell HTCC-AB01 development board. Data is sent via The Things Network (TTN) to a Ubidots dashboard.**

Thanks to the built in battery management and solar charging functionality of this board, as well as ultra low power consumption, we're finally able to put LoRa-connected sensors almost anywhere we want! I started out with this board building a simple weather station based on a BME280 sensor to record temperature, humidity and barometric pressure and test how long a battery will last using this board.

![dashboard](https://raw.githubusercontent.com/chrisys/mini-lora-weatherstation/main/assets/dashboard.png)

## Hardware required
* Bosch BME280 breakout board
* Heltec CubeCell HTCC-AB01
* 3.7V LiPo cell (I'm using a 650mAh one) with a micro JST connector

## Other requirements
* [Arduino IDE](https://www.arduino.cc/en/main/software)
* SiLabs CP2104 Driver ([installation instructions](https://heltec-automation-docs.readthedocs.io/en/latest/general/establish_serial_connection.html))
* CubeCell framework added to Arduino IDE ([installation instructions](https://heltec-automation-docs.readthedocs.io/en/latest/cubecell/quick_start.html))
* A free TTN account ([register here](https://account.thethingsnetwork.org/register))
* A free Ubidots STEM account ([register here](https://ubidots.com/stem/))
* You need to be in range of a TTN gateway ([here's a map](https://www.thethingsnetwork.org/map)) or have [built your own gateway](https://www.balena.io/blog/build-a-ttn-lora-gateway-with-balenafin-and-balenacloud/).

## For the case

I used a Creality Ender 3 loaded with white PETG filament to print this case. Word has it that PETG is a good material to use for outdoor items that are going to be exposed to weather and UV. Time will tell.

* 1x Base (mini-lora-ws-base.stl)
* 6x Open layers (mini-lora-ws-openlayer.stl)
* 1x Closed layer (mini-lora-ws-closedlayer.stl)
* 1x Top layer (mini-lora-ws-top.stl)
* M4 tap
* M4 stainless steel machine screws (for securing the top layer)
* M2 tap
* M2 stainless steel machine screws (for securing the CubeCell board to the base)

The holes in the top of the posts and in the upright stand for the CubeCell board on the base are tapping size for M4 and M2 respectively. This means that after it is printed you can run a standard tap into the hole and get some decent quality threads.
