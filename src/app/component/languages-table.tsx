import React from "react";
import { getLeanguage } from "../../../lib/data";
import { dateFormat } from "../../../lib/dateFormat";
import { UpdateButton, DeleteButton } from "./button";

const LanguagesTable = async () => {
  try {
    const language = await getLeanguage();
    console.log("Fetched Languages:", language); // Log fetched languages for debugging

    // Ensure language is an array before mapping
    const languageArray = Array.isArray(language) ? language : [];

    return (
      <table className="w-full text-center border">
        <thead className="text-sm uppercase font-bold bg-gray-300">
          <tr>
            <th className="py-2 px-2">Indonesia</th>
            <th className="py-2 px-2">Gorontalo</th>
            <th className="py-2 px-2">Gambar</th>
            <th className="py-2 px-2">Suara</th>
            <th className="py-2 px-2">Di Tambah</th>
            <th className="py-2 px-2">Di Edit</th>
            <th className="py-2 px-2">Edit / Hapus</th>
          </tr>
        </thead>
        <tbody>
          {languageArray.length > 0 ? (
            languageArray.map((lang) => (
              <tr key={lang.indonesia}>
                <td className="py-2 px-2">{lang.indonesia}</td>
                <td className="py-2 px-2">{lang.gorontalo}</td>
                <td className="py-2 px-2">{lang.image}</td>
                <td className="py-2 px-2">{lang.sound}</td>
                <td className="py-2 px-2">{dateFormat(lang.created_at.toString())}</td>
                <td className="py-2 px-2">{dateFormat(lang.updated_at.toString())}</td>
                <td className="flex items-center justify-center gap-1 py-2 px-2">
                  <UpdateButton />
                  <DeleteButton />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-2 px-2 text-gray-500">No languages available</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  } catch (error) {
    console.error("Error fetching languages:", error); // Log any errors
    return <div>Error loading languages</div>; // Handle error state
  }
};

export default LanguagesTable;
