import { Formik, Form } from "formik";
import { createProductRequest } from "../api/products.api.js";
const ProductForm = () => {
  return (
    <div className="flex justify-center items-center">
      <Formik
        initialValues={{
          exam: "",
          sample: "",
          method: "",
          pricep: "",
          pricec: "",
          tube: "",
          preanalitic: "",
          time: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createProductRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}>
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <div className="">
            <Form onSubmit={handleSubmit} className=" flex flex-col">
              <div className="text-3xl mb-6 font-bold">CREAR NUEVA PRUEBA</div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nombre de Prueba
              </label>
              <input
                type="text"
                name="exam"
                placeholder="Ejem: Glucosa"
                onChange={handleChange}
                value={values.exam}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tipo de muestra
              </label>
              <input
                type="text"
                name="sample"
                placeholder="Ejem: Suero"
                onChange={handleChange}
                value={values.sample}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Metodo de lectura
              </label>
              <input
                type="text"
                name="method"
                placeholder="Ejem: Cinético"
                onChange={handleChange}
                value={values.method}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Precio publico
              </label>
              <input
                type="number"
                name="pricep"
                placeholder=""
                onChange={handleChange}
                value={values.pricep}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Precio convenio
              </label>
              <input
                type="number"
                name="pricec"
                placeholder=""
                onChange={handleChange}
                value={values.pricec}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tipo de tubo frasco ó galonera
              </label>
              <input
                type="text"
                name="tube"
                placeholder="Ejem: Tubo rojo ó amarillo"
                onChange={handleChange}
                value={values.tube}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Recomendaciones
              </label>
              <textarea
                name="preanalitic"
                rows="5"
                placeholder=""
                onChange={handleChange}
                value={values.preanalitic}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></textarea>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tiempo de proceso
              </label>
              <input
                type="text"
                name="time"
                placeholder=""
                onChange={handleChange}
                value={values.time}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-5"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
