import { ColumnName } from "@/types"
import axios from "axios"

// const API_URL = "https://api.stackexchange.com/2.3/tags"
const API_URL = "localhost:300"

export async function fetchTags({
   order,
   sort,
   page,
   pageSize,
}: {
   order: "asc" | "desc"
   sort: ColumnName
   page: number
   pageSize: number
}) {
   const response = await axios.get(API_URL, {
      params: {
         site: "stackoverflow",
         order,
         sort,
         page,
         pageSize,
      },
   })

   return response.data
}