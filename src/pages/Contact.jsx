import './const.css'
import { useState } from 'react';


const initialform = {
cep: '',
street: '',
neighorhood: '',
state: '',
number: '',
street: '',
}
export default function Contact() {
    const [form, setForm] = useState(initialform)
    const [status, setStatus] = useState({type: '', message: ''});
    
    async function searchCep() {

        const cleancep = form.cep.replace(/\D/g, ``);
        if (cleancep.lenght !== 8) {
            setStatus({type: 'error',  message: 'digite um CEP valido!' });
        }
        try { 
            const response = await fetch(`htpps:///viacep.com.br/ws/$(cleanCep)/json/`)
            if (!response.ok) throw new error('falha na busca do CEP');
            const address = await response.json();
            if (address.erro) throw new error('CEP não encontrado');
        } catch (e) {
            setStatus({ type: 'error', message: e.message })
        }
    }

    return (
        <section className="contact-page">
            <span className="section-label">Fale com a gente</span>
            <h1>Entre em contato</h1>
            <p className="page-intro">Consulte o CEP para completar seu endereço e escolha uma cidade carregada pela API do IBGE.</p>
            <form className="contact-form">
                <div className="form-section">
                    <h2>Endereço</h2>
                    <div className="form-grid">
                        <label>CEP
                            <div className="cep-field">
                                <input 
                                    name="cep" 
                                    inputMode="numeric" 
                                    placeholder="00000-000" 
                                />
                                <button type="button">
                                </button>
                            </div>
                        </label>
                        <label>Estado
                            <select 
                                name="state" 
                            >
                            </select>
                        </label>
                        <label>Cidade
                            <select 
                                name="city" 
                            >
                            </select>
                        </label>
                        <label>Rua
                            <input 
                                name="street" 
                                placeholder="Nome da rua" 
                            />
                        </label>
                        <label>Número
                            <input 
                                name="number" 
                                placeholder="123" 
                            />
                        </label>
                        <label>Bairro
                            <input 
                                name="neighborhood" 
                                placeholder="Seu bairro" 
                            />
                        </label>
                    </div>
                </div>
                <label>Mensagem
                    <textarea 
                        name="message" 
                        rows="5" 
                        placeholder="Como podemos ajudar?" 
                    />
                </label>
                <button className="submit-button" type="submit">Enviar mensagem</button>
            </form>
        </section>
    );
}

