"use client";
import CardX from "@/components/CardX";
import ProductCardX from "@/components/ProductCardX";
import ModalX from "@/components/ModalX";
import { useState, useEffect } from "react";
import { Button } from "antd";

async function fetchFunc() {
  const res = await fetch("/products.json");
  const data = await res.json();
  return data;
}

function ProductView() {
  const [pageView, setPageView] = useState(1);
  const [productTypes, setProductTypes] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const resultArray = productTypes.concat(productCategory);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const x = async () => {
      const data = await fetchFunc();
      console.log(data);
      setProducts(data);
    };
    x();
    x;
  }, []);
  if (pageView === 1) {
    return (
      <section className="layoutView">
        <div className="grid-cols-2 md:grid-cols-3 grid gap-3">
          <CardX name="/img/oekologisk-hudpleje.jpg">
            <div className="flex flex-col items-center">
              <p className="text-xs">FIND DIN FAVORIT</p>
              <p className="font-bold text-lg">Økologisk hudpleje</p>
            </div>
            <ModalX
              productTypes={productTypes}
              productCategory={productCategory}
              setProductTypes={setProductTypes}
              setProductCategory={setProductCategory}
              resultArray={resultArray}
              setPageView={setPageView}
            ></ModalX>
          </CardX>
          {products.map((data) => (
            <ProductCardX image={data.image} key={data.id}>
              <div className="flex flex-col">
                <p className="text-xs">{data.brand}</p>
                <p className="font-bold text-base text-matas-grey">
                  {data.name}
                </p>
                <p className="font-bold text-lg">{data.price}</p>
              </div>
            </ProductCardX>
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <>
        <Button
          className="ml-6"
          key="back"
          type="text"
          onClick={() => {
            setProductTypes([]);
            setProductCategory([]);
            setPageView((page) => {
              return page - 1;
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Button>
        <section className="layoutView mt-6">
          <div className="flex flex-row gap-4 pb-6">
            {resultArray.map((pill) => {
              return (
                <div
                  key={pill}
                  className="border-matas-blue border border-solid px-2 py-0.5 rounded-full text-sm text-matas-blue"
                >
                  {pill}
                </div>
              );
            })}
          </div>
          <div className="grid-cols-2 md:grid-cols-3 grid gap-3">
            {products
              .filter((data) => {
                const formMatches = productTypes.some((r) => r === data.form);
                const categoryMatches = productCategory.some(
                  (r) => r === data.category
                );
                return formMatches && categoryMatches; // Check for both form and category match
              })
              .map((data) => (
                <ProductCardX image={data.image} key={data.id}>
                  <div className="flex flex-col">
                    <p className="text-xs">{data.brand}</p>
                    <p className="font-bold text-base text-matas-grey">
                      {data.name}
                    </p>
                    <p className="font-bold text-lg">{data.price}</p>
                  </div>
                </ProductCardX>
              ))}
          </div>
        </section>
      </>
    );
  }
}

export default ProductView;
