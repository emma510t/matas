import CardX from "@/components/CardX";
import ModalX from "@/components/ModalX";

export default function Home() {
  return (
    <>
      <CardX>
        <div className="flex flex-col items-center">
          <p className="text-xs">FIND DIN FAVORIT</p>
          <p className="font-bold text-lg">Økologisk hudpleje</p>
        </div>
        <ModalX></ModalX>
      </CardX>
    </>
  );
}
