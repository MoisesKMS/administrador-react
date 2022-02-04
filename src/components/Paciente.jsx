function Paciente() {
    return (
        <>
            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">Hook</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propietario: {''}
                    <span className="font-normal normal-case">Moises Jimenez</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">Correo@correo.com</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha Alta: {''}
                    <span className="font-normal normal-case">10 Diciembre 2022</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {''}
                    <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis similique aliquid, aliquam nam delectus non dignissimos perferendis excepturi, sequi id molestiae nisi odio. Ab iusto impedit illum, harum dolore voluptatibus.</span>
                </p>
            </div>
        </>
    )
}
export default Paciente;