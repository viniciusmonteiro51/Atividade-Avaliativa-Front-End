import axios from "axios";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import styles from './styles.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "@/components/Form";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListCard from "@/components/ListCard";

export default function AlterarEvento() {
    const [evento, setEvento] = useState({});
    const { handleSubmit, formState: { errors }, control, setValue } = useForm();
    let router = useRouter();
    let id = router.query.id;

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
                .then(resultado => {
                    console.log('Dados recebidos:', resultado.data);
                    setEvento(resultado.data);
                })
                .catch(error => {
                    console.error('Erro ao obter dados:', error);
                });
        }
    }, [id]); 

    useEffect(() => {
        if (evento) {
            setValue("titulo", evento.titulo);
            setValue("descricao", evento.descricao);
            setValue("dataInicio", evento.dataInicio);
            setValue("dataFim", evento.dataFim);
            setValue("local", evento.local);
            setValue("imagem", evento.imagem);
        }
    }, [evento]);

    async function alterarEvento(data) {
        try {
            let objeto = {
                titulo: data.titulo,
                descricao: data.descricao,
                dataInicio: data.dataInicio,
                dataFim: data.dataFim,
                local: data.local
            };

            const res = await axios.patch(`http://localhost:3000/alterar/${id}`, objeto);
            console.log('Resposta do servidor:', res.data); 
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    }


    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.formimage}>
                        <img src='/register.svg' />
                    </div>
                    <div className={styles.form}>
                        <Form onSubmit={handleSubmit(alterarEvento)}>
                            <div className={styles.formheader}>
                                <div className={styles.title}>
                                    <h1>Altere o evento selecionado</h1>
                                </div>
                            </div>

                            <div className={styles.inputgroup}>
                                <div className={styles.inputbox}>
                                    <label htmlFor='titulo'>Titulo:</label>
                                    <Input
                                        control={control}
                                        errors={errors}
                                        placeholder="Ex: Independência dos EUA"
                                        id='titulo'
                                        type='text'
                                        name='titulo'
                                        value={evento.titulo} 
                                        
                                        onChange={e => {
                                         setEvento({ ...evento, titulo: e.target.value })  
                                        console.log('Novo valor do campo titulo:', e.target.value);

                                    }}
                                            
                                             
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='descricao'>Descrição:</label>
                                    <Textarea
                                        placeholder="Ex: A Independência dos EUA teve seu início em..."
                                        control={control}
                                        errors={errors}
                                        id='descricao'
                                        cols='27'
                                        rows='3'
                                        name='descricao'
                                        value={evento.descricao}
                                        onChange={e => setEvento({ ...evento, descricao: e.target.value })} 
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='dataInicio'>Data de Início:</label>
                                    <Input
                                        control={control}
                                        errors={errors}
                                        id='dataInicio'
                                        type='date'
                                        name='dataInicio'
                                        value={evento.dataInicio} 
                                        onChange={e => setEvento({ ...evento, dataInicio: e.target.value })} 
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='dataFim'>Data de Fim:</label>
                                    <Input
                                        control={control}
                                        errors={errors}
                                        id='dataFim'
                                        type='date'
                                        name='dataFim'
                                        value={evento.dataFim} 
                                        onChange={e => setEvento({ ...evento, dataFim: e.target.value })} 
                                    />
                                </div>
                                <div>
                                    <label htmlFor='local'>Local:</label>
                                    <Input
                                        placeholder="Ex: Independência dos EUA"
                                        id='local'
                                        type='text'
                                        name='local'
                                        value={evento.local} 
                                        onChange={e => setEvento({ ...evento, local: e.target.value })} 
                                    />
                                </div>
                            </div>
                            <div className={styles.button}>
                                <button
                                    type='submit'>
                                    Alterar
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
