import { useEffect, useRef, useState } from 'react'
import './SimpleForm.css'

const useFocus = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return inputRef
}

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        matricula: '',
        nombre: '',
        apellidos: '',
        edad: '',
        universidad: '',
        carrera: '',
    })

    const [submittedData, setSubmittedData] = useState(null)
    const matriculaRef = useFocus()

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setSubmittedData(formState)
    }

    useEffect(() => {
        if (!submittedData) {
            return
        }

        document.title = `Formulario enviado: ${submittedData.nombre || 'Sin nombre'}`
    }, [submittedData])

    return (
        <section className="form-page">
            <div className="form-card">
                <h1 className="form-title">Formulario</h1>
                <p className="form-subtitle">Completa tus datos y presiona enviar.</p>

                <form onSubmit={onSubmit} className="student-form">
                <input
                    className="form-input"
                    ref={matriculaRef}
                    type="text"
                    name="matricula"
                    placeholder="Matricula"
                    value={formState.matricula}
                    onChange={onInputChange}
                />
                <input
                    className="form-input"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formState.nombre}
                    onChange={onInputChange}
                />
                <input
                    className="form-input"
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    value={formState.apellidos}
                    onChange={onInputChange}
                />
                <input
                    className="form-input"
                    type="text"
                    name="edad"
                    placeholder="Edad"
                    value={formState.edad}
                    onChange={onInputChange}
                />
                <input
                    className="form-input"
                    type="text"
                    name="universidad"
                    placeholder="Universidad"
                    value={formState.universidad}
                    onChange={onInputChange}
                />
                <input
                    className="form-input"
                    type="text"
                    name="carrera"
                    placeholder="Carrera"
                    value={formState.carrera}
                    onChange={onInputChange}
                />

                    <button className="submit-button" type="submit">Enviar</button>
                </form>

                {submittedData && (
                    <div className="result-card">
                        <h2 className="result-title">Datos enviados</h2>
                        <p>Matricula: {submittedData.matricula}</p>
                        <p>Nombre: {submittedData.nombre}</p>
                        <p>Apellidos: {submittedData.apellidos}</p>
                        <p>Edad: {submittedData.edad}</p>
                        <p>Universidad: {submittedData.universidad}</p>
                        <p>Carrera: {submittedData.carrera}</p>
                    </div>
                )}
            </div>
        </section>
    )
}