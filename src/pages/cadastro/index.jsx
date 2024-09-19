import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, CriarText, Row, Wrapper } from './styles';

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
          
            const { data } = await api.get(`/users?email=${formData.email}`);
            
            if (data.length > 0) {
                alert('Este e-mail já está cadastrado.');
                return;
            }

            
            await api.post('/users', {
                name: formData.name, 
                email: formData.email,
                senha: formData.senha
            });

            alert('Cadastro realizado com sucesso!');
            navigate('/login');
        } catch (e) {
            alert('Ocorreu um erro ao tentar realizar o cadastro.');
        }
    };

    console.log('errors', errors);

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>Crie sua conta na plataforma para aprender com experts e dominar as principais tecnologias.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu Cadastro</TitleLogin>
                        <SubtitleLogin>Preencha os campos para criar sua conta.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome" name="name" control={control} />
                            {errors.name && <span>Nome é obrigatório</span>}
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatória</span>}
                            <Button title="Cadastrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <CriarText onClick={() => navigate('/login')}>Já tem conta? Faça login</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export { Cadastro };
