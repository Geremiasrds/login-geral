import React, { forwardRef } from "react";

const ItensSimulado = forwardRef(({ itemDigitado, setItemDigitado }, ref) => {
  const handleChange = (e) => {
    setItemDigitado(e.target.value);
  };

  return (
    <div>
      <input
        ref={ref}
        type="text"
        placeholder="Ex: 4 Limpezas"
        value={itemDigitado}
        onChange={handleChange}
      />
    </div>
  );
});

export default ItensSimulado;
