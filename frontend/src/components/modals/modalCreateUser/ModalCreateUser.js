import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import GroupButton from '../../buttons/GroupButton/GroupButton'
import useForms from '../../../functions/useForms/useForms'
import './index.css';
import InputMask from "react-input-mask";

// import CreateUser from '../../forms/CreateUser';


export default function ModalCreateUser(props) {

    const [{values}, handleChange, handleSubmit] = useForms();
    const [classFormGroup] = useState("form-group")
    const [typeChecked, setTypeChecked] = useState(false);

    const test = (p) => {
        if(p.pessoa === undefined ){ p.pessoa = "Pessoa física"}
        if(p.pessoa === "Pessoa física"){
            delete p.nomeFantasia;
            delete p.cnpj;
        }else{
            delete p.sobrenome;
            delete p.cpf;
        }
        console.log(p)
    }


    return(
        <Modal
            id="modalCreateUser"
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Body>
                <form>
                    {/* <CreateUser handleChange={handleChange}/> */}
                    <div className="title-createUser">
                            <span>Tipo:</span>
                        <div>
                            <input defaultChecked type="radio" id="radio-Pessoafisica" onChange={handleChange} onClick={()=>{setTypeChecked(false)}} name="pessoa"  value="Pessoa física"/>
                            <label htmlFor="radio-Pessoafisica" >Pessoa física</label>
                        </div>
                        <div>
                            <input type="radio" id="radio-Pessoajuridica" onChange={handleChange} onClick={()=>setTypeChecked(true)} name="pessoa"  value="Pessoa jurídica" />
                            <label htmlFor="radio-Pessoajuridica" >Pessoa jurídica</label>
                        </div>
                    </div>
                    {!typeChecked ? (
                        <>
                        <div className={classFormGroup}>
                            <input type="text" onChange={handleChange} required placeholder="Nome" name="nome" value={''} />
                            <input type="text" onChange={handleChange} placeholder="Sobrenome" name="sobrenome" />
                        </div>
                        <div className={classFormGroup}>
                            <InputMask mask="(99) 99999-9999" placeholder={"telefone"} name={"telefone"} onChange={handleChange}/>
                            <input type="email" onChange={handleChange} placeholder="E-mail" name="email"/>
                        </div>
                        <div className={classFormGroup}>
                            <InputMask mask="999.999.999-99" placeholder={"CPF"} name={"cpf"} onChange={handleChange}/>
                            <InputMask mask="99/99/9999" placeholder={"Data de Nascimento"} name={"dataDeNascimento"} onChange={handleChange}/>
                        </div>
                        </>
                    ) : (
                        <>
                        <div className="form-group">
                            <input type="text" onChange={handleChange} placeholder="Razão Social" name="razaoSocial" />
                        </div>
                        <div className="form-group">
                            <InputMask mask="99.999.999/9999-99" placeholder={"CNPJ"} name={"cnpj"} onChange={handleChange}/>
                            <input type="text" onChange={handleChange} placeholder="Nome fantasia" name="nomeFantasia"/>
                        </div>
                        <div className="form-group">
                        <InputMask mask="(99) 99999-9999" placeholder={"telefone"} name={"telefone"} onChange={handleChange}/>
                            <input type="text" onChange={handleChange} required placeholder="E-mail" name="e-mail"/>
                        </div>
                        </>
                    )}
                    <>
                    <div className="form-group">
                            <input type="password" onChange={handleChange} placeholder="Senha" name="senha"/>
                            <input type="password" onChange={handleChange} placeholder="Confirmar senha" name="confirmacaoSenha"/>
                        </div>
                        <div className="form-group">
                            <InputMask mask="999999-99" placeholder={"CEP"} name={"cep"} onChange={handleChange}/>
                            <input type="text" onChange={handleChange} placeholder="Endereço" name="endereco"/>
                            <input type="number" onChange={handleChange} placeholder="Número" name="numero"/>
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={handleChange} placeholder="UF" name="uf"/>
                            <input type="text" onChange={handleChange} placeholder="Cidade" name="cidade"/>
                            <input type="text" onChange={handleChange} placeholder="Bairro" name="bairro"/>
                        </div>
                        <div className="last-checkbox">
                            <span>Atuação:</span>
                            <div>
                                <input type="checkbox" id="CheckBox-agricultura" onChange={handleChange} name="agricultura" value="A" />
                                <label htmlFor="CheckBox-agricultura">Agricultura</label>
                                <input type="checkbox" id="CheckBox-pecuaria" onChange={handleChange} name="pecuaria" value="P"/>
                                <label htmlFor="CheckBox-pecuaria">Pecuária</label>
                            </div>
                        </div>
                    </>
                    <GroupButton 
                            ButtonCancel={props.handleClose} ButtonSubmit={handleSubmit(values, test)} 
                            ValueButtonCancel="CANCELAR" ValueButtonSubmit="SUBMIT">
                    </GroupButton>
                </form>
            </Modal.Body>
        </Modal>
    )
}