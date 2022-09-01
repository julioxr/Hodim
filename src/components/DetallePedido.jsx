import { useContext } from "react";
import { StyledDetallePedido } from "./styles/DetallePedido.style";
import { CheckinContext } from "../context/CheckinContext";

const DetallePedido = () => {
    const { setDetallePedido, setPedidoCompleto, reset } =
        useContext(CheckinContext);
    const finalizarPedido = (e) => {
        e.preventDefault();
        setDetallePedido(false);
        setPedidoCompleto(true);

        setTimeout(() => {
            reset();
        }, 3000);

        console.log("Pedido confirmado");
        // reset();
    };
    return (
        <StyledDetallePedido>
            <h2>Detalle del pedido</h2>
            <section className="detalle_pedido">
                <div>
                    <h4>Pedido:</h4>
                    <p>50422311</p>
                </div>
                <div>
                    <h4>Cliente:</h4>
                    <p>BC / DIMACO SA</p>
                </div>
                <div>
                    <h4>Conductor:</h4>
                    <p>Oliver Atom</p>
                </div>
                <div>
                    <h4>Camión:</h4>
                    <p>MID001</p>
                    <h4>Acoplado:</h4>
                    <p>MID002</p>
                </div>
                <div className="materiales">
                    <table>
                        <tr>
                            <td>Posición</td>
                            <td>Codigo</td>
                            <td>Material</td>
                            <td>Cantidad</td>
                            <td>UMD</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>10000435</td>
                            <td>CPC40</td>
                            <td>600</td>
                            <td>Bolsa</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>10053800</td>
                            <td>PALLET</td>
                            <td>600</td>
                            <td>Un</td>
                        </tr>
                    </table>
                </div>
            </section>
            <button onClick={(e) => finalizarPedido(e)}>
                Confirmar pedido
            </button>
        </StyledDetallePedido>
    );
};

export default DetallePedido;
