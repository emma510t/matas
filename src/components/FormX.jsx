import React, { useState } from "react";
import { Checkbox, Radio, Button } from "antd";

export default function FormX({
  percent,
  productTypes,
  setProductTypes,
  productTypeError,
  setProductTypeError,
  productCategory,
  setProductCategory,
}) {
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
          <p className="font-semibold text-xl mb-2 leading-5">
            Jeg leder efter
          </p>
          <p className="text-xs ">Vælg 1 og maks. 3</p>
          {productTypeError && <p>{productTypeError}</p>}
          <div className="flex flex-col mt-2 gap-2">
            {checkboxArray.map((box) => (
              <Checkbox
                key={box.name}
                className="text-base"
                checked={productTypes.includes(`${box.name}`)}
                onChange={() => {
                  if (productTypes.includes(`${box.name}`)) {
                    setProductTypes((o) =>
                      o.filter((product) => product != `${box.name}`)
                    );
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
          <p className="font-semibold text-xl mb-2 leading-5">
            Jeg leder efter et produkt i
          </p>
          <p className="text-xs ">Vælg 1</p>
          {productTypeError && <p>{productTypeError}</p>}
          <Radio.Group
            buttonStyle="solid"
            className="grid grid-cols-2 gap-1.5 mt-2"
          >
            {radioArray.map((radio) => (
              <Radio.Button
                key={radio.name}
                value={radio.name}
                className="flex justify-center items-center text-base rounded"
                /*                 checked={productCategory.includes(`${radio.name}`)}
                 */ onChange={() => {
                  if (productCategory.includes(`${radio.name}`)) {
                    setProductCategory((o) =>
                      o.filter((category) => category != `${radio.name}`)
                    );
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
          <p className="text-base mb-4">
            Kig efter ECOCERT-mærket, hvis du leder efter certificeret økologisk
            hudpleje, hårpleje og make-up.
          </p>
          <div className="flex justify-center">
            <Button
              type="primary"
              className="text-base bg-matas-blue"
              onClick={() => {}}
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
