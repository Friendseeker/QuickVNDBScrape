import VNDB from "vndb-api"
import {VNDBResponse} from "vndb-api/lib/utils";

const clientName: string = 'skynet'
const vndb = new VNDB(clientName, {})

// Avoid Repetitive then catch hell
// Credit: FireShip https://www.youtube.com/watch?v=ITogH7lJTyE
async function query(query: string = 'dbstats'): Promise<[VNDBResponse, null] | [null, Error]> {
    try {
        const response = await vndb.query(query)
        return [response, null]
    } catch (error) {
        console.error(error)
        return [null, error]
    }
}

async function main(sid: number, gid: number) {
    // sid is the staff (Voice Actor) id
    // gid is the tag id

    // Both id are available on VNDB.org

    // Enable top-down await via separate main() function
    // Test if it works & how it works
    let res = await query()
    // console.log(res[0])

    // Get a list of works  Voiced
    res = await query(`get staff basic,voiced (id = ${sid})`)
    // console.log(res[0])
    // console.log(res[0]!['items'])
    const voiceList = res[0]!['items'][0]['voiced'] // list of works Imai Asami voiced
    console.log(voiceList)

    // For each work voiced, extract the vn id (id)
    let vn_id_Set = new Set()
    for (let entry of voiceList) {
        vn_id_Set.add(entry["id"])
    }
    console.log(vn_id_Set)

    // Given tag number and an array of IDs
    // send a query and print result
    const vn_id_array = Array.from(vn_id_Set)
    res = await query(`get vn basic (id=[${vn_id_array}] and tags=${gid})`)
    console.log(res)

    // Start printing titles that satisfy the constraints.
    console.log("Titles:")
    const size = res[0]!['num']
    for (let i = 0; i < size; i++) {
        console.log(res[0]!['items'][i]['title'])
    }
}

main(240, 1986)
// sid is the staff (Voice Actor) id
// gid is the tag id