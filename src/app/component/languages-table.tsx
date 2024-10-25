import React from "react"
import { getLeanguage } from "../../../lib/data"
import { getCategory } from "../../../lib/data"
import { dateFormat } from "../../../lib/dateFormat"
import { UpdateButton, DeleteButton } from "./button"

const LanguagesTable = async () => {
    const language = await getLeanguage()
    const category = await getCategory()
  return (
    <table className="w-full text-center border">
        <thead className="text-sm uppercase font-bold bg-gray-300">
            <tr>
                <th className="py-2 px-2">Indonesia</th>
                <th className="py-2 px-2">Gorontalo</th>
                <th className="py-2 px-2">kategori</th>
                <th className="py-2 px-2">Gambar</th>
                <th className="py-2 px-2">Suara</th>
                <th className="py-2 px-2">Di Tambah</th>
                <th className="py-2 px-2">Di Edit</th>
                <th className="py-2 px-2">Edit / Hapus</th>
            </tr>
        </thead>
        <tbody>
            {language.map((language) => (
                <tr key={language.indonesia}>
                <td className="py-2 px-2">{language.indonesia}</td>
                <td className="py-2 px-2">{language.gorontalo}</td>
                <td className="py-2 px-2">{language.category?.name || 'Kategori tidak ditemukan'}</td>
                <td className="py-2 px-2">{language.image}</td>
                <td className="py-2 px-2">{language.sound}</td>
                <td className="py-2 px-2">{dateFormat(language.created_at.toString())}</td>
                <td className="py-2 px-2">{dateFormat(language.updated_at.toString())}</td>
                <td className="flex items-center justify-center gap-1 py-2 px-2">
                    <UpdateButton />
                    <DeleteButton />
                </td>
            </tr>
            ))}
            
        </tbody>
    </table>
  )
}

export default LanguagesTable