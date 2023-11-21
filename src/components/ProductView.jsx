"use client";
import CardX from "@/components/CardX";
import ModalX from "@/components/ModalX";
import { useState } from "react";

function ProductView() {
  const [pageView, setPageView] = useState(1);

  if (pageView === 1) {
    return (
      <section>
        <CardX name="/img/oekologisk-hudpleje.jpg">
          <div className="flex flex-col items-center">
            <p className="text-xs">FIND DIN FAVORIT</p>
            <p className="font-bold text-lg">Økologisk hudpleje</p>
          </div>
          <ModalX setPageView={setPageView}></ModalX>
        </CardX>
      </section>
    );
  } else {
    return (
      <section>
        <div>
          <p>Hello, Hello</p>
        </div>
      </section>
    );
  }
}

export default ProductView;
