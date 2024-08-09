import { useEffect, useState } from "react";
import { getProductsRequest } from "../api/products.api.js";
import DataTable from "react-data-table-component";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function loadProducts() {
      const response = await getProductsRequest();
      setProducts(response.data);
      setResetFilter(response.data);
    }
    loadProducts();
  }, []);
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "black",
        color: "white",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fondWeight: "600",
        textTransform: "uppercase",
      },
      cells: {
        style: {
          fontSize: "15px",
        },
      },
    },
  };

  const column = [
    {
      name: "ID",
      selector: (row) => (
        <div>E-{ row.id }</div>
      ),
    },
    {
      name: "PRUEBA",
      selector: (row) => row.exam,
      sortable: true,
    },
    {
      name: "PRECIO",
      selector: (row) => <div> S/.{row.pricec}.00</div>,
    },
    {
      name: "CONDICION",
      selector: (row) => row.preanalitic,
    },
    {
      name: "TIEMPO",
      selector: (row) => row.time,
    },
  ];
  const [resetFilter, setResetFilter] = useState([]);
  const handleFilter = (e) => {
    const newData = resetFilter.filter((row) =>
      row.exam.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProducts(newData);
  };

  return (
    <div className="w-full m-5 pr-20">
      <div className="mb-3 xl:w-96">
        <input
          type="search"
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          id="exampleSearch"
          placeholder="Buscar..."
          onChange={handleFilter}
        />
      </div>
      <DataTable
        columns={column}
        data={products}
        customStyles={customStyles}
        pagination
        selectableRows></DataTable>
    </div>
  );
}

export default ProductsPage;
