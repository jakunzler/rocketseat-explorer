import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";

import { ButtonText } from "../../components/ButtonText";

import { Input } from "../../components/Input";

import { Note } from "../../components/Note";

import { Section } from "../../components/Section";

import { api } from "../../services/api";

export function Home() {
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleTagsSelection(tagName) {
        if(tagName === "all") {
            return setTagsSelected([]);
        };

        const tagAlreadySelected = tagsSelected.includes(tagName);

        if (tagAlreadySelected) {
            const filteredTags = tagsSelected.filter(
                (tag) => tag !== tagName
            );

            setTagsSelected(filteredTags);
        } else {
            setTagsSelected([...tagsSelected, tagName]);
        }
    };

    function handleDetails (id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('http://localhost:3000/tags');
            const data = await response.json();

            setTags(data);
        }

        fetchTags();
    }, []);

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);

        }

        fetchNotes();
    }, [tagsSelected, search]);

    return(
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li>
                    <ButtonText 
                    title="Todos"
                    onClick={() => setTagsSelected("all")}
                    isActive={tagsSelected.length === 0}
                />
                </li>

                {
                    tags && tags.map(tag => (
                        <li>
                            <ButtonText
                            key={String(tag.id)}
                            title={tag.name} 
                            onClick={() => handleTagsSelection(tag.name)}
                            isActive={tagsSelected.includes(tag.name)}
                        />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título"
                    onChange={(event) => setSearch(event.target.value)}
                />
            </Search>

            <Content>
                <Section title="Notas Recentes" >
                    {
                        notes.map((note) => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                    
                </ Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota

            </NewNote>
        </Container>
    )
};