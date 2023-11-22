import React, { useState, useEffect } from "react";
import { Checkbox, Radio, Button } from "antd";

export default function FormX({ percent, productTypes, setProductTypes, productTypeError, productCategory, setProductCategory, resultArray, setPageView, handleCancel }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let intervalId;

    // Start the counter when percent is not 0
    if (percent === 100) {
      intervalId = setInterval(() => {
        if (count < 10) {
          setCount(count + 1);
        } else {
          clearInterval(intervalId);
        }
      }, 50);
    } else {
      setCount(0);
    }
    return () => clearInterval(intervalId);
  }, [count, percent]);
  const checkboxArray = [
    {
      name: "Lotion",
    },
    {
      name: "Olie",
    },
    {
      name: "Serum",
    },
    {
      name: "Mousse",
    },
  ];
  const radioArray = [
    {
      name: "Nyheder",
    },
    {
      name: "Bestseller",
    },
    {
      name: "Tilbud",
    },
    {
      name: "Børn",
    },
  ];
  const content = () => {
    if (percent === 0) {
      return (
        <>
          <p className="uppercase text-xs leading-7">Hudpleje</p>
          <p className="font-semibold text-xl mb-2 leading-5">Jeg leder efter</p>
          <p className={productTypeError + " text-xs"}>Vælg 1 og maks. 3</p>
          <div className="flex flex-col mt-2 gap-2">
            {checkboxArray.map((box) => (
              <Checkbox
                key={box.name}
                className="text-base"
                checked={productTypes.includes(`${box.name}`)}
                onChange={() => {
                  if (productTypes.includes(`${box.name}`)) {
                    setProductTypes((o) => o.filter((product) => product != `${box.name}`));
                  } else {
                    setProductTypes((o) => o.concat(`${box.name}`));
                  }
                }}
              >
                {box.name}
              </Checkbox>
            ))}
          </div>
        </>
      );
    } else if (percent === 50) {
      return (
        <>
          <p className="uppercase text-xs leading-7">Hudpleje</p>
          <p className="font-semibold text-xl mb-2 leading-5">Jeg leder efter et produkt i</p>
          <p className={productTypeError + " text-xs"}>Vælg 1</p>
          <Radio.Group buttonStyle="solid" className="grid grid-cols-2 gap-1.5 mt-2">
            {radioArray.map((radio) => (
              <Radio.Button
                key={radio.name}
                value={radio.name}
                className="flex justify-center items-center text-base rounded"
                /*                 checked={productCategory.includes(`${radio.name}`)}
                 */ onChange={() => {
                  if (productCategory.includes(`${radio.name}`)) {
                    setProductCategory((o) => o.filter((category) => category != `${radio.name}`));
                  } else {
                    setProductCategory((o) => o.concat(`${radio.name}`));
                  }
                }}
              >
                {radio.name}
              </Radio.Button>
            ))}
          </Radio.Group>
        </>
      );
    } else {
      return (
        <>
          <p className="font-semibold text-xl mb-2">Materialistens tip</p>
          <p className="text-base">Kig efter ECOCERT-mærket, hvis du leder efter certificeret økologisk hudpleje, hårpleje og make-up.</p>
          <div className="flex flex-row justify-center items-center gap-4 my-6">
            <p className="text-2xl w-40px">+{count}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="73" viewBox="0 0 72 73" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M68.4465 53.8618C67.1361 54.2774 62.6879 48.4429 58.8547 35.8099C55.0219 23.176 55.4596 15.7918 56.77 15.3763C58.0795 14.9613 62.5278 20.7957 66.361 33.4297C70.1937 46.0626 69.756 53.4468 68.4465 53.8618ZM60.3732 56.4214C59.0642 56.8364 54.6154 51.002 50.7827 38.3685C50.0076 35.8138 49.4144 33.4851 48.9604 31.3733C48.3789 28.6672 48.0378 26.3424 47.8782 24.4186C47.8194 23.7081 47.7802 23.042 47.7676 22.4443C47.7517 21.6696 47.7722 20.9914 47.8226 20.4111C47.9528 18.9168 48.2795 18.0684 48.6972 17.9363L54.565 16.0757C53.4194 20.4188 55.2991 29.7503 57.288 36.3064C59.277 42.8615 62.8923 51.6426 66.2411 54.5608L60.3732 56.4214ZM42.3495 33.6225C41.6113 33.8071 40.7811 33.9811 39.8832 34.1426C36.7561 34.7061 32.6783 35.1013 27.6603 35.1013C18.9583 35.1013 13.061 33.9184 10.1229 32.7177C9.03928 32.2752 8.36168 31.8317 8.09522 31.4423C8.01028 31.3174 7.95148 31.1964 7.95148 31.0851V24.8047C11.6704 27.2101 20.9454 28.1389 27.6603 28.1389C33.8296 28.1389 42.1508 27.3508 46.347 25.3567C46.5458 27.2486 46.8823 29.2804 47.3018 31.315C46.9864 31.9956 45.325 32.8792 42.3495 33.6225ZM43.6936 44.4156V42.1023C47.0788 42.9367 48.8166 43.9552 48.8166 44.6638C48.8166 45.6385 45.5322 47.1993 39.1823 48.0597C41.8894 47.1805 43.6936 45.986 43.6936 44.4156ZM48.8166 53.3046C48.8166 54.7059 42.0476 57.3214 29.1093 57.3214C16.1695 57.3214 9.40048 54.7059 9.40048 53.3046V49.0165C13.4894 49.7834 18.3675 50.1107 22.3468 50.1107C22.4994 50.1107 22.6562 50.1088 22.8111 50.1078C24.9942 50.2775 27.1595 50.357 29.1093 50.357C35.8227 50.357 45.0982 49.4282 48.8166 47.0233V53.3046ZM7.76108 46.9785C4.37681 46.1436 2.63894 45.1251 2.63894 44.4156V38.1357C4.72541 39.4849 8.55955 40.3699 12.7106 40.8861C14.5716 41.118 16.4948 41.2747 18.353 41.3672C19.7381 41.4361 21.0882 41.4694 22.3468 41.4694C25.6275 41.4694 29.5185 41.2467 33.075 40.7396C35.1409 40.4451 37.0907 40.0537 38.7445 39.5533C40.0708 39.1528 41.2081 38.6833 42.0546 38.1357V40.0638V41.7437V44.4156C42.0546 45.8125 35.3397 48.4087 22.511 48.4313C22.455 48.4313 22.4032 48.4333 22.3468 48.4333C17.3982 48.4333 13.3602 48.0496 10.2503 47.4986C9.95629 47.4465 9.67815 47.3916 9.40048 47.3366C8.82042 47.2219 8.26742 47.1033 7.76108 46.9785ZM7.65655 33.2378C11.1524 35.7959 20.7578 36.7788 27.6603 36.7788C32.0726 36.7788 37.5891 36.3758 41.9104 35.4175C41.9958 35.5429 42.0546 35.6643 42.0546 35.7762C42.0546 36.7152 39.0003 38.196 33.1025 39.0728C30.1985 39.5047 26.6159 39.7929 22.3468 39.7929C20.9472 39.7929 19.6345 39.7568 18.3806 39.7004C8.03735 39.2357 2.63894 37.0261 2.63894 35.7762C2.63894 35.0739 4.33714 34.0679 7.65655 33.2378ZM27.6603 18.4275C37.4519 18.4275 43.7024 19.9252 46.1674 21.2609C46.1422 21.9936 46.1515 22.7749 46.201 23.6083C43.7617 24.9503 37.5009 26.4615 27.6603 26.4615C14.7205 26.4615 7.95148 23.8465 7.95148 22.4443C7.95148 21.043 14.7205 18.4275 27.6603 18.4275ZM67.9281 32.9327C65.3857 24.5541 60.1865 12.5386 56.2847 13.7759C56.2567 13.7846 56.232 13.8005 56.2049 13.8102L56.2026 13.8025L48.2114 16.3355C47.1735 16.6647 46.5892 17.8361 46.3232 19.5121C42.1162 17.5314 33.8128 16.751 27.6603 16.751C19.0787 16.751 6.31208 18.268 6.31208 22.4443C6.31208 22.4741 6.31954 22.5026 6.32094 22.5325H6.31208V31.0851C6.31208 31.3502 6.36481 31.6042 6.46328 31.8486C3.2372 32.7486 1 34.0288 1 35.7762C1 35.8056 1.00653 35.834 1.00793 35.8629H1V44.4156C1 46.3895 3.85041 47.7685 7.76108 48.6747V53.3046C7.76108 57.4809 20.5277 58.9979 29.1093 58.9979C37.6899 58.9979 50.456 57.4809 50.456 53.3046V44.6638C50.456 42.6909 47.6052 41.3118 43.6936 40.4056V35.7762C43.6936 35.5111 43.6413 35.2561 43.5424 35.0122C45.2975 34.5229 46.7414 33.916 47.7106 33.1877C48.1694 35.1785 48.6869 37.1215 49.2161 38.866C51.7576 47.2441 56.9572 59.2591 60.859 58.0222L68.9323 55.4622C72.8342 54.2253 70.4695 41.3108 67.9281 32.9327Z"
                fill="#002643"
                stroke="#002643"
                stroke-width="0.4"
              />
            </svg>
          </div>
          <div className="flex justify-center">
            <Button
              type="primary"
              className="text-base bg-matas-blue rounded shadow-matas-blue"
              onClick={() => {
                handleCancel();

                setTimeout(() => {
                  setPageView((page) => {
                    return page + 1;
                  });
                }, 200);
              }}
            >
              Se dit resultat
            </Button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <form className="flex flex-col gap-1">{content()}</form>
    </>
  );
}
