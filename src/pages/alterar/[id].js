import axios from "axios";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import styles from './styles.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "@/components/Form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AlterarEvento() {

    const [evento, setEvento] = useState({
        titulo: '',
        descricao:'',
        dataInicio: '',
        dataFim: '',
        local: '',
        imagem: ''
    });
    const router = useRouter()
    const id = router.query.id

    useEffect(() =>{

        if (id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
                .then(resultado => {
                    setEvento
                    ({
                        ...evento, 
                        titulo: resultado.data.titulo,
                        descricao: resultado.data.descricao,
                        dataInicio: resultado.data.dataInicio,
                        dataFim: resultado.data.dataFim,
                        local: resultado.data.local,
                        imagem: resultado.data.imagem
                    })
                })    
        }
    }, [])
    
        const handleSubmit = (e) => {
            e.preventDefault();

            function limparFormulario() {
                setEvento({
                    titulo: "",
                    descricao: "",
                    dataInicio: "",
                    dataFim: "",
                    local: "",
                    imagem:""
                });
            }

            axios.put(`http://localhost:3000/eventos/${id}`, evento)
                .then(resultado => {
                    limparFormulario();
                    toast.success('Evento atualizado com sucesso!');
                })
                .catch(error => {
                    if (error.response && error.response.status === 404) {
                        toast.error('Evento não encontrado. Verifique o ID.');
                    } else {
                        console.error(error);
                        toast.error('Erro ao atualizar evento. Por favor, tente novamente mais tarde.');
                    }
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
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formheader}>
                                <div className={styles.title}>
                                    <h1>Altere o evento selecionado</h1>
                                </div>
                            </div>

                            <div className={styles.inputgroup}>
                                <div className={styles.inputbox}>
                                    <label htmlFor='titulo'>Titulo:</label>
                                    <Input                                      
                                        id='titulo'
                                        type='text'
                                        name='titulo' 
                                        placeholder="Ex: Independência dos EUA"
                                        value={evento.titulo}
                                        onChange={e => setEvento({...evento, titulo: e.target.value})}
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='descricao'>Descrição:</label>
                                    <Textarea                                       
                                        id='descricao'                        
                                        name='descricao' 
                                        placeholder="Ex: A Independência dos EUA teve seu início em..." 
                                        cols='27'
                                        rows='3'
                                        value={evento.descricao}
                                        onChange={e => setEvento({...evento, descricao: e.target.value})}
                                        >
                                    </Textarea>
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='dataInicio'>Data de Início:</label>
                                    <Input
                                        id='dataInicio'
                                        type='date'
                                        name='dataInicio'                                            
                                        value={evento.dataInicio}
                                        onChange={e => setEvento({...evento, dataInicio: e.target.value})}
                                    />
                                </div>
                                <div className={styles.inputbox}>
                                    <label htmlFor='dataFim'>Data de Fim:</label>
                                    <Input
                                        id='dataFim'
                                        type='date'
                                        name='dataFim'
                                        value={evento.dataFim}
                                        onChange={e => setEvento({...evento, dataFim: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='local'>Local:</label>
                                    <Input                       
                                        id='local'
                                        type='text'
                                        name='local' 
                                        placeholder="Ex: Independência dos EUA"
                                        value={evento.local}
                                        onChange={e => setEvento({...evento, local: e.target.value})}/>

                                </div>
                                <div className={styles.file}>
                                    <p></p>
                                    <Input                                   
                                       className={styles.input}
                                       type={'file'}
                                       id='imagem'
                                       onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                            const filePath = `/${file.name}`;
                                            setEvento({
                                           ...evento,
                                            imagem: filePath
                                               });
                                            }}}/>

                                </div>
                            </div>
                            <div className={styles.button}>
                                <button
                                    type='submit'>
                                    Alterar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
