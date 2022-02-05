import Paciente from "./Paciente";

function ListadoPacientes({ pacientes }) {


    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600">Pacientes y Citas</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600">y apareceran en este lugar</span>
                    </p>
                </>
            )}

        </div>
    )
}
export default ListadoPacientes;