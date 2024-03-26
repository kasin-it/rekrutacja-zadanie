import { ColumnName, SortDirection } from "@/types"
import axios from "axios"

const API_URL = "https://api.stackexchange.com/2.3/tags"

export async function fetchTags({
   order,
   sort,
   page,
   pageSize,
}: {
   order: SortDirection
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

   //    return {
   //       items: [
   //          { name: "sdsfsddf", count: 50 },
   //          { name: "ssdfdf", count: 54440 },
   //          { name: "sdf", count: 520 },
   //       ],
   //       hasMore: false,
   //    }
}
