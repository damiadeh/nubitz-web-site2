import React, { useState } from "react";
import Button from "../primary-button/Button";
import Styles from "./stepper.module.scss";

const industry = {
  items: [
    {
      image: "/assets/project-request/hospital.svg",
      title: "Hospital",
      id: 1,
    },
    {
      image: "/assets/project-request/transaction.svg",
      title: "Fintech",
      id: 2,
    },
    {
      image: "/assets/project-request/rocket.svg",
      title: "Start Up",
      id: 3,
    },
    {
      image: "/assets/project-request/ecommerce.svg",
      title: "E-Commerce",
      id: 4,
    },
    {
      image: "/assets/project-request/presentation.svg",
      title: "Education",
      id: 5,
    },
    {
      image: null,
      title: "Others",
      id: 6,
    },
  ],
};

const services = {
  items: [
    {
      image: "/assets/project-request/services/web.svg",
      imageActive: "/assets/project-request/services/web-white.png",
      title: "Web Development",
      id: 1,
    },
    {
      image: "/assets/project-request/services/apple-blue.png",
      imageActive: "/assets/project-request/services/apple.svg",
      title: "IOS App",
      id: 2,
    },
    {
      image: "/assets/project-request/services/android.svg",
      imageActive: "/assets/project-request/services/android-white.png",
      title: "Android App",
      id: 3,
    },
    {
      image: "/assets/project-request/services/branding.svg",
      imageActive: "/assets/project-request/services/branding-white.png",
      title: "Branding",
      id: 4,
    },
    {
      image: "/assets/project-request/services/ai.svg",
      imageActive: "/assets/project-request/services/ai-white.png",
      title: "AI Development",
      id: 5,
    },
    {
      image: null,
      title: "Others",
      id: 6,
    },
  ],
};

const duration = {
  items: [
    {
      title: "Less than 1 month",
      id: 1,
    },
    {
      title: "1-3 months",
      id: 2,
    },
    {
      title: "3-6 months",
      id: 3,
    },
    {
      title: "6-9 months",
      id: 4,
    },
    {
      title: "More than 9 months",
      id: 5,
    },
  ],
};

const budget = {
  items: [
    {
      title: "Less than $10,000",
      id: 1,
    },
    {
      title: "$10,000 - $50,000",
      id: 2,
    },
    {
      title: "$50,000+",
      id: 3,
    },
  ],
};

const Stepper = () => {
  const [step, setStep] = useState(0);
  const [industryId, setIndustryId] = useState(2);
  const [servicesId, setServicesId] = useState(2);
  const [durationId, setDurationId] = useState(2);
  const [budgetId, setBudgetId] = useState(2);
  const [industryActive, setIndustryActive] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);
  const [durationActive, setDurationActive] = useState(false);
  const [budgetActive, setBudgetActive] = useState(false);
  const [dataIndustry, setDataIndustry] = useState("Fintech");
  const [dataServices, setDataServices] = useState("IOS App");
  const [dataDuration, setDataDuration] = useState("1-3 months");
  const [dataBudget, setDataBudget] = useState("$40 - $90");

  const handleStep = () => {
    if (step < 4) {
      setStep((step) => step + 1);
    }
    if (step === 0) {
      setIndustryActive(true);
    } else if (step === 1) {
      setIndustryActive(true);
      setServicesActive(true);
    } else if (step === 2) {
      setIndustryActive(true);
      setServicesActive(true);
      setDurationActive(true);
    } else if (step === 3) {
      setIndustryActive(true);
      setServicesActive(true);
      setDurationActive(true);
      setBudgetActive(true);
    }
  };

  const handleSubmit = () => {
    const projectRequest = {
      dataIndustry,
      dataServices,
      dataDuration,
      dataBudget,
    };

    console.log(projectRequest);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.breadcrumb}>
        <div>
          <p style={{ color: "#242423" }}>Industry</p>
        </div>
        <span style={{ color: "#242423" }}>›</span>
        <div>
          <p style={{ color: servicesActive && "#242423" }}>Services</p>
        </div>
        <span style={{ color: servicesActive && "#242423" }}>›</span>
        <div>
          <p style={{ color: durationActive && "#242423" }}>Project Duration</p>
        </div>
        <span style={{ color: durationActive && "#242423" }}>›</span>
        <div>
          <p style={{ color: budgetActive && "#242423" }}>Budget</p>
        </div>
      </div>
      <div className={Styles.text}>
        {step === 0 ? (
          <>
            <h5>Choose your industry</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              urna aliquet cras.
            </p>
          </>
        ) : step === 1 ? (
          <>
            <h5>What service are you searching for?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              urna aliquet cras.
            </p>
          </>
        ) : step === 2 ? (
          <>
            <h5>
              How much time do you have for a development? How much time do you
              have for a development?
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              urna aliquet cras.
            </p>
          </>
        ) : step === 3 ? (
          <>
            <h5>What is your Project budget?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
              urna aliquet cras.
            </p>
          </>
        ) : null}
      </div>
      <div className={Styles.requests}>
        {step === 0
          ? industry.items.map((item) => (
              <div
                className={
                  item.id === industryId ? Styles.active : Styles.request
                }
                key={item.title}
                onClick={() => {
                  setIndustryId(item.id);
                  setDataIndustry(item.title);
                }}
              >
                {item.image !== null && (
                  <img src={item.image} alt={item.title} />
                )}
                <p>{item.title}</p>
              </div>
            ))
          : step === 1
          ? services.items.map((item) => (
              <div
                className={
                  item.id === servicesId ? Styles.active : Styles.request
                }
                key={item.title}
                onClick={() => {
                  setServicesId(item.id);
                  setDataServices(item.title);
                }}
              >
                {item.image !== null && (
                  <img
                    src={item.id === servicesId ? item.imageActive : item.image}
                    alt={item.title}
                    width="40px"
                  />
                )}
                <p>{item.title}</p>
              </div>
            ))
          : step === 2
          ? duration.items.map((item) => (
              <div
                className={
                  item.id === durationId ? Styles.active : Styles.request
                }
                key={item.title}
                onClick={() => {
                  setDurationId(item.id);
                  setDataDuration(item.title);
                }}
              >
                <p>{item.title}</p>
              </div>
            ))
          : step === 3 &&
            budget.items.map((item) => (
              <div
                className={
                  item.id === budgetId ? Styles.active : Styles.request
                }
                key={item.title}
                onClick={() => {
                  setBudgetId(item.id);
                  setDataBudget(item.title);
                }}
              >
                <p>{item.title}</p>
              </div>
            ))}
      </div>
      <div className={Styles.button}>
        {step === 3 ? (
          <Button
            text="Let's Get Started"
            backgroundColor="var(--primary)"
            textColor="white"
            width="180px"
            onClick={handleSubmit}
          />
        ) : (
          <Button
            text="Next Question"
            backgroundColor="var(--primary)"
            textColor="white"
            onClick={handleStep}
          />
        )}
      </div>
    </div>
  );
};

export default Stepper;
