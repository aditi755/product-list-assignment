import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', stock: '' });
    const [editingProduct, setEditingProduct] = useState(null); // State for tracking the product being edited

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/products/all');
        setProducts(response.data);
    };

    const handleAddProduct = async () => {
        await axios.post('http://localhost:5000/products/add', newProduct);
        setNewProduct({ name: '', description: '', price: '', stock: '' }); // Clear input fields after adding
        fetchProducts();
    };

    const handleDeleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/delete/${id}`);
        fetchProducts();
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product); // Set the product being edited
    };

    const handleUpdateProduct = async () => {
        await axios.put(`http://localhost:5000/products/update/${editingProduct._id}`, editingProduct);
        setEditingProduct(null); // Reset the editing state after update
        fetchProducts();
    };

    return (
        <div className="mx-auto bg-blue-200 flex justify-center items-center flex-col w-screen h-screen mb-10 font-bold text-2xl ">
            <h1 className="mb-10 text-4xl">Product List</h1>

            {/* Add Product Form */}
            <div className="flex flex-col gap-6">
                <input
                    placeholder="Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <input
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input
                    placeholder="Stock"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />
                <button className="bg-blue-500 border-2 border-black" onClick={handleAddProduct}>Add Product</button>
            </div>

            {/* Product List */}
            <ul className="mt-10">
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - {product.description} - ${product.price} - Stock: {product.stock}
                        <button  className="bg-blue-500 ml-10 border-2 border-black" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                        <button className="bg-blue-500 ml-10 border-2 border-black" onClick={() => handleEditProduct(product)}>Edit</button>
                    </li>
                ))}
            </ul>

            {/* Edit Product Form (appears when editingProduct is not null) */}
            {editingProduct && (
                <div className="mx-auto bg-blue-200 flex justify-center items-center flex-col w-screen h-screen mb-10 font-bold text-2xl">
                    <h2>Edit Product</h2>
                    <input
                        placeholder="Name"
                        value={editingProduct.name}
                        onChange={(e) =>
                            setEditingProduct({ ...editingProduct, name: e.target.value })
                        }
                    />
                    <input
                        placeholder="Description"
                        value={editingProduct.description}
                        onChange={(e) =>
                            setEditingProduct({ ...editingProduct, description: e.target.value })
                        }
                    />
                    <input
                        placeholder="Price"
                        value={editingProduct.price}
                        onChange={(e) =>
                            setEditingProduct({ ...editingProduct, price: e.target.value })
                        }
                    />
                    <input
                        placeholder="Stock"
                        value={editingProduct.stock}
                        onChange={(e) =>
                            setEditingProduct({ ...editingProduct, stock: e.target.value })
                        }
                    />
                    <button  className="bg-blue-500 ml-5 border-2 border-black" onClick={handleUpdateProduct}>Save Changes</button>
                    <button  className="bg-blue-500 ml-0 border-2 border-black" onClick={() => setEditingProduct(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default ProductList;

