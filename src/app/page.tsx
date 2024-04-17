'use client'
import { Body } from "./page.styled";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/redux";
import { setAfazer } from "./redux/reduxtypes";
import { green, red } from "@mui/material/colors";
type over = {
  data: string,
  categoria: string,
  titulo: string,
  valor: number,
}

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userData.todos);
  var { handleSubmit, register, reset } = useForm<over>()
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const [date, setDate] = useState<Date>(new Date)
  const [valueUp,setValueUp]= useState(0)
  const [valueDown,setValueDown]= useState(0)
  const [valornew, setValornew] = useState<over[]>()
  useEffect(()=>{
  var lucro = 0
  var perda = 0
  const ganho = user.map((a)=>{
      if(a.categoria === 'Salario'){
       lucro +=(+a.valor) 
      }
      else{
        perda +=(+a.valor)
      }
    setValueUp(lucro)
    setValueDown(perda)
    console.log('oi')
    },[user])
  })
  useEffect(() => {
    var dates = (date.getFullYear()) + '-' + (1 + date.getMonth())
    if (1 + date.getMonth() < 10) dates = (date.getFullYear()) + '-' + '0' + (1 + date.getMonth())
    const filtrar = user.filter((a) => a.data.slice(0, 7) === dates)
    setValornew(filtrar)
  }, [date])
  function enviar(a: over) {
    const dates = new Date(a.data)
    dispatch(setAfazer(a))
    setDate(dates)

  }
  function menos() {
    const data = date.getTime() - (30 * 24 * 60 * 60 * 1000);
    setDate(new Date(data))
  }
  function More() {
    const data = date.getTime() + (30 * 24 * 60 * 60 * 1000);
    setDate(new Date(data))
  }
  return (
    <Body>
      <div className="tm">
        <div className="logo">Sistema Financeiro</div>
        <div className="mes">
          <div className="days">
            <Fab onClick={menos} size="small" aria-label="add">
              <ArrowBackIcon style={{ height: '15px', width: '15px' }} />
            </Fab>
            {meses[date?.getMonth()] + ' ' + date.getFullYear()}
            <Fab onClick={(More)} size="small" aria-label="add">
              <ArrowForwardIcon style={{ height: '15px', width: '15px' }} />
            </Fab>
          </div>
          <div className="receita">
            <span>Receita</span>
            <p>{(valueUp.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))}</p>
          </div>
          <div className="despesa">
            <span>Despesa</span>
            <p>{valueDown.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
          <div className="Balanço">
            <span>Balanço</span>
            <p style={valueUp-valueDown<0?{color:'red'}:{color:'green'}}>{(valueUp-valueDown).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
        <div className="categoria">
          <form onSubmit={handleSubmit(enviar)}>
            <div>
              <label>
                Data
                <input type="date" {...register("data")} required />
              </label>
            </div>
            <div>
              <label>
                Categoria
                <input list="cars" {...register("categoria")} required />
                <datalist id="cars" >
                  <option value="Salario" />
                  <option value="Alimentação" />
                  <option value="Aluguel" />
                </datalist>
              </label>
            </div>
            <div>
              <label>
                Titulo
                <input type="text" {...register('titulo')} required />
              </label>
            </div>
            <div>
              <label>
                Valor
                <input type="number" {...register('valor')} required />
              </label>
            </div>
            <div>
              <label className="text-white">
                .
                <button className="text-black">Adicionar</button>
              </label>
            </div>
          </form>
        </div>
        <div className="info">
          <div className="biquine">
            <div className="text">
              Data
              <div>{valornew?.map((a,b) =>
                <div className="margin" key={b}>
                  {a.data}
                </div>
              )}</div>
            </div>
            <div>Categoria
            {valornew?.map((a,b) =>
                <div className="margin" style={a.categoria==='Salario'?{background:'#3529db'}:{background:'#6a1a1e'}} key={b}>
                  {a.categoria}
                </div>
              )}
            </div>
            <div className="text">Titulo
            {valornew?.map((a,b) =>
                <div className="margin" key={b}>
                  {a.titulo}
                </div>
              )}
            </div>
          </div>
          <div className="text">Valor
          {valornew?.map((a,b) =>
                <div className="margin" key={b}>
                  {(+a.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
              )}
          </div>
        </div>
      </div>
    </Body>
  );
}
