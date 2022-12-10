import { TortasPesonalizadasList } from "./TortasPesonalizadasList";

export const TortasPersonalizadas = ({ tipo }) => {
  return (
    <>
      <h1>TARTAS PERSONALIZADA</h1>
      <hr />
      <TortasPesonalizadasList tipo="personalizada" />
    </>
  );
};
