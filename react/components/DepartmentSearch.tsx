import React, { useState } from "react"
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"
import DepartmentGroup from "./DepartmentGroup"
import styles from "./styles.css"

import { SearchBar } from "vtex.store-components"

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  console.log("mi slug seleccionado es:", slug)
  return loading
    ?
    <div>loading...</div>
    :
    <div className={styles.containerDepartment}>
      <DepartmentGroup
        departments={data?.categories[0]?.children}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="Que buscas..."
        displayMode="search-and-clear-buttons"
      />
    </div>
}

export default DepartmentSearch