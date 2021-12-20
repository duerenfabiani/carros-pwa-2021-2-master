import { useEffect } from "react";
import {useState} from 'react'

const Home = () => {
    const [listaObjetos, setListaObjetos] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('CARROSPWA-AULA/listaobjetos'))
            setListaObjetos(JSON.parse(localStorage.getItem('CARROSPWA-AULA/listaobjetos')));
    }, [])

    return (
        <div>
            <h1>Meus Carros - PWA</h1>

            <div style={{ padding: '20px' }}>
                {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
                {listaObjetos.length > 0 && (
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Modelo</th>
                                    <th scope="col">Fabricante</th>
                                    <th scope="col">Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaObjetos.map(objeto => (
                                    <tr key={objeto.id}>
                                        <td>{objeto.id}</td>
                                        <td>{objeto.modelo}</td>
                                        <td>{objeto.fabricante}</td>
                                        <td>{objeto.ano}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;