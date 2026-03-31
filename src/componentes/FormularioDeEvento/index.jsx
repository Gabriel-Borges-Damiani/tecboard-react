import './formulario-de-evento-estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento(){

  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className='campos'>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id='nome' placeholder='Summer dev hits' name='nome'></CampoDeEntrada>
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Data do evento
        </Label>
        <CampoDeEntrada type="date" id='dataEvento' placeholder='Summer dev hits' name='dataEvento'></CampoDeEntrada>
      </CampoDeFormulario>
      </div>
    </form>
  )
}