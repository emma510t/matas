import CardX from "@/components/CardX";
import ModalX from "@/components/ModalX";
import { ConfigProvider } from "antd";

export default function Home() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#284461",
            borderRadius: 2,

            // Alias Token
            colorBgContainer: "#DEE1E9",

            colorSuccess: "#000000",
          },
          components: {
            Progress: {
              defaultColor: "#284461",
            },
          },
        }}
      >
        <CardX name="/img/oekologisk-hudpleje.jpg">
          <div className="flex flex-col items-center">
            <p className="text-xs">FIND DIN FAVORIT</p>
            <p className="font-bold text-lg">Økologisk hudpleje</p>
          </div>
          <ModalX></ModalX>
        </CardX>
      </ConfigProvider>
    </>
  );
}
