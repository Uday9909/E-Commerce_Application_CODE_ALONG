import react, {useState,useEffect} from 'react';
import {AiOutlinePlusCircle} from "react-icons/ai";

const CreateProduct=() => {
    const [images,setImages]= useState([]);
    const [previewImages,setPreviewImages] = useState([]);
    const [name, setName] = useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory] =useState("");
    const [tags,setTags] = useState("");
    const [price,setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [email,setEmail] = useState("");

    const categoriesData = [
        {title: "Electronics"},
        {title: "Fashion"},
        {title: "Books"},
        {title: "Home Appliances"},
        
    ];

    const handleImageChange =(e) =>{
        const files= Array.from(e.target.files);
        setImages((prevImages)=>prevImages.concat(files));
        const imagePreviews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages((prevPreviews)=>
        prevPreviews.concat(imagePreviews));
    };

    useEffect(() => {
        return () => {
            previewImages.forEach((url) => URL.revokeObjectURL(url));
        };
  }, [previewImages]);

  const handleSubmit = (e) => {
        e.preventDefault();
        const productData ={
            name,
            description,
            category,
            tags,
            price,
            stock,
            email,
            images,
        };
        console.log("Product Data :" ,productData);
        alert("Product created successfully !!");

        //clears the form after submission
        setImages([]);
        setPreviewImages([]);
        setName("");
        setDescription("");
        setCategory("");
        setTags("");
        setPrice("");
        setStock("");
        setEmail("");
  };

  return (
    <div
        className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-12 
            flex flex-col justify-center items-center sm:px-6 lg:px-8">
                < div className="w=[90%] max-w-[800px] bd-white shadow h-auto rounded -[4px] p-4 mx-auto">
                < h5 className="mt-6-text-center text-3xl font-hold text-gra-900"> Create Product</h5>
                <form onSubmit={handleSubmit}>
                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">
                            Email <span className ="text-red-500">*</span>
                        </label>
                        <input 
                        type="email"
                        value={email}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        />
                    </div>


                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">
                             Name <span className ="text-red-500">*</span>
                        </label>
                        <input 
                        type="text"
                        value={name}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter product name"
                        required
                        />
                    </div>


                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">
                            Description <span className ="text-red-500">*</span>
                        </label>
                        <textarea value={description}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter product description"
                        rows="4"
                        required
                        />
                    </div>


                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">
                            category <span className ="text-red-500">*</span>
                        </label>
                        <select
                        value={category}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        >

                        <option className='block text-s font-medium text-gray-700' value=""> Choose a category</option>
                        {
                            categoriesData.map((i) =>{
                                <option value={i.title} keys={i.title}>
                                    {i.title}
                                </option>

                            })
                        }
                        </select>
                    </div>


                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">
                            Tags <span className ="text-red-500">*</span>
                        </label>
                        <input 
                        type="Text"
                        value={tags}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter product tags"
                        required
                        />
                    </div>


                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">
                            Price <span className ="text-red-500">*</span>
                        </label>
                        <input 
                        type="number"
                        value={price}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter your Product Price"
                        required
                        />
                    </div>


                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">
                            Stock <span className ="text-red-500">*</span>
                        </label>
                        <input 
                        type="number"
                        value={stock}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Enter Stock Quantity"
                        required
                        />
                    </div>

                    <div className='mt-4'>
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Images <span className ="text-red-500">*</span>
                        </label>
                        <input 
                        type="file"
                        id="upload"
                        className="hidden"
                        multiple
                        onChange={handleImageChange}
                        required
                        />

                        <label htmlFor="upload" className='cursor-pointer p-2'>
                        <AiOutlinePlusCircle size={20} color="#555"/>
                        </label>
                        <div className='flex flex-wrap mt-2'>
                            {previewImages.map((img,index)=>{
                                <img 
                                src={img}
                                key={index}
                                alt="Preview"
                                className='w-[100px] h-[100px] object-cover m-2'
                                />
                            })}
                        </div>
                        <button 
                        type="submit"
                        className='w-full mt-4 bg-blue-500 text-white p-2 rounded'>
                            Create
                        </button>

                    </div>




                </form>
            </div>
    </div>
  );




};
export default CreateProduct;