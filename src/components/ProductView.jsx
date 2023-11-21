"use client";
import CardX from "@/components/CardX";
import ProductCardX from "@/components/ProductCardX";
import ModalX from "@/components/ModalX";
import { useState } from "react";
import { Button } from "antd";

function ProductView() {
  const [pageView, setPageView] = useState(1);
  const [productTypes, setProductTypes] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const resultArray = productTypes.concat(productCategory);

  if (pageView === 1) {
    return (
      <section className="layoutView">
        <div className="grid-cols-3 grid gap-3">
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
          <ProductCardX>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">Ecooking</p>
              <p className="text-xs">Dagcreme Parfumefri50 ml</p>
            </div>
          </ProductCardX>
          <ProductCardX>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">Ecooking</p>
              <p className="text-xs">Dagcreme Parfumefri50 ml</p>
            </div>
          </ProductCardX>
          <ProductCardX>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">Ecooking</p>
              <p className="text-xs">Dagcreme Parfumefri50 ml</p>
            </div>
          </ProductCardX>
          <ProductCardX>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">Ecooking</p>
              <p className="text-xs">Dagcreme Parfumefri50 ml</p>
            </div>
          </ProductCardX>
          <ProductCardX>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">Ecooking</p>
              <p className="text-xs">Dagcreme Parfumefri50 ml</p>
            </div>
          </ProductCardX>
          <ProductCardX>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">Ecooking</p>
              <p className="text-xs">Dagcreme Parfumefri50 ml</p>
            </div>
          </ProductCardX>
          <ProductCardX>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">Ecooking</p>
              <p className="text-xs">Dagcreme Parfumefri50 ml</p>
            </div>
          </ProductCardX>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <Button
          key="back"
          type="text"
          onClick={() => {
            setProductTypes([]);
            setProductCategory([]);
            /* setPageView((page) => {
              return page - 1;
            }); */
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
        </Button>
        <div className="layoutView">
          <p>Hello, Hello</p>
        </div>
      </section>
    );
  }
}

export default ProductView;
