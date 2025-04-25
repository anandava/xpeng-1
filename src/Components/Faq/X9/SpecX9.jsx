import React, { useState } from "react";
import "./SpecX9.css";

const SpecX9 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [activeTab, setActiveTab] = useState("Kenyamanan");

  const tabContent = {
    Comfort: [
      "AC",
      "Rear AC Vents",
      "Ventilated Front Seats",
      "Power Outlet",
      "Center Console Arm Rest",
      "Front Cup Holder",
      "Keyless Entry",
      "Rear Power Window",
      "Vanity Mirror",
      "Automatic Head Lamps",
      "Head-Up Display",
      "Automatic Climate Control",
      "Heater",
      "Ventilated Rear Seats",
      "Engine Start Stop Button",
      "Bottle Holder",
      "Rear Cup Holder",
      "Front Power Window",
      "Reading Light",
      "Trunk Light",
      "Memory Seats",
      "Wireless Charger",
    ],
    Safety: [
      "Anti-lock Braking System (ABS)",
      "Electronic Brake Distribution (EBD)",
      "Door Ajar Warning",
      "Crash Sensor",
      "Front Passenger Airbag",
      "Front Side Airbags",
      "Knee Airbags",
      "Rear Seatbelts",
      "Child Safety Locks",
      "Folding Rearview Mirror",
      "Front Parking Sensors",
      "Rear Camera",
      "Emergency Stop Signal",
      "Side Impact Protection",
      "Tire Pressure Monitoring System",
      "Speed Sensing Door Locks",
      "Brake Assist",
      "Vehicle Stability Control System",
      "Traction Control",
      "Driver Airbag",
      "Curtain Airbags",
      "Rear Side Airbags",
      "Seat Belt Reminder",
      "Adjustable Front Seatbelts",
      "ISOFIX Child Seat Mounts",
      "Parking Sensors",
      "Rear Parking Sensors",
      "360 Camera",
      "Front Impact Protection",
      "Engine Check Warning",
      "Electric Parking Brake",
    ],
    Security: [
      "Central Locking",
      "Anti-Theft Device",
      "Engine Immobilizer",
      "Power Door Locks",
      "Car Alarm",
    ],
    Exterior: [
      "Electric Folding Mirrors",
      "Electric Side Mirrors",
      "Integrated Antenna",
      "Automatic Wipers",
      "Rear Defogger",
      "Headlamp Type",
      "Taillight Type",
      "Side Mirror Turn Signals",
      "Rear Wiper",
      "Adjustable Headlights",
      "Sunroof",
      "Daytime Running Lights",
    ],
    Entertainment: [
      "Apple CarPlay/Android Auto",
      "Bluetooth Connectivity",
      "Front Speakers",
      "Navigation System",
      "2DIN Audio",
      "Touch Screen",
      "USB Socket",
      "AM/FM Radio",
      "Rear Speakers",
      "Steering Wheel with Multi-function Buttons",
      "Voice Command",
      "Ambient Light",
      "Sun Visors",
    ],
    Instrumentation: [
      "Fuel Warning Light",
      "Digital Odometer",
      "Digital Clock",
      "Electronic Multi Tripmeter",
    ],
    Seats: [
      "Adjustable Seats",
      "Electric Seat Adjustment",
      "Adjustable Headrests",
      "Rear Center Armrest",
      "Foldable Rear Seats",
      "Driver Seat Height Adjuster",
      "Lumbar Support",
      "Rear Seat Headrests",
      "Leather-Wrapped Steering Wheel",
      "Seat Upholstery",
    ],
  };

  const tabTechnical = {
    Performance: [
      "Fuel Type: Electric",
      "Torque: 450 Nm",
      "Power: 315 hp",
      "Range: 702 km",
    ],
    Capacity: [
      "Length: 5293 mm",
      "Height: 1785 mm",
      "Number of Doors: 5",
      "Width: 1988 mm",
      "Wheelbase: 3160 mm",
      "Seating Capacity: 7 Seats",
    ],
    Suspension: [
      "Front Brake Type: Ventilated Discs",
      "Front Suspension: Double Wishbone",
      "Rear Brake Type: Ventilated Discs",
      "Rear Suspension: Multi-Link",
    ],
    Transmission: ["Transmission Type: Automatic", "Gearbox: Single Speed"],
    Engine: [
      "Battery Capacity: 101.5 kWh",
      "Emission: 0 g/km",
      "Electric Drive Type: Permanent Magnet Synchronous",
    ],
    Wheels: [
      "Alloy Wheels: Yes",
      "Alloy Wheel Size: 19 Inch",
      "Tyre Type: Radial",
      "Wheel Covers: No",
      "Tyre Size: 235/55 R19",
      "Wheel Size: R19",
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
      <h2 className="accordion-title">X9 SPECIFICATIONS</h2>
      {/* Section 1 */}
      <div className="accordion-item">
        <button className="accordion-header" onClick={() => toggleAccordion(0)}>
          <span>XPENG X9 Technical Specifications</span>
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
          <span>XPENG X9 Main Specifications</span>
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
                Battery Capacity <span className="detail-spec">101.5 kWh</span>
              </li>
              <li className="spec-item">
                Power Output <span className="detail-spec">315 hp</span>
              </li>
              <li className="spec-item">
                Seating Capacity <span className="detail-spec">7 Seats</span>
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

export default SpecX9;
