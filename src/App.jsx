import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-gray-100 rounded-md shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <button className="text-xl">&#8592;</button>
          <h1 className="text-center text-2xl font-semibold">Institución</h1>
          <div>
            <button className="bg-gray-300 text-black font-medium px-4 py-1 rounded-md mr-2">
              Añadir
            </button>
            <button className="bg-red-600 text-white font-medium px-4 py-1 rounded-md">
              Eliminar
            </button>
          </div>
        </div>

        <h2 className="text-xl font-bold flex items-center mb-4">
          <span className="mr-2">&#128100;</span> Registrarme
        </h2>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nombres"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Celular"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Repita contraseña"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
