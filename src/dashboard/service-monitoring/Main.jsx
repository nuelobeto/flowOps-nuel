import "../../assests/css/dashboardmain.css";
import "../../assests/css/servicemonitoring.css";
import Bell from "./../../assests/svg/Bell";
import DownArrowCircle from "./../../assests/svg/DownArrowCircle";
import SearchIcon from "./../../assests/svg/SearchIcon";
import FilterIcon from "./../../assests/svg/FilterIcon";
import bubbleLogo from "../../assests/images/bubbleLogo.svg";
import webflowLogo from "../../assests/images/webflowLogo.svg";
import zapierLogo from "../../assests/images/zapierLogo.svg";
import amazonLogo from "../../assests/images/amazonLogo.svg";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import CheckIcon from "./../../assests/svg/CheckIcon";
import OnIcon from "./../../assests/svg/OnIcon";
import OffIcon from "./../../assests/svg/OffIcon";
import DownArrow from "../../assests/svg/DownArrow";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import CloseIcon from "./../../assests/svg/CloseIcon";

const filterTags = [
  {
    tag: "Fintech",
    active: false,
  },
  {
    tag: "No-code",
    active: false,
  },
  {
    tag: "Healthcare",
    active: false,
  },
];

const performance = [
  {
    id: 1,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 1,
    time: 0,
  },
  {
    id: 2,
    serviceName: "Webflow",
    logo: webflowLogo,
    status: "up",
    score: 1,
    time: 1,
  },
  {
    id: 3,
    serviceName: "Zapier",
    logo: zapierLogo,
    status: "down",
    score: 2,
    time: 2,
  },
  {
    id: 4,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "down",
    score: 0.5,
    time: 3,
  },
  {
    id: 5,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 3,
    time: 4,
  },
  {
    id: 6,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 1,
    time: 5,
  },
  {
    id: 7,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 3.5,
    time: 6,
  },
  {
    id: 8,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 4,
    time: 7,
  },
  {
    id: 9,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 3.5,
    time: 8,
  },
  {
    id: 10,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 2,
    time: 9,
  },
  {
    id: 11,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 1.5,
    time: 10,
  },
  {
    id: 12,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 3,
    time: 11,
  },
  {
    id: 13,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 1,
    time: 12,
  },
  {
    id: 14,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 3,
    time: 13,
  },
  {
    id: 15,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 3,
    time: 14,
  },
  {
    id: 16,
    serviceName: "Bubble",
    logo: bubbleLogo,
    status: "up",
    score: 3,
    time: 15,
  },
];

const data = {
  labels: performance.map((item) => item.time),
  datasets: [
    {
      label: "Operation performance",
      data: performance.map((item) => item.score),
      pointRadius: 0,
      borderColor: "#bbebd2",
      fill: true,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(187, 235, 210, 1)");
        gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.3)");
        return gradient;
      },
      tension: 0.5,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const Main = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [showSelectServices, setShowSelectServices] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 6;

  return (
    <main className="dashboard-main">
      <div className="space"></div>
      <div className="wrapper">
        <div className="wrapper-header">
          <h1>Service Monitoring</h1>

          <div className="wrapper-header-box">
            <button>
              <Bell />
            </button>

            <button
              className={`select-service-btn ${
                showSelectServices && "rotateSVG"
              }`}
              onClick={() => setShowSelectServices(!showSelectServices)}
            >
              <span>Select Services</span> <DownArrowCircle />
            </button>
          </div>

          {showSelectServices && <SelectedServices />}
        </div>

        <div className="card">
          <div className="service-monitoring">
            <div className="service-monitoring-header">
              <div className="service-monitoring-header-first">
                <div className="online-status">
                  <div>
                    <div className="green-circle"></div>
                    <h2>3 Service Monitoring are online.</h2>
                  </div>
                  <p>0 has a Partial Outage</p>
                  <div className="short-line"></div>
                </div>

                <form>
                  <div className="card-search">
                    <input type="text" placeholder="search" />
                    <SearchIcon />
                  </div>
                </form>
              </div>

              <div className="service-monitoring-header-second">
                <div className="filter">
                  <button>
                    <span>Filter By</span>
                    <FilterIcon />
                  </button>

                  <ul>
                    {filterTags.map((tag, index) => (
                      <li key={index}>
                        <button>{tag.tag}</button>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3>Subscribed Services</h3>
              </div>
            </div>

            <div className="service-monitoring-main">
              <ul className="services scroll">
                {currentItems.map((item) => (
                  <li key={item.id}>
                    <div className="service-id">
                      <img src={item.logo} alt="" />
                      <p>{item.serviceName}</p>
                    </div>

                    <div className="graph-container">
                      <Line data={data} options={options} />
                    </div>

                    <div>
                      <div className="operational">
                        <CheckIcon />
                        <p>Operational</p>
                      </div>

                      <button
                        className="on-btn"
                        onClick={() => setShowModal(!showModal)}
                      >
                        <OnIcon />
                      </button>

                      <button className="drop-down">
                        <DownArrow />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-monitoring-footer">
              <p>Showing 9 of 120 Service Monitoring</p>

              <Pagination
                itemsPerPage={itemsPerPage}
                data={performance}
                setCurrentItems={setCurrentItems}
              />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <ServiceMonitoringModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </main>
  );
};

export default Main;

const SelectedServices = () => {
  return (
    <div className="select-services">
      <ul className="hide-scroll">
        <li>
          <img src={amazonLogo} alt="" />
          <p>Amazon Web Service (AWS)</p>
        </li>
        <li>
          <img src={amazonLogo} alt="" />
          <p>Amazon Web Service (AWS)</p>
        </li>
        <li>
          <img src={amazonLogo} alt="" />
          <p>Amazon Web Service (AWS)</p>
        </li>
        <li>
          <img src={amazonLogo} alt="" />
          <p>Amazon Web Service (AWS)</p>
        </li>
        <li>
          <img src={amazonLogo} alt="" />
          <p>Amazon Web Service (AWS)</p>
        </li>
      </ul>
    </div>
  );
};

const ServiceMonitoringModal = ({ showModal, setShowModal }) => {
  return (
    <div className="service-modal-wrapper">
      <div className="service-modal">
        <form>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <input type="text" id="priority" placeholder="Priority" />
          </div>

          <div className="notification-channel">
            <p>Notification Channel</p>
            <div className="channels">
              <div className="channel">
                <input type="checkbox" name="slack" value="slack" id="slack" />
                <label htmlFor="slack">Slack</label>
              </div>
              <div className="channel">
                <input type="checkbox" name="slack" value="slack" id="slack" />
                <label htmlFor="slack">Webhook</label>
              </div>
              <div className="channel">
                <input type="checkbox" name="slack" value="slack" id="slack" />
                <label htmlFor="slack">Email</label>
              </div>
            </div>
          </div>

          <div className="form-group select">
            <label htmlFor="recipient">Recipient</label>
            <select id="recipient">
              <option value="" disabled selected hidden>
                Select Service
              </option>
            </select>
          </div>

          <button>Save</button>
        </form>

        <button className="close-btn" onClick={() => setShowModal(!showModal)}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};
