import React from "react"
import { useState, useEffect } from 'react'

import { ContainerModalCliente } from './styled'
import { ButtonSubmit } from "../buttonSubmit"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import moment from "moment"

import Api from '../../../services/api'

export const FormCliente = ({buscarNovamente}) => {

    const [cars, setCars] = useState([])
    const [idCarro, setIdCarro] = useState('')
    const [qtdeDiasAlugados, setQtdeDiasAlugados] = useState(0)
    const [dataRetirada, setDataRetirada] = useState('')
    const [dataEntrega, setDataEntrega] = useState('')
    const [valorAluguel, setValorAluguel] = useState(0)
    const [dataReserva, setDataReserva] = useState('')
    const [infoCar, setInfoCar] = useState(0)
    const statusAluguel = 0;
    const [idCliente, setIdCliente] = useState(undefined)

    const notifySucc = () => toast.success('Você tem um novo Aluguel!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;

    const notifyErr = () => toast.error('Você não pode executar essa operação!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyNd = () => toast.error('Campo Vazio!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    useEffect(() => {
        const buscarId = localStorage.getItem('UserID')
        setIdCliente(buscarId)
    }, [])


    useEffect(() => {
        async function dataCar() {
            const response = await Api.get('carros/carrosDisponiveis')
            setCars(response.data.response)
        }
        dataCar();
    }, [])


    useEffect(() => {
        async function getSingleCar() {
            const responseInfo = await Api.get(`carros/${idCarro}`)
            setInfoCar(responseInfo.data.response[0])
        }
        getSingleCar()
        setValorAluguel(0)
        setQtdeDiasAlugados(0)
    }, [idCarro])

    useEffect(() => {
        dataDaReserva();
        setValorAluguel(infoCar.valorDiaAluguel * qtdeDiasAlugados)
    }, [qtdeDiasAlugados])

    function dataDaReserva() {
        const dataMomentoReserva = moment(new Date()).format('YYYY-MM-DD')
        setDataReserva(dataMomentoReserva)

        onCalcularData()
    }
    function onCalcularData() {
        const dataDaEntrega = moment(new Date(dataRetirada)).add(parseInt(qtdeDiasAlugados) + 1, 'days')
        const newDataEntrega = dataDaEntrega.format('YYYY-MM-DD')
        setDataEntrega(newDataEntrega)
    }

    async function novoAluguel(
        idCarro,
        idCliente,
        dataReserva,
        dataRetirada,
        dataEntrega,
        qtdeDiasAlugados,
        valorAluguel,
        statusAluguel
    ) {
        try {
            if (valorAluguel > 0) {
                const response = await Api.post('alugueis/novoAluguel', {
                    idCarro: idCarro,
                    idCliente: idCliente,
                    dataReserva: dataReserva,
                    dataRetirada: dataRetirada,
                    dataEntrega: dataEntrega,
                    qtdeDiasAlugados: qtdeDiasAlugados,
                    valorAluguel: valorAluguel,
                    statusAluguel: statusAluguel
                })
                notifySucc()
                buscarNovamente()
                console.log(response)
            }
            else {
                notifyNd()
            }
        } catch (error) {
            notifyErr()
            console.log(error)
        }
    }

    //função para aceita apenas numeros no input
    function onlynumber(e) {
        var theEvent = e || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /^[0-9.]+$/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    return (
        <ContainerModalCliente>
            <div className='form-model-cliente'>
                <div className='campo-input'>
                    <label>Modelo do Veículo</label>
                    <select
                        onChange={e => setIdCarro(e.target.value)}
                        defaultValue={'DEFAULT'}
                    >
                        <option value="DEFAULT" selected>
                            selecione um modelo
                        </option>
                        {cars.length > 0 &&
                            cars.map((cars) => (
                                <option
                                    key={cars.idCarro}
                                    value={cars.idCarro}
                                >{cars.modelo}  -  {cars.placa}</option>
                            ))
                        }
                    </select>
                </div>

                <div className='campo-input'>
                    <label>Data Retirada</label>
                    <input
                        value={dataRetirada}
                        type="date"
                        onChange={e => setDataRetirada(e.target.value)}
                    />
                </div>
                <div className='campo-input'>
                    <label>Quantidade de Dias</label>
                    <input
                        type="text"
                        value={qtdeDiasAlugados}
                        maxlength="3" pattern="([0-9]{3})"
                        onChange={e => setQtdeDiasAlugados(e.target.value)}
                        onKeyPress={onlynumber}
                    />
                </div>
                <div className='price-div'>
                    <p>Preço:</p>
                    <span>R${valorAluguel > 0 ? valorAluguel : '0'}</span>
                </div>
            </div>

            <div className='submit-button-alugar'>
                <ButtonSubmit text="Alugar" onClick={() => novoAluguel
                    (
                        idCarro,
                        idCliente,
                        dataReserva,
                        dataRetirada,
                        dataEntrega,
                        qtdeDiasAlugados,
                        valorAluguel,
                        statusAluguel
                    )}
                />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </ContainerModalCliente>
    )
}