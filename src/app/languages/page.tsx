import React from "react"
import LanguagesTable from "../component/languages-table"
import Search from "../component/search"
import { CreateButton } from "../component/button"

const languages = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-5">
        <div className="flex items-center justify-between gap-2 my-3">
            <Search/>
            <CreateButton/>
        </div>
        <LanguagesTable/>
    </div>
  )
}

export default languages