import React, { useEffect, useState } from "react";
import { useDocument } from "../../../store/hooks";

function HomePage() {
  const [inputText, setInputText] = useState('');
  const { searchDocuments, addDocument, searchedDocuments } = useDocument();

  return (
    <>
    <div className="flex items-center justify-center w-screen h-screen bg-gray-800">
        <div className="absolute top-10">
            <div className="flex">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                    <input value={inputText} onChange={e => setInputText(e.target.value)} className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"></input>
                </div>
                <button onClick={ (e: any) => { searchDocuments(inputText); } } className="bg-transparent hover:bg-blue text-white font-semibold hover:text-dark py-2 px-4 mx-5 border border-blue hover:border-transparent rounded">
                    Search
                </button>
                <button onClick={ (e: any) => { addDocument(inputText); } } className="bg-transparent hover:bg-blue text-white font-semibold hover:text-dark py-2 px-4 mx-2 border border-blue hover:border-transparent rounded">
                    Add
                </button>
            </div>
            <div>
                <ul className="list-inside text-white list-disc">
                    {
                    searchedDocuments?.documents?.map((document: any) => <li key={document.id}>{document.content}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>
    </>
  );
};

export default HomePage;