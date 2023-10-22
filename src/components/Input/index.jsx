

import { Controller } from 'react-hook-form';
import styles from './styles.module.css';
import { forwardRef } from 'react';

function Input({ name, control, errors, ...props }, ref) {

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          <input {...field}
            className={styles.input} 
            type={props.type || 'text'} 
            value={field.value || ""}
            placeholder={props.placeholder || ""}
            {...props} ref={ref} />}
      />
      {errors[name] && <span className={styles.errorMessage}>{errors[name].message}</span>}
    </>
  );
}

export default forwardRef(Input);

/*
   <Controller />: É um componente fornecido pelo react-hook-form. Ele se encarrega de conectar o input com o estado e as funções do formulário.

    control={control}: O prop control é passado para o Controller. Ele é utilizado para gerenciar o estado do formulário pelo react-hook-form.

    name={name}: O prop name é o nome do campo do formulário. Ele deve corresponder ao nome do campo que você está gerenciando com o react-hook-form.

    render={({ field }) => ...}: field é um objeto que contém propriedades e eventos que devem ser passados para o input. Aqui, estamos usando a funcionalidade de renderização prop do Controller para renderizar um input.

    <input {...field} ...props ref={ref} />: Isso espalha todas as propriedades do objeto field como props do input. Isso inclui value, onChange, etc. Também estamos espalhando outras propriedades (...props) e passando a referência (ref) para o input.

    {errors[name] && ...}: Esta é uma expressão condicional que verifica se há um erro associado ao campo de entrada atual (errors[name]), e se houver, exibe uma mensagem de erro.

    errors[name].message: Isso assume que errors é um objeto onde a chave name corresponde ao nome do campo e contém um objeto com uma propriedade message.

    <span className={styles.errorMessage}>: Aqui estamos renderizando uma mensagem de erro usando o estilo definido no arquivo de estilos.*/