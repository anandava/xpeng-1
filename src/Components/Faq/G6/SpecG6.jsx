import React, { useState } from "react";
import "./SpecG6.css";

const SpecG6 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [activeTab, setActiveTab] = useState("Kenyamanan");

  const tabContent = {
    Comfort: [
      "AC",
      "Automatic Climate Control",
      "Rear AC Vent",
      "Heater",
      "Power Outlet",
      "Engine Start Stop Button",
      "Center Console Arm Rest",
      "Bottle Holder",
      "Front Cup Holder",
      "Rear Cup Holder",
      "Keyless Entry",
      "Front Power Window",
      "Rear Power Window",
      "Reading Lamp",
      "Vanity Mirror",
      "Trunk Lamp",
      "Automatic Head Lamps",
      "Wireless Charger",
    ],
    Safety: [
      "Anti Lock Braking System",
      "Brake Assist",
      "EBD (Electronic Brake Distribution)",
      "Vehicle Stability Control System",
      "Open Door Reminder",
      "Traction Control",
      "Crash Sensor",
      "Driver Airbag",
      "Front Passenger Airbag",
      "Curtain Airbags",
      "Front Side Airbags",
      "Knee Airbags",
      "Seatbelt Reminder",
      "Rear Seatbelts",
      "Adjustable Front Seatbelts",
      "Child Safety Locks",
      "ISOFIX Child Seat Mounts",
      "Foldable Rearview Mirror",
      "Parking Sensors",
      "Front Parking Sensors",
      "Rear Parking Sensors",
      "Rear Camera",
      "360 Camera",
      "Emergency Stop Signal",
      "Hill-Start Assist Control",
      "Front Impact Protection",
      "Side Impact Protection",
      "Engine Check Warning",
      "Tire Pressure Monitor",
      "Electric Parking Brake",
      "Blind Spot Monitor",
      "Rear Cross Traffic Alert",
      "Speed Sensing Door Locks",
    ],
    Security: [
      "Central Locking",
      "Power Door Locks",
      "Anti Theft Device",
      "Car Alarm",
      "Engine Immobilizer",
    ],
    Exterior: [
      "Electric Folding Mirrors",
      "Manual Outside Rearview Mirrors",
      "Electric Rearview Mirrors",
      "Turn Signal on Side Mirror",
      "Integrated Antenna",
      "Electric Antenna",
      "Automatic Wipers",
      "Rear Wiper",
      "Rear Defogger",
      "Adjustable Headlights",
      "Headlight Type",
      "LED",
      "Daytime Running Lights",
      "LED",
      "Taillight Type",
      "LED",
      "Sunroof",
      "Convertible Roof",
      "Side Step",
    ],
    Entertainment: [
      "Apple Carplay/Android Auto",
      "USB Socket",
      "Bluetooth Connection",
      "AM/FM Radio",
      "Front Speakers",
      "Rear Speakers",
      "Navigation System",
      "Steering Wheel with Multi Function Button",
      "2DIN Audio",
      "Voice Command",
      "Touch Screen",
    ],
    Instrumentation: [
      "Fuel Level Warning Light",
      "Digital Clock",
      "Digital Odometer",
      "Electronic Multi Tripmeter",
    ],
    Interior: ["Ambient Light", "Sun Visors"],
    Seats: [
      "Adjustable Seats",
      "Driver Seat Height Adjustable",
      "Electric Seat Adjustment",
      "Lumbar Support",
      "Adjustable Headrest",
      "Rear Seat Headrest",
      "Rear Center Arm Rest",
      "Leather Wrapped Steering Wheel",
      "Rear Folding Table",
      "Rear Folding Seats",
      "Seat Upholstery",
      "Leather",
    ],
  };

  const tabTechnical = {
    Performance: [
      "Fuel Type: Electric",
      "Torque: 440 Nm",
      "Power: 255 hp",
      "Range: 435 km",
    ],
    Capacity: [
      "Length: 4753 mm",
      "Height: 1650 mm",
      "Number of Doors: 5",
      "Width: 1920 mm",
      "Wheelbase: 2890 mm",
      "Seating Capacity: 5 Seats",
    ],
    Suspension: [
      "Front Brake Type: Ventilated Discs",
      "Front Suspension: Double Wishbone",
      "Rear Brake Type: Discs",
      "Rear Suspension: Multi-Link",
    ],
    Transmission: ["Transmission Type: Automatic", "Gearbox: Single Speed"],
    Engine: [
      "Battery Type: Lithium Iron Phosphate",
      "AC Charging: (5–100%) In 7.5 Hours",
      "Estimated Fast Charging Time: (10–80%) In 20 Mins",
      "Electric Drive Type: Permanent Magnet Synchronous Motor",
      "Battery Capacity: 66 kWh",
      "DC Charging: (10–80%) In 20 Mins",
      "Estimated Regular Charging Time: (5–100%) In 7.5 Hours",
      "Emission: 0 g/km",
    ],
    Wheels: [
      "Alloy Wheels: Yes",
      "Alloy Wheel Size: 20 Inch",
      "Tyre Type: Radial",
      "Wheel Covers: No",
      "Tyre Size: 255/45 R20",
      "Wheel Size: R20",
    ],
    Steering: [
      "Power Steering: Yes",
      "Steering Column: Adjustable",
      "Steering Gear Type: Rack & Pinion",
      "Steering Position Adjustment: Yes",
      "Steering Type: Power",
    ],
  };

  const renderTabContent = () => (
    <ul className="tab-feature-list">
      {tabContent[activeTab]?.map((item, index) => (
        <li key={index} className="tab-feature-item">
          <span class="material-symbols-outlined check-configuration-spec">
            check
          </span>{" "}
          {item}
        </li>
      ))}
    </ul>
  );

  const renderTabContentTech = () => (
    <ul className="tab-feature-list">
      {tabTechnical[activeTab]?.map((item, index) => (
        <li key={index} className="tab-feature-item">
          <span class="material-symbols-outlined check-configuration-spec">
            check
          </span>{" "}
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="accordion-container">
      <h2 className="accordion-title">G6 SPECIFICATIONS</h2>

      {/* Section 1 */}
      <div className="accordion-item">
        <button className="accordion-header" onClick={() => toggleAccordion(0)}>
          <span>XPENG G6 Technical Specifications</span>
          <span className="accordion-icon">{openIndex === 0 ? "-" : "+"}</span>
        </button>
        {openIndex === 0 && (
          <div className="accordion-body">
            <div className="tab-buttons">
              {Object.keys(tabTechnical).map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="tab-content">{renderTabContentTech()}</div>
          </div>
        )}
      </div>

      {/* Section 2 */}
      <div className="accordion-item">
        <button className="accordion-header" onClick={() => toggleAccordion(1)}>
          <span>XPENG G6 Main Specifications</span>
          <span className="accordion-icon">{openIndex === 1 ? "-" : "+"}</span>
        </button>
        {openIndex === 1 && (
          <div className="accordion-body">
            <ul className="spec-list">
              <li className="spec-item">
                Fuel Type <span className="detail-spec">Electric</span>
              </li>
              <li className="spec-item">
                Transmission <span className="detail-spec">Automatic</span>
              </li>
              <li className="spec-item">
                Battery Capacity <span className="detail-spec">66 kWh</span>
              </li>
              <li className="spec-item">
                Power Output <span className="detail-spec">255 hp</span>
              </li>
              <li className="spec-item">
                Seating Capacity <span className="detail-spec">5 Seats</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Section 3 */}
      <div className="accordion-item">
        <button className="accordion-header" onClick={() => toggleAccordion(2)}>
          <span>XPENG X9 Configuration Specifications</span>
          <span className="accordion-icon">{openIndex === 2 ? "-" : "+"}</span>
        </button>
        {openIndex === 2 && (
          <div className="accordion-body">
            <div className="tab-buttons">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="tab-content">{renderTabContent()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecG6;
