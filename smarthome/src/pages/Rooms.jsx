import React from "react";
import Card from "../components/Card.js";
function Status(props) {
  return (
    <div>
      <div class="room-name">{props.name}</div>
      <div class="room-status">
        <div class="status">
          <div>
            <p class="status-name">TEMPERATURE</p>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4375 0C24.8213 0 21.875 2.94629 21.875 6.5625C21.875 10.1787 24.8213 13.125 28.4375 13.125C32.0537 13.125 35 10.1787 35 6.5625C35 2.94629 32.0537 0 28.4375 0ZM28.4375 8.75C27.2275 8.75 26.25 7.77246 26.25 6.5625C26.25 5.35254 27.2275 4.375 28.4375 4.375C29.6475 4.375 30.625 5.35254 30.625 6.5625C30.625 7.77246 29.6475 8.75 28.4375 8.75ZM17.5 7.65625C17.5 3.4248 14.0752 0 9.84375 0C5.6123 0 2.1875 3.4248 2.1875 7.65625V19.0381C0.84082 20.7266 0 22.832 0 25.1562C0 30.5908 4.40918 35 9.84375 35C15.2783 35 19.6875 30.5908 19.6875 25.1562C19.6875 22.832 18.8467 20.7197 17.5 19.0381V7.65625ZM9.84375 30.625C6.8291 30.625 4.375 28.1709 4.375 25.1562C4.375 23.4131 5.20898 21.8135 6.5625 20.7949V7.65625C6.5625 5.84473 8.03223 4.375 9.84375 4.375C11.6553 4.375 13.125 5.84473 13.125 7.65625V20.7949C14.4785 21.8066 15.3125 23.4131 15.3125 25.1562C15.3125 28.1709 12.8584 30.625 9.84375 30.625ZM10.9375 22.0732V20.7812C10.9375 20.1797 10.4453 19.6875 9.84375 19.6875C9.24219 19.6875 8.75 20.1797 8.75 20.7812V22.0732C7.47852 22.5244 6.5625 23.7275 6.5625 25.1562C6.5625 26.9678 8.03223 28.4375 9.84375 28.4375C11.6553 28.4375 13.125 26.9678 13.125 25.1562C13.125 23.7275 12.209 22.5244 10.9375 22.0732Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="status-digit">{props.temp}C</div>
        </div>

        <div class="status">
          <div>
            <p class="status-name">HUMIDITY</p>
            <svg
              width="30"
              height="36"
              viewBox="0 0 30 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6125 10.5332L15 0L4.3875 10.5332C1.58781 13.3257 0.0108827 17.1047 0 21.0477C0 24.7762 1.4625 28.7098 4.3875 31.6181C5.77934 33.007 7.43326 34.109 9.2544 34.861C11.0755 35.6129 13.0281 36 15 36C16.9719 36 18.9245 35.6129 20.7456 34.861C22.5667 34.109 24.2207 33.007 25.6125 31.6181C28.5375 28.7098 30 24.7762 30 21.0477C30 17.3191 28.5375 13.4414 25.6125 10.5332ZM3.75 21.7188C3.76875 17.9903 4.9125 15.6226 7.05 13.516L15 5.44368L22.95 13.6092C25.0875 15.6972 26.2313 17.9903 26.25 21.7188H3.75Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="status-digit">{props.humi}%</div>
        </div>
      </div>
    </div>
  );
}

function Livingroom() {
  return (
    <div className="room body livingroom">
      <Status name="Living Room" temp="37" humi="20" />
      <div class="device-category">
        <h1>Light</h1>
        <div class="container">
          <Card light="true" fan="false" door="false" deviceName="light1" />
          <Card light="true" fan="false" door="false" deviceName="light2" />
          <Card light="true" fan="false" door="false" deviceName="light3" />
        </div>
      </div>

      <div class="device-category">
        <h1>Door</h1>
        <div class="container">
          <Card light="false" fan="false" door="true" deviceName="door1" />
          <Card light="false" fan="false" door="true" deviceName="door2" />
          <Card light="false" fan="false" door="true" deviceName="door3" />
        </div>
      </div>

      <div class="device-category">
        <h1>Fan</h1>
        <div class="container">
          <Card light="false" fan="true" door="false" deviceName="fan1" />
          <Card light="false" fan="true" door="false" deviceName="fan2" />
          <Card light="false" fan="true" door="false" deviceName="fan3" />
        </div>
      </div>
    </div>
  );
}

function Bathroom() {
  return (
    <div className="room body bathroom">
      <Status name="Bath Room" temp="27" humi="50" />
      <div class="device-category">
        <h1>Light</h1>
        <div class="container">
          <Card light="true" fan="false" door="false" deviceName="light3" />
        </div>
      </div>

      <div class="device-category">
        <h1>Door</h1>
        <div class="container">
          <Card light="false" fan="false" door="true" deviceName="door3" />
        </div>
      </div>
    </div>
  );
}
function Bedroom() {
  return (
    <div className="room body bedroom">
      <Status name="Bed Room" temp="30" humi="40" />
      <div class="device-category">
        <h1>Light</h1>
        <div class="container">
          <Card light="true" fan="false" door="false" deviceName="light1" />
          <Card light="true" fan="false" door="false" deviceName="light2" />
          <Card light="true" fan="false" door="false" deviceName="light3" />
        </div>
      </div>

      <div class="device-category">
        <h1>Door</h1>
        <div class="container">
          <Card light="false" fan="false" door="true" deviceName="door2" />
          <Card light="false" fan="false" door="true" deviceName="door3" />
        </div>
      </div>

      <div class="device-category">
        <h1>Fan</h1>
        <div class="container">
          <Card light="false" fan="true" door="false" deviceName="fan1" />
          <Card light="false" fan="true" door="false" deviceName="fan2" />
          <Card light="false" fan="true" door="false" deviceName="fan3" />
        </div>
      </div>
    </div>
  );
}
function Kitchen() {
  return (
    <div className="room body kitchen">
      <Status name="Kitchen" temp="35" humi="30" />
      <div class="device-category">
        <h1>Light</h1>
        <div class="container">
          <Card light="true" fan="false" door="false" deviceName="light1" />
          <Card light="true" fan="false" door="false" deviceName="light2" />
          <Card light="true" fan="false" door="false" deviceName="light3" />
        </div>
      </div>

      <div class="device-category">
        <h1>Door</h1>
        <div class="container">
          <Card light="false" fan="false" door="true" deviceName="door1" />
          <Card light="false" fan="false" door="true" deviceName="door2" />
          <Card light="false" fan="false" door="true" deviceName="door3" />
        </div>
      </div>

      <div class="device-category">
        <h1>Fan</h1>
        <div class="container">
          <Card light="false" fan="true" door="false" deviceName="fan1" />
          <Card light="false" fan="true" door="false" deviceName="fan2" />
          <Card light="false" fan="true" door="false" deviceName="fan3" />
        </div>
      </div>
    </div>
  );
}

export { Livingroom, Bathroom, Bedroom, Kitchen };
