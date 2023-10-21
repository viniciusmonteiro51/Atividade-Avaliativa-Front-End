import styles from './styles.module.css'
import axios from "axios";
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Atualizar from '../alterar/[id]';
export default function Cadastro() {

    const [evento, setEvento] = useState({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local: "",
        imagem: ''
    })

    function inserirEvento(e) {
        e.preventDefault()
        console.log(evento)

        function limparFormulario() {
            setEvento({
                titulo: "",
                descricao: "",
                dataInicio: "",
                dataFim: "",
                local: "",
                imagem: ''
            });
        }

        axios.post('http://localhost:3000/eventos', evento)
            .then(resultado => {
                console.log(resultado.data);
                limparFormulario();
                toast.success('Evento cadastrado com sucesso!');
            })
            .catch(error => {
                console.error(error);
                toast.error('Erro ao cadastrar evento. Por favor, tente novamente mais tarde.');
            });

    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.formimage}>

                        <img src='/register.svg' />

                    </div>
                    <div className={styles.form}>
                        <form onSubmit={e => inserirEvento(e)}>
                            <div className={styles.formheader}>
                                <div className={styles.title}>
                                    <h1>Cadastre-se</h1>
                                </div>
                            </div>

                            <div className={styles.inputgroup}>
                                <div className={styles.inputbox}>
                                    <label htmlFor='titulo'>Titulo:</label>
                                    <Input
                                        placeHolder="Ex: Independência dos EUA"
                                        id='titulo'
                                        type='text'
                                        name='titulo'
                                        value={evento.titulo}
                                        onChange={e => setEvento({
                                            ...evento,
                                            titulo: e.target.value
                                        })}
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='descricao'>Descrição:</label>
                                    <Textarea placeHolder="Ex: A Independência dos EUA teve seu inicio em..."
                                        id='descricao'
                                        cols='27'
                                        rows='3'
                                        name='descricao'
                                        value={evento.descricao}
                                        onChange={e => setEvento({
                                            ...evento,
                                            descricao: e.target.value
                                        })}>

                                    </Textarea>
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='dataInicio'>Data de Início:</label>
                                    <Input
                                        type='date'
                                        name='dataInicio'
                                        value={evento.dataInicio}
                                        onChange={e => setEvento({
                                            ...evento,
                                            dataInicio: e.target.value
                                        })}
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='dataFim'>Data de Fim:</label>
                                    <Input
                                        type='date'
                                        name='dataFim'
                                        value={evento.dataFim}
                                        onChange={e => setEvento({
                                            ...evento,
                                            dataFim: e.target.value
                                        })}
                                    />
                                </div>
                                <div className={styles.file}>
                                    <p></p>
                                    <Input
                                        className={styles.input}
                                        type={'file'}
                                        id='imagem'
                                        value={evento.imagem}
                                        onChange={(e) => setEvento({
                                            ...evento,
                                            imagem: e.target.value
                                        })}
                                    />
                                </div>
                            </div>

                            <div className={styles.button}>
                                <button
                                type='submit'> 
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}