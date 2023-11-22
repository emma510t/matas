import Header from "@/components/Header";
import ProductView from "@/components/ProductView";
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

            colorSuccess: "#558A6B",
          },
          components: {
            Progress: {
              defaultColor: "#284461",
            },
          },
        }}
      >
        <Header />
        <main className="bg-matas-white py-6">
          <ProductView id="overview" />
        </main>
      </ConfigProvider>
    </>
  );
}
