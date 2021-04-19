/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";
import { useRouter } from "next/router";

/* -------------------------- Internal Dependencies ------------------------- */
import SectionText from "../../../components/section_text/SectionText";
import CaseStudy from "./object/caseStudyObject";
import Styles from "./sectionSix.module.scss";

const SectionSix = () => {
  const router = useRouter();
  const setItemInLocalStorage = (clonedItem) => {
    localStorage.setItem("caseStudy", JSON.stringify(clonedItem));
    clonedItem.id
      ? router.push(`/case-study/${encodeURIComponent(clonedItem.id)}`)
      : router.push(`/case-study/${encodeURIComponent(clonedItem.secondid)}`);
  };

  return (
    <>
      <div className={Styles.container} id="cases">
        <div className="wrapper">
          <SectionText
            welcome="Case study"
            title="Our portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mi lobortis enim, facilisis etiam."
          />

          <div className={Styles.main_wrapper}>
            {CaseStudy.items.map((item) => (
              <>
                {item.inverted !== true ? (
                  <div className={Styles.wrapper}>
                    <div
                      className={Styles.portfolio}
                      style={{
                        backgroundColor: `${item.backgroundColor}`,
                      }}
                      onClick={() => {
                        let clonedItem = JSON.parse(JSON.stringify(item));
                        let names = Object.keys(clonedItem);
                        names.map((name) => {
                          if (name.startsWith("second")) {
                            delete clonedItem[name];
                          }
                        });

                        setItemInLocalStorage(clonedItem);
                      }}
                    >
                      <div
                        className={Styles.title}
                        style={{
                          color: `${item.textColor}`,
                        }}
                      >
                        <p>{item.name}</p>
                        <span>{item.product}</span>
                      </div>
                      <div className={Styles.image}>
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                    <div
                      className={Styles.portfolio}
                      style={{
                        backgroundColor: `${item.secondbackgroundColor}`,
                      }}
                      onClick={() => {
                        let clonedItem = JSON.parse(JSON.stringify(item));
                        let names = Object.keys(clonedItem);
                        names.map((name) => {
                          if (!name.startsWith("second")) {
                            delete clonedItem[name];
                          }
                        });

                        setItemInLocalStorage(clonedItem);
                      }}
                    >
                      <div
                        className={Styles.title}
                        style={{
                          color: `${item.secondtextColor}`,
                        }}
                      >
                        <p>{item.secondname}</p>
                        <span>{item.secondproduct}</span>
                      </div>
                      <div className={Styles.image}>
                        <img src={item.secondimage} alt={item.secondname} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={Styles.wrapper_inverted}>
                    <div
                      className={Styles.portfolio}
                      style={{
                        backgroundColor: `${item.backgroundColor}`,
                      }}
                      onClick={() => {
                        let clonedItem = JSON.parse(JSON.stringify(item));
                        let names = Object.keys(clonedItem);
                        names.map((name) => {
                          if (name.startsWith("second")) {
                            delete clonedItem[name];
                          }
                        });

                        setItemInLocalStorage(clonedItem);
                      }}
                    >
                      <div
                        className={Styles.title}
                        style={{
                          color: `${item.textColor}`,
                        }}
                      >
                        <p>{item.name}</p>
                        <span>{item.product}</span>
                      </div>
                      <div className={Styles.image}>
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        let clonedItem = JSON.parse(JSON.stringify(item));
                        let names = Object.keys(clonedItem);
                        names.map((name) => {
                          if (!name.startsWith("second")) {
                            delete clonedItem[name];
                          }
                        });

                        setItemInLocalStorage(clonedItem);
                      }}
                      className={
                        item.secondimage
                          ? Styles.portfolio
                          : Styles.portfolio_add
                      }
                      style={
                        item.secondimage
                          ? {
                              backgroundColor: `${item.secondbackgroundColor}`,
                            }
                          : {
                              display: "flex",
                              alignItems: "center",
                              backgroundColor: "#EEF3FE",
                              border: "0.5px solid var(--primary)",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "var(--primary)",
                              fontWeight: "bold",
                            }
                      }
                    >
                      <div
                        className={item.secondimage && Styles.title}
                        style={
                          item.secondimage
                            ? {
                                color: `${item.secondtextColor}`,
                              }
                            : { marginRight: "10px", color: "var(--primary)" }
                        }
                      >
                        <p>{item.secondname}</p>
                        <span>{item.secondproduct}</span>
                      </div>
                      {item.secondimage ? (
                        <div className={Styles.image}>
                          <img src={item.secondimage} alt={item.secondname} />
                        </div>
                      ) : (
                        <img
                          src="/assets/home/section-six/arrow.svg"
                          alt="arrow"
                        />
                      )}
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSix;
